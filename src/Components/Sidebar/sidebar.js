import React from 'react'
import './sidebar.css'
import {NavLink} from 'react-router-dom'

function Sidebar (props){
    console.log(props.user);
    return (
        <div className="Sidebar">
            <img id="avatar" src={props.user.avatar} alt="avatar"></img>
            <div id="studentName">{props.user.name}</div>
            <div id="studentCourse">{props.user.course} </div>
            <div id="sidebar-links">
                <NavLink to='/' className="link-button">Dashboard</NavLink>
                <NavLink to ='/courses'className= "link-button">Meus cursos</NavLink>
            </div>
        </div>
        )
    }

export default Sidebar;