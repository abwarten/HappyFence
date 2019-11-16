import NavList from '../components/NavList'
import MainImage from '../components/MainImage'
import IntroDuction from '../components/Introduction'
import Footer from '../components/Footer'
import Table from '../components/Table'

function Index() {
  return (
    <>
      <NavList />
      <MainImage />
      <IntroDuction/>
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