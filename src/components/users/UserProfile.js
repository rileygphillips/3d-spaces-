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

    useEffect(() => {getSpaces()}, []);

const deleteSpace = (id) => {
    return fetch(`http://localhost:8090/spaces/${id}`, {
        method: "DELETE"
    }).then(getSpaces)
}
    return (
    <>
        <div> <h1 className="sectionHeader">Your Profile</h1> </div>
        <div className="buttonArea">
        <div>{localStorage.getItem("space_user") === userId ? <Link key="createLink" className="createLink"  to= "/createspace"> <div> <button className="createButton"> <span className="text"> Create New Space </span> </button> </div> </Link> :null}</div>
        </div>
        <div className="userSpaceBoxes" >
        {user.spaces.map((spaceObject) => {
        return ( 
            <>
        <div className="spaceBoxes">
        <Link className="spaceNameLink" key={spaceObject.id} to={`/spacedetails/${spaceObject.id}`}> 

        <img src={spaceObject.coverPhotoLink} /> 

        <h3>{spaceObject.locationName}</h3>

        </Link>
        
        <div className="editAndDelete">
        
        {localStorage.getItem("space_user") === userId ? <div><button className="button-75" role="button" onClick={ () => history.push(`/editspace/${spaceObject.id}`)}> <span className="text">  edit </span> </button></div> :null}

        {localStorage.getItem("space_user") === userId ? <div><button className="button-75" role="button" onClick={ () => {deleteSpace(spaceObject.id)} }> <span className="text"> delete </span> </button></div>  :null}

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
