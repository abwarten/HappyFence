import NavList from '../components/NavList'
import MainImage from '../components/MainPage'

function Index() {
  return (
    <>
      <NavList />
      <MainImage />
      <style jsx global>{`
        body {
          margin: 0;
        }
      `}</style>
    </>
  )
}

export default Index