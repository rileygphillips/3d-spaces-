import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./SpaceDetails.css"

export const SpaceDetails = () => {
    const [space, getSpace] = useState({});
    const {spaceId} = useParams()

useEffect(() => {
    fetch(`http://localhost:8090/spaces/${spaceId}?_expand=user&_expand=spaceType`)
    .then((res) => res.json())
    .then((spaceFromAPI) => {
        getSpace(spaceFromAPI);
    });
    }, [spaceId]);


return (
    <>

        <div key={`space--${space.id}`} className="spaceBoxes">
            {space.tourLink?.startsWith("http")? <iframe width='853' height='480' src={`${space.tourLink}`} frameBorder='0' allowFullScreen allow='xr-spatial-tracking'></iframe> :null}
            <h2>{space.locationName}</h2>
            <Link className="userLink" to={`/userprofile/${space.user?.id}`}><h3>Space Created by {space.user?.name}</h3></Link>
            <div>Location: {space.location}</div>
            <div>Space Type: {space.spaceType?.type}</div>
            <div>SQFT: {space.squareFootage}</div>
            <div>Levels: {space.numberOfLevels}</div>
            <div>Number Of Scans: {space.numberOfScans}</div>
            
        </div>
        
    </>
)
}