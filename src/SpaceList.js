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
          
          <div  className="spaceBoxes" key={`user--${spaceObject.id}`}>
            <Link to={`/spacedetails/${spaceObject.id}`}><img src={spaceObject.coverPhotoLink} /></Link>
            <h3>{spaceObject.locationName}</h3>
          </div>
          
        );
      })}
    </>
  );
};
