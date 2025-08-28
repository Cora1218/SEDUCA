/**
 * File: Layout.jsx
 * Created by: María Guadalupe Martínez Jiménez (mmartinezj004@uaemex.mx)
 * Created on: 2025-07-11
 * Last modified: 2025-07-17
 * Description: Component that displays the layout structure for the website.
 */

function Layout({ children }) {
  return (
    <div className="container py-0"> {/* Centre the content and apply side margins (Bootstrap) */}
      {children} {/*Represents everything you put inside <Layout>...</Layout>. */}
    </div>
  );
}

export default Layout;
