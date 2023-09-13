import React from 'react'
import './CardUser.css'

const CardUser = ({user}) => {
    return (
        <div className="card-user">
            <img src={user.avatar} width="70px" height="70px" />
            <div>
                <h4>{user.name}</h4>
                <p>{user.email}</p>
            </div>
        </div>
    )
}

export default CardUser