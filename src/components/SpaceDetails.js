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
            
            {space.tourLink?.startsWith("http")? <iframe  width='853' height='480' src={`${space.tourLink}`} frameBorder='0' allowFullScreen allow='xr-spatial-tracking'></iframe> :null}
            <h1>{space.locationName}</h1>
            
            <Link className="userLink" to={`/userprofile/${space.user?.id}`}><h2>Space Created by {space.user?.name}</h2></Link>
            <div className="infoSection">
            <div className="infoText"><h3>Location: {space.location}</h3></div>
            <div className="infoText"><h3>Space Type: {space.spaceType?.type}</h3></div>
            <div className="infoText"><h3>SQFT: {space.squareFootage}</h3></div>
            <div className="infoText"><h3>Levels: {space.numberOfLevels}</h3></div>
            <div className="infoText"><h3>Number Of Scans: {space.numberOfScans}</h3></div>
            </div>
            
        </div>
        
    </>
)
}