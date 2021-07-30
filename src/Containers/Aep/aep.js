import './aep.css'
import Rectangle from '../../Components/Rectangle/rectangle';
import CardsList from '../../Components/CardsList/cardsList';
import { FaGraduationCap, FaUserGraduate } from 'react-icons/fa';
import Teacher from '../../Components/Teacher/teacher';
import { GrUnorderedList } from 'react-icons/gr'
import { getCourses } from '../../services/requests'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'



const Aep = () => {
    // let loading = true
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
    let cardsList = []
    let courses = []
    let courseAep = []
    if(course.loaded){
        const path = window.location.pathname
        const id = path.split("/courses/")
        courseAep = course.find(course => course.id === id[1])
        const cards = [
            {name: "Atividades Próximas", amount: `${courseAep.overview ? courseAep.overview.nextActivities : "0"}`, icon: <GrUnorderedList/>},
            {name: "Cursos matriculados", amount: `${courseAep.overview ? courseAep.overview.credits : "0"}`, icon: <FaGraduationCap/>},
            {name: "Alunos online", amount: `${courseAep.overview ? courseAep.overview.enrolledStudents : "0"}`, icon: <FaUserGraduate/>},
        ]

        cardsList = cards.map((card, index) => (
            <Rectangle
                string={card.name}
                enrolledCourses={card.amount}
                icon={card.icon}
                key={index}
            />
        ))


        courses= [
            {
            image : courseAep.nextActivities[0].image,
            name : courseAep.type,
            title : courseAep.course,
            extra : courseAep.class,
            }
        ]
    }
    return(
        <div className="Dashboard">
            <div className="list-title">{courseAep.course}</div>
            <div className="sub-title">Turma {courseAep.class}</div>
            <div className="cards-list">{cardsList}</div>
            <div style={{marginTop: "34px"}}>
            <CardsList title="Próximas atividades" cards={courses}></CardsList>
            </div>
        </div>
    )
}

export default Aep;