//import React from 'react' - essa linha não é mais obrigatória
import './Header.css'

const Header = () => {
  return (
    <header id="header">
        <h1>Logo</h1>
        <nav>
            <ul>
                <li>Home</li>
                <li>Quem somos</li>
                <li>Contato</li>
            </ul>
        </nav>
    </header>
  )
}

export default Header