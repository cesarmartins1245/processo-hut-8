import React from 'react'
import './cardsList.css'
import { NavLink } from 'react-router-dom'

function Card(props){
    const { image, name, title, extra, link} = props.card;
    console.log("teste cardslist",props)
    return(
        <div className="Card">
            <NavLink exact to={link||''}>
                <div>
                    <img src={image} alt="card image"></img>
                    <div className="card-content">
                        <div className="card-name">{name}</div>
                        <div className="card-title">{title}</div>
                        <div className="card-extra">{extra}</div>
                    </div>
                </div>
            </NavLink>
        </div>
    )
}

export default function CardsList(props){
    const cardsList = props.cards.map((card, index) => (
        <Card
            card={card}
            key={index}
        />
    ))

    return(
        <div className="CardsList">
            <div>{props.title}</div>
            <div className="cards-list">{cardsList}</div>
        </div>
    )
}