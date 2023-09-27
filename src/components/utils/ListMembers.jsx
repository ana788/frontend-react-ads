'use client'

import { useState, useEffect } from "react"
import CardUser from "@/components/cards/CardUser"
import Modal from "@/components/utils/Modal"

const ListMembers = () => {

    const [users, setUsers] = useState([])
    const [modalCadastrar, setmodalCadastrarIsOpen] = useState(false)

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
            <button onClick={() => {setmodalCadastrarIsOpen(true)}}>Cadastrar</button>
            {
                users.map((user) => { //map - usado para percorrer array. Não dá pra usar map em objeto.
                    return (
                        <CardUser key={user.id} user={user} /> //forma do react identificar os cards. Diferenciar um card do outro
                    )
                })
            }
            <Modal isOpen={modalCadastrar} changeOpen={setmodalCadastrarIsOpen}>
                <h1>Cadastros</h1>
                <form>
                    Nome:<input type="text" name="name"/><br/>
                    Email: <input type="text" name="email"/><br/>
                    Pass: <input type="text" name="pass"/><br/>
                    Foto: <input type="text" name="foto"/><br/>
                    <input type="submit" value="Cadastrar"/>
                </form>
            </Modal>

        </>
    )
}

export default ListMembers