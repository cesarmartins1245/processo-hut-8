import './dashboard.css'
import Rectangle from '../../Components/Rectangle/rectangle';
import CardsList from '../../Components/CardsList/cardsList';
import { FaGraduationCap, FaUserGraduate } from 'react-icons/fa';
import { GrUnorderedList } from 'react-icons/gr'
import { getUser } from '../../services/requests'
import React, { useEffect, useState } from 'react'





const Dashboard = () => {
    const [user, setUser] = useState([])
    useEffect(() => {
        const getUserData = async () => {
            try {
                const { data } = await getUser()
                console.log(data)
                setUser(data)
            } catch (err) {
            console.err(err)
            }
        }
        getUserData()
    }, [])
    const cards = [
        {name: "Cursos matriculados", amount: `${user?.overview?.enrolledCourses}`, icon: <FaGraduationCap/>},
        {name: "Atividades Próximas", amount: `${user?.overview?.nextActivities}`, icon: <GrUnorderedList/>},
        {name: "Alunos online", amount:`${user?.overview?.onlineStudents}`, icon: <FaUserGraduate/>},
    ]
    const cardsList = cards.map((card, index) => (
        <Rectangle
            string={card.name}
            enrolledCourses={card.amount}
            icon={card.icon}
            key={index}
        />
    ))
    const activities = [
        {
            image: "https://i.imgur.com/aadwyfC.jpg",
            name: "Algoritmos e Programação",
            title: "Enviar arquivos Peter Smokes",
            extra: "10/10/2020"
        },
        {
            image: "https://i.imgur.com/RgQrlAS.jpg",
            name: "Projeto de Banco de Dados",
            title: "Enviar o esquema MySQL",
            extra: "10/10/2020"
        }
    ]

    /*const activities = [
        {
            image: `${user?.nextActivities?.image}`,
            name:  `${user?.nextActivities?.course}`,
            title: `${user?.nextActivities?.title}`,
            extra: `${user?.nextActivities?.deadline}`
        },
        {
            image: `${user?.nextActivities?.image}`,
            name:  `${user?.nextActivities?.course}`,
            title: `${user?.nextActivities?.title}`,
            extra: `${user?.nextActivities?.deadline}`
        }
    ]
    const tables = user?.nextActivities?.map((card, index) => (
        <CardsList
        image={card.image}
        name={card.course}
        title={card.title}
        extra={card.deadline}
        />
    ))
    */
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