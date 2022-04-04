import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./SpaceList.css"

export const SpaceList = () => {
  const [spaces, changeSpaces] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8090/spaces?_expand=user&_expand=spaceType")
      .then((res) => res.json())
      .then((spacesFromAPI) => {
        changeSpaces(spacesFromAPI);
      });
  }, []);



  return (
    <>
            
            
      {spaces.map((spaceObject) => {
        return ( 
          <div className="block">
          <Link className="spaceLinks" key={spaceObject.id} to={`/spacedetails/${spaceObject.id}`}>
          <div  className="spaceBoxes" key={`space--${spaceObject.id}`}>
          <div class="box">

          <img src={spaceObject.coverPhotoLink} width={525} height={320} /> 

          </div>
            <h2>{spaceObject.locationName}</h2>
          </div>
          </Link>
          </div>
          
        );
      })}
    </>
  );
};
