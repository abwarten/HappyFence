import NavList from '../components/NavList'
import TodayPhoto from '../components/TodayPhotoComponent'
import Footer from '../components/Footer'
class today extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <>
        <NavList />
        <TodayPhoto/>
        <Footer/>
        <style jsx global>{`
          body {
            margin: 0;
          }
        `}</style>
      </>
    )
  }
}

export default today