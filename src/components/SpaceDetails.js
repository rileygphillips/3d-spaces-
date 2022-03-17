import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const SpaceDetails = () => {
  const [space, changeSpace] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8090/spaces?_expand=user&_expand=spaceType")
      .then((res) => res.json())
      .then((spacesFromAPI) => {
        changeSpace(spacesFromAPI);
      });
  }, []);

  return (
    <>
      {space.map((spaceObject) => {
        return ( 
          <div key={`user--${spaceObject.id}`}>
            <h3>{spaceObject.locationName}</h3>
            <div>Space Created by {spaceObject.user.name}</div>
            <div>Location: {spaceObject.location}</div>
            <div>Space Type: {spaceObject.spaceType.type}</div>
            <div>SQFT: {spaceObject.squareFootage}</div>
            <div>Levels: {spaceObject.numberOfLevels}</div>
            <div>Number Of Scans: {spaceObject.numberOfScans}</div>
            <div><button>3D Tour Link</button></div>
          </div>
        );
      })}
    </>
  );
};