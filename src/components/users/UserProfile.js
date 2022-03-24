import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import "./UserProfile.css"
//Display logged in user//
//Display logged in user info (location & numberOfSpaces)
//Display logged in user's created Spaces//
//Create New Space Button that LINKS to form//

export const UserProfile = () => {
    const [user, changeUser] = useState({spaces:[]});
   
    const history = useHistory()
    const {userId} = useParams()

    const getSpaces = () => {
        fetch(`http://localhost:8090/users/${userId}?_embed=spaces`)
        .then((res) => res.json())
        .then((usersFromAPI) => {
        changeUser(usersFromAPI);
        });
    }

    useEffect(() => {getSpaces()}, [userId]);

const deleteSpace = (id) => {
    return fetch(`http://localhost:8090/spaces/${id}`, {
        method: "DELETE"
    }).then(getSpaces)
}
    return (
    <>
        <div className="sectionHeader"> <h1>{`${user.name}`}</h1> </div>
        
        <div className="buttonArea">{localStorage.getItem("space_user") === userId ? <Link key="createLink" className="createLink"  to= "/createspace"> <div className="newSpaceButton"> <button className="createButton"> <span className="text"> Create New Space </span> </button> </div> </Link> :null}</div>
        
        <div className="userSpaceBoxes" >
        {user.spaces.map((spaceObject) => {
        return ( 
            <> 
        <div className="block">

        <div className="spaceBoxes">

        <Link className="spaceNameLink" key={spaceObject.id} to={`/spacedetails/${spaceObject.id}`}> 

        <img src={spaceObject.coverPhotoLink} /> 

        <h2>{spaceObject.locationName}</h2>

        </Link>
        </div>

        <div className="editAndDelete">
        
        {localStorage.getItem("space_user") === userId ? <div className="editDeleteButtons"><button className="button-75" role="button" onClick={ () => history.push(`/editspace/${spaceObject.id}`)}> <span className="text">  edit </span> </button></div> :null}

        {localStorage.getItem("space_user") === userId ? <div className="editDeleteButtons"><button className="button-75" role="button" onClick={ () => {deleteSpace(spaceObject.id)} }> <span className="text"> delete </span> </button></div>  :null}

        </div>

        </div>

        </>
                    )
                }
            )
        }
        </div>
    </>
    );
};
