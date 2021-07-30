import './myCourses.css'
import CardsList from '../../Components/CardsList/cardsList';
import { getCourses } from '../../services/requests'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const MyCourses = () => {
    const [course, setCourses] = useState({})
    useEffect(() => {
        const getCourseData = async () => {
            try {
                const { data } = await getCourses()
                console.log(data)
                data.loaded = true
                setCourses(data)
            } catch (err) {
            console.err(err)
            }
        }
        getCourseData()
    }, [])
    let courses = []
    if(course.loaded){
        courses = course.map((card) => (
            {
            image : card.image,
            name : card.type,
            title : card.course,
            extra : card.class,
            link : "/courses/"+(card.id)
            }
        )).reverse()
    }
    return(
        <div className="MyCourses">
            <div className="list-title">Meus Cursos</div>
                <CardsList title="" cards={courses}></CardsList>
        </div>
    )
}

export default MyCourses;