import React from 'react'
import './teacher.css'

function Teacher(props){
    return(
        <div className="Teacher">
            <div>
                <img src={props.image} alt="teacher-image"></img>
                <div id="teacher-name">{props.name}</div>
                <div id="teacher-title">{props.title}</div>
            </div>
        </div>
    )
}

export default Teacher;