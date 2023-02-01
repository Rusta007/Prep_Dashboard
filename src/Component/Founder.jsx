import React from "react";
import "../Style/Founder.css";

export default function Founder() {
  return (
    <div>
      <h1 style={{ textAlign: "center", marginBottom: "30px", color: "#4b8ce8" }} className='ourTeam'>
        Our Team
      </h1>

      <div className="founder-image">
        {/* <img src="../images/c.png" alt="" className='c' /> */}
        <div className="personal">
          <div>
            <img src="../images/mamta .jpg" alt="" width={"100px"} />
          </div>

          <div className="details">
            <h3>Mamta Kumari</h3>
            <p>Co-Founder</p>
            <div className="founder">
              <img
                src="../images/amazon.jpg"
                alt=""
                className="image-founder"
                width={"20px"}
              />
              <img 
                src="../images/sam.jpg"
                alt=""
                className="image-founder samsung"
                width={"20px"}
              />
            </div>
          </div>
        </div>

        <div className="personal">
          <div>
            <img src="../images/aditya.png" alt="" width={"100px"} />
          </div>

          <div className="details">
            <h3>Aditya Verma</h3>
            <p>Co-Founder</p>
            <div className="founder">
              <img  src="../images/p1.jpg"
                alt=""
                className="image-founder samsung"
                width={"40px"}
              />
              <img
                src="../images/pp.png"
                alt=""
                className="image-founder1"
                width={"40px"}
              />
            </div>
          </div>
        </div>

      </div>
      <img src="../images/Team1.png" alt="" class="team-image"/>
      <div class="border"></div>
    
    </div>
  );
}
