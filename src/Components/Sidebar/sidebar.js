import React from 'react'
import './sidebar.css'
import { NavLink } from 'react-router-dom'

function Sidebar (props){
    return (
        <div className="Sidebar">
            <img id="avatar" src={props.user.avatar} alt="avatar"></img>
            <div id="studentName">{props.user.name}</div>
            <div id="studentCourse">{props.user.course} </div>
            <div id="sidebar-links">
                <NavLink exact to='/' className="main-nav" activeClassName="main-nav-active">Dashboard</NavLink>
                <NavLink to ='/courses'className= "main-nav" activeClassName="main-nav-active">Meus cursos</NavLink>
            </div>
        </div>
        )
    }

export default Sidebar;