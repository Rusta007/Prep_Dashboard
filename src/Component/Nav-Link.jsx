import React from "react";
import '../Style/navLink.css';
function NavbarLink() {
  return (
    <>
      <div className="navlink">
        <select className="btn-hover">
          <option>Study Material</option>
        </select>
        <select className="btn-hover">
          <option>Course and Programm</option>
        </select>

        <span className='btn-hover'>Practice Coding</span>
        <span className='btn-hover'>Elevation Academy</span>
        <span className='btn-hover'>Campus Program</span>
      </div>
    </>
  );
};

export default NavbarLink;