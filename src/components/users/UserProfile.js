import React, { useEffect, useState } from "react";
import "./UserProfile.css"
//Display logged in user//
//Display logged in user info (location & numberOfSpaces)
//Display logged in user's created Spaces//
//Create New Space Button that LINKS to form//

export const UserProfile = () => {
  const [user, changeUser] = useState({spaces:[]});

  useEffect(() => {
    fetch(`http://localhost:8090/users/${localStorage.getItem("space_user")}?_embed=spaces`)
      .then((res) => res.json())
      .then((usersFromAPI) => {
        changeUser(usersFromAPI);
      });
  }, []);

  return (
    <>
      {user.spaces.map((spaceObject) => {
        return <div  className="spaceBoxes" key={`user--${spaceObject.id}`}>
        <img src={spaceObject.coverPhotoLink} />
        <h3>{spaceObject.locationName}</h3>
      </div>
      })}
    </>
  );
};
