import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"
import SideBar from "@/components/layout/SideBar"
import ListMembers from "@/components/utils/ListMembers"


const Membros = async () => {

  return (
    <>
      <Header />
      <div className="container">
        <SideBar />

        <div>
          <ListMembers />
          {/*<p>{JSON.stringify(users)}</p>*/}
        </div>

      </div>

      <Footer />
    </>

  )
}

export default Membros