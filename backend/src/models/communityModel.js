/**
 * File: backend/src/models/communityModel.js
 * Created by: María Guadalupe Martínez Jiménez (mmartinezj004@uaemex.mx)
 * Created on: 2025-09-25
 * Last modified: 2025-11-18
 * Description: DB queries for comunidades  using async/await, supporting filters.
 */

const pool = require("../config/database");

// Function for getting comunidades (with optional filters)
const findAllCommunities = async (filters = {}) => {
  try {
    // 1. Query base
    let query = `
      SELECT t1.* FROM (
        SELECT
          TblComunidades.CveEntAsg,
          TblPlanes.CveTpoMod,
          TblPlanes.CveTpoPer,
          TblPlanes.NomEntPln,
          TblAsignaturas.CveEntPln,
          TblAsignaturas.NomEntAsg,
          TblAsignaturas.NumPerCom,
          TblAsignaturas.CveTpoCnt,
          TblComunidades.CveEntCom,
          TblComunidades.NumGpoCom,
          TblComunidades.CveCicEsc,
          TblComunidades.CveEntVer,
          TblPerfilesIntegrantes.CveEntPrf,
          TblAsignaturas.CveCtrEsc,
          TblComunidades.CveEntEsp,
          NomTpoMod,
				  NomTpoPer,
				  NomCicEsc,
          TblComunidades.FecCieCom,
          TblComunidades.NomGpoCom,
          TblPerfiles.DesEntPrf,
          TblEspacios.NomEntEsp,
          t2.nomCompleto, 
          t2.inCompleto, 
				  t2.FotEntInt,
				  t2.CorEntInt
        FROM
          TblPerfilesIntegrantes,
          TblAsignaturas,
          TblPlanes,
          TblPerfiles,
          TblComunidades,
          TblTiposModalidad,
				  TblTiposPeriodo,
          TblCicloEscolar,
          TblEspacios,
          (

            SELECT *

            FROM (

                SELECT 

                    tpi.CveEntCom, 

                    CONCAT(ti.NomEntInt, ' ', ti.AppEntInt, ' ', ti.ApmEntInt) AS nomCompleto, 

                    CONCAT(ti.NomEntInt) AS inCompleto, 

                    ti.FotEntInt, 

                    ti.CorEntInt,

                    ROW_NUMBER() OVER (PARTITION BY tpi.CveEntCom ORDER BY FIELD(tpi.CveEntPrf, 8, 2, 10, 15)) AS rn

                FROM 

                    (SELECT CveEntCom 

                    FROM TblComunidades 

                    WHERE CveEntCom IN (SELECT CveEntCom FROM TblPerfilesIntegrantes WHERE CveEntInt = 250) 

                      AND FecCieCom >= CURDATE()) tc,

                    TblPerfilesIntegrantes tpi, 

                    TblIntegrantes ti

                WHERE 

                    tpi.CveEntCom = tc.CveEntCom AND 

                    tpi.CveEntInt = ti.CveEntInt AND 

                    tpi.CveEntPrf IN (8, 2, 10, 15)

            ) AS ranked

            WHERE rn = 1 

          ) t2

      WHERE
          TblPerfilesIntegrantes.CveEntInt = 250
          AND TblPerfilesIntegrantes.CveEntCom = TblComunidades.CveEntCom
          AND TblAsignaturas.CveEntAsg = TblComunidades.CveEntAsg
          AND TblAsignaturas.CveTipoGuia != 3
          AND TblComunidades.CveEntPln = TblPlanes.CveEntPln
          AND TblPerfiles.CveEntPrf = TblPerfilesIntegrantes.CveEntPrf
          AND TblTiposModalidad.CveTpoMod = TblPlanes.CveTpoMod
          AND TblTiposPeriodo.CveTpoPer = TblPlanes.CveTpoPer
          AND TblComunidades.CveCicEsc = TblCicloEscolar.CveCicEsc
          AND TblEspacios.CveEntEsp = TblComunidades.CveEntEsp
          AND t2.CveEntCom = TblComunidades.CveEntCom 
          AND TblComunidades.FecCieCom >= CURDATE()
      `;

      // 2. Apply dynamic filters (supports multiple values)
      const values = [];

      //  Map from frontend keys to actual database columns
      const columnMap = {
        NomTpoMod: "NomTpoMod",
        NomTpoPer: "NomTpoPer",
        CveCtrEsc: "TblAsignaturas.CveCtrEsc",
        NomCicEsc: "NomCicEsc",
        NomGpoCom: "TblComunidades.NomGpoCom",
        DesEntPrf: "TblPerfiles.DesEntPrf",
        NomEntPln: "TblPlanes.NomEntPln",
        NomEntAsg: "TblAsignaturas.NomEntAsg",
        NomEntEsp: "TblEspacios.NomEntEsp"
      };

      // Build WHERE conditions dynamically
      for (const [key, rawValue] of Object.entries(filters)) {
        const valuesArray = rawValue.split(",").map(v => v.trim());
        const column = columnMap[key] || key;

        if (valuesArray.length > 1) {
          // Multiple → use LIKE for each value
          const placeholders = valuesArray.map(() => `${column} LIKE ?`).join(" OR ");
          query += ` AND (${placeholders})`;
          values.push(...valuesArray.map(v => `%${v}%`));
        } else {
          // Single value
          query += ` AND ${column} LIKE ?`;
          values.push(`%${valuesArray[0]}%`);
        }
      }

       // 3. Close the subquery and apply ordering 
       query += `   
        ORDER BY
          TblComunidades.CveEntCom DESC,
          TblAsignaturas.NomEntAsg,
          CveTpoMod,
          NomEntPln
          -- LIMIT 10
      ) t1
    ORDER BY FIELD(CveEntPrf,8,10,2,15,1,3,4,5,6,7), CveEntPrf;
    `;

    // 4. Execute the query
    const [results] = await pool.promise().query(query, values);

    console.log("Datos de la BD (communityModel):", results.length, "registros");
    console.log("Ejemplo de registro:", results[0]);
    return results;
  } catch (err) {
    console.error("Error en communityModel:", err.message || err);
    throw err;
  }
};

module.exports = {
  findAllCommunities,
};
