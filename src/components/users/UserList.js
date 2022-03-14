import React, { useEffect, useState } from "react";

export const UserList = () => {
    
    const [users, changeUsers] = useState([])

    useEffect(
      () => {
        fetch("http://localhost:8090/users")
        .then(res => res.json())
        .then((usersFromAPI) => {
          changeUsers(usersFromAPI)
        })
      },
      []
    )

    return (
      <>

      {
          users.map(
            (userObject) => {
              return <h2 key={`user--${userObject.id}`}>{userObject.name}</h2>
            }
          )
      }
      </>
    )
}