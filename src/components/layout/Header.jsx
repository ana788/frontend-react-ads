//import React from 'react' - essa linha não é mais obrigatória
import './Header.css'
import Link from 'next/link'

const Header = () => {
  return (
    <header id="header">
        <h1 style={style.titulo}>Logo</h1>
        <nav>
            <ul>
                <li><Link style={style.linkMenu} href="/">Home</Link></li>
                <li><Link style={style.linkMenu} href={'/quem-somos'}>Quem somos</Link></li>
                <li><Link style={style.linkMenu} href={'/contato'}>Contato</Link></li>
                <li><Link style={style.linkMenu} href={'/membros'}>Membros</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header

//CSS-IN-JS
const style = {
  linkMenu: {
    color: '#fff',
    textDecoration: 'none'
  },

  titulo: {
    fontSize: '40px'
  }
}