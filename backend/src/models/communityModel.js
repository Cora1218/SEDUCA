/**
 * File: backend/src/models/communityModel.js
 * Created by: María Guadalupe Martínez Jiménez (mmartinezj004@uaemex.mx)
 * Created on: 2025-09-25
 * Last modified: 2025-10-13
 * Description: DB queries for comunidades  using async/await.
 */

const pool = require("../config/database");

// Function for getting comunidades
const findAllCommunities = async () => {
  try {
    const [results] = await pool.promise().query(`
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
          'Maestro Jirafales' AS nomCompleto,
          'Profesor' AS nPerfil,
          -- NomTpoMod,
          -- NomTpoPer,
          NomCicEsc,
          TblComunidades.FecCieCom,
          TblComunidades.NomGpoCom
        FROM
          TblPerfilesIntegrantes,
          TblAsignaturas,
          TblPlanes,
          TblPerfiles,
          TblComunidades,
          TblCicloEscolar
        WHERE
          TblPerfilesIntegrantes.CveEntInt = 55436
          AND TblPerfilesIntegrantes.CveEntAsg = TblComunidades.CveEntAsg
          AND TblPerfilesIntegrantes.CveEntVer = TblComunidades.CveEntVer
          AND TblPerfilesIntegrantes.NumGpoCom = TblComunidades.NumGpoCom
          AND TblPerfilesIntegrantes.CveCicEsc = TblComunidades.CveCicEsc
          AND TblPerfilesIntegrantes.CveEntEsp = TblComunidades.CveEntEsp
          AND TblAsignaturas.CveEntAsg = TblComunidades.CveEntAsg
          AND TblAsignaturas.CveTipoGuia != 3
          AND TblComunidades.CveEntPln = TblPlanes.CveEntPln
          AND TblPerfiles.CveEntPrf = TblPerfilesIntegrantes.CveEntPrf
          AND TblComunidades.CveCicEsc = TblCicloEscolar.CveCicEsc
          -- AND TblTiposModalidad.CveTpoMod = TblPlanes.CveTpoMod
          -- AND TblTiposPeriodo.CveTpoPer = TblPlanes.CveTpoPer
          -- AND TblComunidades.FecCieCom >= CURDATE()
        ORDER BY
          TblComunidades.CveEntCom DESC,
          TblAsignaturas.NomEntAsg,
          CveTpoMod,
          NomEntPln
        LIMIT 3
        
      ) t1
      ORDER BY FIELD(CveEntPrf,8,10,2,15,1,3,4,5,6,7), CveEntPrf;
    `);

    console.log("Datos de la BD (communityModel):", results.length, "registros");
    return results;
  } catch (err) {
    console.error("Error en communityModel:", err.message || err);
    throw err;
  }
};

module.exports = {
  findAllCommunities,
};
