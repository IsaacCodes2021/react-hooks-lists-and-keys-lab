import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  let linx = links.map((link, index) => {
    return <a href={'#' +link} key={index}>{link}</a>
  })

  return (
  <nav>
    {linx}
  </nav>
  );
}

export default NavBar;
