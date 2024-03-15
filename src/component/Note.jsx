import React from "react";


function Note(props) {

    function handleClick() {
        props.onDelete(props.id);
    }
    return (
        <div className="note">
            <h1>{props.heading}</h1>
            <p>{props.note}</p>
            <button onClick={handleClick}>Delete</button> 
        </div>
    );
}

export default Note;