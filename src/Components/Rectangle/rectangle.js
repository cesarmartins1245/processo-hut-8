import React from 'react'
import './rectangle.css'


function Rectangle(props){
    return(
        <div className="Rectangle">
            <div>
                <div id="numberOfCourses">{props.enrolledCourses}</div>
                <div id="enrolledCourses">{props.string}</div>
            </div>
            <div className="icon-container">
                <i id="icone">{props.icon}</i>
            </div>
        </div>
    )
}

export default Rectangle;