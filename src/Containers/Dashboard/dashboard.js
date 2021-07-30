import './dashboard.css'
import Rectangle from '../../Components/Rectangle/rectangle';
import CardsList from '../../Components/CardsList/cardsList';
import { FaGraduationCap, FaUserGraduate } from 'react-icons/fa';
import { GrUnorderedList } from 'react-icons/gr'
import { getUser } from '../../services/requests'
import React, { useEffect, useState } from 'react'

const Dashboard = () => {
    const [user, setUser] = useState({})
    useEffect(() => {
        const getUserData = async () => {
            try {
                const { data } = await getUser()
                console.log(data)
                data.loaded = true
                setUser(data)
            } catch (err) {
            console.err(err)
            }
        }
        getUserData()
    }, [])
    let cardsList = []
    let activities = []
    if(user.loaded){
        const cards = [
            {name: "Cursos matriculados", amount: `${user?.overview ? user.overview.enrolledCourses : "0"}`, icon: <FaGraduationCap/>},
            {name: "Atividades Próximas", amount: `${user?.overview ? user.overview.nextActivities : "0"}`, icon: <GrUnorderedList/>},
            {name: "Alunos online", amount:`${user?.overview ? user.overview.onlineStudents : "0"}`, icon: <FaUserGraduate/>},
        ]
        cardsList = cards.map((card, index) => (
            <Rectangle
                string={card.name}
                enrolledCourses={card.amount}
                icon={card.icon}
                key={index}
            />
        ))

        activities = user.nextActivities?.map((card) => (
            {
            image : card.image,
            name : card.course,
            title : card.title,
            extra : card.deadline
            }
        ))
    }
    //console.log("teste", activities)
    return(
        <div className="Dashboard">
            <div className="list-title">Resume</div>
            <div className="cards-list">{cardsList}</div>
            <div style={{marginTop: "34px"}}>
                <CardsList title="Próximas atividades" cards={activities}></CardsList>
            </div>
        </div>
    )
}

export default Dashboard;