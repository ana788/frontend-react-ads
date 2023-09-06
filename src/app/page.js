import Header from "@/components/layout/Header"
import SideBar from "@/components/layout/SideBar"
import Footer from "@/components/layout/Footer"

import './Home.css'

const Home = () => {
  return (
    <>
      <Header />
      <div className="container">
        <SideBar />
        <h1>Hello world React!</h1>
      </div>
      <Footer />
    </>

  )
}

export default Home