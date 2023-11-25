import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"
import SideBar from "@/components/layout/SideBar"
import Button from "@/components/utils/Button"

const Contato = () => {
    return (
        <>
            <Header />
            <div className="container">
                <SideBar />
                <div>
                    <h1>Contato</h1>
                    <p>Fale conosco através do email: email@gmail.com</p>
                    <Button variant="primario" titulo="Login" />
                    <Button variant="secundario" titulo="Cadastre-se" />
                    <Button variant="ghost" titulo="Cancelar" />
                </div>
            </div>
            <Footer />

        </>
    )
}

export default Contato