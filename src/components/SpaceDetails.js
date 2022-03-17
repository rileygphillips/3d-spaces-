import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

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
            <h3>{space.locationName}</h3>
            <Link to={`/userprofile/${space.user?.id}`}><div>Space Created by {space.user?.name}</div></Link>
            <div>Location: {space.location}</div>
            <div>Space Type: {space.spaceType?.type}</div>
            <div>SQFT: {space.squareFootage}</div>
            <div>Levels: {space.numberOfLevels}</div>
            <div>Number Of Scans: {space.numberOfScans}</div>
            
        </div>
        
    </>
)
}