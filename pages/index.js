import NavList from '../components/NavList'
import MainImage from '../components/MainImage'
import Introduce from '../components/Introduce'
import Footer from '../components/Footer'
import Table from '../components/Table'

function Index() {
  return (
    <>
      <NavList />
      <MainImage />
      <Introduce/>
      <Table />
      <Footer />
      
      <style jsx global>{`
        body {
          margin: 0;
        }
      `}</style>
    </>
  )
}

export default Index