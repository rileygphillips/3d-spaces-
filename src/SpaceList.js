import React, { useEffect, useState } from "react";

export const SpaceList = () => {
  const [spaces, changeSpaces] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8090/spaces?_expand=user&_expand=spacetypes")
      .then((res) => res.json())
      .then((spacesFromAPI) => {
        changeSpaces(spacesFromAPI);
      });
  }, []);

  return (
    <>
      {spaces.map((spaceObject) => {
        return (
          <div key={`user--${spaceObject.id}`}>
            <h3>{spaceObject.locationName}</h3>
            <div>Space Created by {spaceObject.user.name}</div>
            <div>Location: {spaceObject.location}</div>
            <div>Space Type: {spaceObject.spaceTypeId.type}</div>
            <div>SQFT: {spaceObject.squareFootage}</div>
            <div>Levels: {spaceObject.numberOfLevels}</div>
            <div>Number Of Scans: {spaceObject.numberOfScans}</div>
            <div>3D Tour Link: {spaceObject.tourLink}</div>
          </div>
        );
      })}
    </>
  );
};
