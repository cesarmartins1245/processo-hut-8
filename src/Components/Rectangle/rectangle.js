import React from 'react'
import './rectangle.css'


function Rectangle(props){
    let aux = props.enrolledCourses
        if (props.enrolledCourses<10){
            aux=`0${props.enrolledCourses}`
        }
    return(
        <div className="Rectangle">
            <div>
                <div id="numberOfCourses">{aux}</div>
                <div id="enrolledCourses">{props.string}</div>
            </div>
            <div className="icon-container">
                <i id="icone">{props.icon}</i>
            </div>
        </div>
    )
}

export default Rectangle;