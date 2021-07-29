import './myCourses.css'
import CardsList from '../../Components/CardsList/cardsList';
import { getCourses } from '../../services/requests'
import React, { useEffect, useState } from 'react'

const MyCourses = () => {
    let loading = true
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
    let activities = []
    console.log("segunda pagina", course)
    if(course.loaded){
        activities = course.map((card) => (
            {
            image : card.image,
            name : card.type,
            title : card.course,
            extra : card.class
            }
        )).reverse()
    }
    return(
        <div className="Dashboard">
            <div className="list-title">Meus Cursos</div>
            <CardsList cards={activities}></CardsList>
        </div>
    )
}

export default MyCourses;