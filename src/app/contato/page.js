import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"
import SideBar from "@/components/layout/SideBar"
import CustomButton from "@/components/utils/CustomButton"

const Contato = () => {
    return (
        <>
            <Header />
            <div className="container">
                <h1>Contato</h1>
                <p>Fale conosco através do email: email@gmail.com</p>
                <SideBar />
                <CustomButton titulo="Login"/>
                <CustomButton titulo="Cadastre-se"/>
            </div>
            <Footer />

        </>
    )
}

export default Contato