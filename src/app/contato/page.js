import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"
import SideBar from "@/components/layout/SideBar"

const Contato = () => {
    return (
        <>
            <Header />
            <div className="container">
                <h1>Contato</h1>
                <p>Fale conosco através do email: email@gmail.com</p>
                <SideBar />
            </div>
            <Footer />

        </>
    )
}

export default Contato