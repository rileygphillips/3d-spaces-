import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const SpaceDetails = () => {
  const [space, getSpace] = useState([]);
  const {spaceId} = useParams()

  useEffect(() => {
    fetch(`http://localhost:8090/spaces?_expand=user&_expand=spaceType`)
      .then((res) => res.json())
      .then((spaceFromAPI) => {
        getSpace(spaceFromAPI);
      });
  }, []);
  

  return (
    <>
      {space.map((spaceObject) => {
        return ( 
          <div key={`space--${spaceObject.id}`} className="spaceBoxes">
            <iframe width='853' height='480' src={`${spaceObject.tourLink}`} frameBorder='0' allowFullScreen allow='xr-spatial-tracking'></iframe>
            <h3>{spaceObject.locationName}</h3>
            <div>Space Created by {spaceObject.user.name}</div>
            <div>Location: {spaceObject.location}</div>
            <div>Space Type: {spaceObject.spaceType.type}</div>
            <div>SQFT: {spaceObject.squareFootage}</div>
            <div>Levels: {spaceObject.numberOfLevels}</div>
            <div>Number Of Scans: {spaceObject.numberOfScans}</div>
            
          </div>
        );
      })}
    </>
  );
};