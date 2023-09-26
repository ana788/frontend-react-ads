'use client'

import { useState, useEffect } from "react"
import CardUser from "@/components/cards/CardUser"

const ListMembers = () => {

    const [users, setUsers] = useState([])
    useEffect (() => {
        const getMembers = async () => {
            const response = await fetch('http://localhost:3300/user/list', { cache: 'no-store' })
            const data = await response.json()
            setUsers(data)
        }
        getMembers()
    }, []) 


    return (
        <>
            <h1>Membros</h1>
            <button>Cadastrar</button>
            {
                users.map((user) => { //map - usado para percorrer array. Não dá pra usar map em objeto.
                    return (
                        <CardUser key={user.id} user={user} /> //forma do react identificar os cards. Diferenciar um card do outro
                    )
                })
            }

        </>
    )
}

export default ListMembers