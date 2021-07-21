import React from 'react'
import './dashboard.css'
import Rectangle from '../../Components/Rectangle/rectangle';
import CardsList from '../../Components/CardsList/cardsList';
import { FaGraduationCap, FaUserGraduate } from 'react-icons/fa';
import { GrUnorderedList } from 'react-icons/gr'




const cards = [
    {name: "Ciência da computação", amount:"02", icon: <FaGraduationCap/>},
    {name: "Atividades Próximas", amount:"02", icon: <GrUnorderedList/>},
    {name: "Alunos online", amount:"785", icon: <FaUserGraduate/>},
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

function Dashboard(){
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