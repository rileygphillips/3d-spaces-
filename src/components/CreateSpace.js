import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"; 

export const CreateSpace = () => {

    const [space, updateSpace] = useState({
        locationName: "",
        location: "",
        squareFootage: "",
        numberOfScans: "",
        numberOfLevels: "",
        coverPhotoLink: "",
        tourLink: "",
        spaceTypeId: 0
    });
    
    const [spaceTypes, updateSpaceTypes] = useState([]) 
    const history = useHistory()

    useEffect(() => {
        fetch(`http://localhost:8090/spaceTypes`)
            .then((res) => res.json())
            .then((spacesFromAPI) => {
            updateSpaceTypes(spacesFromAPI);
            });
        }, []);

    const saveSpace = (event) => {
        event.preventDefault()
        const newSpace = {
            userId: parseInt(localStorage.getItem("space_user")),
            locationName: space.locationName,
            location: space.location,
            squareFootage: space.squareFootage,
            numberOfScans: space.numberOfScans,
            numberOfLevels: space.numberOfLevels,
            coverPhotoLink: space.coverPhotoLink,
            tourLink: space.tourLink,
            spaceTypeId: parseInt(space.spaceTypeId) 
        }
        

        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newSpace)
        }

        return fetch("http://localhost:8090/spaces", fetchOption)
        .then(() => {
            history.push(`/userprofile/${localStorage.getItem("space_user")}`)
        })
    }

    return (
        <form className="spaceForm">
            <h2 className="spaceForm__title">Create New Space</h2>

            <div>
            <div><label htmlFor="locationName">What Type Of Space is it?</label></div>
            <select name="selectType" id="selectType"
            onChange={
                (evt) => {
                    const copy = {...space}
                    copy.spaceTypeId = evt.target.value
                    updateSpace(copy)
                }
            }
            >
            {spaceTypes.map(spaceType => <option value={spaceType.id}>{spaceType.type}</option>)}
            </select>
            </div>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="locationName">Location Name:</label>
                    <input
                    onChange={
                        (evt) => {
                            const copy = {...space}
                            copy.locationName = evt.target.value
                            updateSpace(copy)
                        }
                    }
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Street Name or Commercial Building Name "
                        />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Location:</label>
                    <input
                    onChange={
                        (evt) => {
                            const copy = {...space}
                            copy.location = evt.target.value
                            updateSpace(copy)
                        }
                    }
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="City and State"
                        />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="squareFootage">Square Footage:</label>
                    <input
                    onChange={
                        (evt) => {
                            const copy = {...space}
                            copy.squareFootage = evt.target.value
                            updateSpace(copy)
                        }
                    }
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Estimated Square Footage"
                        />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="numberOfScans">Number Of Scans:</label>
                    <input
                    onChange={
                        (evt) => {
                            const copy = {...space}
                            copy.numberOfScans = evt.target.value
                            updateSpace(copy)
                        }
                    }
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="How Many Scans Did It Take To Complete The Space?"
                        />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="numberOfLevels">Number Of Levels:</label>
                    <input
                    onChange={
                        (evt) => {
                            const copy = {...space}
                            copy.numberOfLevels = evt.target.value
                            updateSpace(copy)
                        }
                    }
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="How Many Levels Does The Space Have?"
                        />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="coverPhotoLink">Cover Photo:</label>
                    <input
                    onChange={
                        (evt) => {
                            const copy = {...space}
                            copy.coverPhotoLink = evt.target.value
                            updateSpace(copy)
                        }
                    }
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Paste Image URL Here"
                        />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="tourLink">3D Tour Link:</label>
                    <input
                    onChange={
                        (evt) => {
                            const copy = {...space}
                            copy.tourLink = evt.target.value
                            updateSpace(copy)
                        }
                    }
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Paste URL Here"
                        />
                </div>
            </fieldset>
            
            <button className="btn btn-primary" onClick={saveSpace}>
                Submit Space
            </button>
        </form>
    )
}