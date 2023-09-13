import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"
import SideBar from "@/components/layout/SideBar"
import CardUser from "@/components/cards/CardUser"

const getMembers = async () => {
  const response = await fetch('http://localhost:3300/user/list', { cache: 'no-store' })
  return await response.json()
}

const Membros = async () => {

  const users = await getMembers()
  return (
    <>
      <Header />
      <div className="container">
        <SideBar />

        <div>
          <h1>Membros</h1>
          {
            users.map((user) => {
              return (
                <CardUser key={user.id} user={user}/>
              )
            })
          }

          {/*<p>{JSON.stringify(users)}</p>*/}
        </div>

      </div>

      <Footer />
    </>

  )
}

export default Membros