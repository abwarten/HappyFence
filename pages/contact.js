import NavList from '../components/NavList'
import ContactPageIndex from '../components/ContactPageIndex'
import Footer from '../components/Footer'

class contact extends React.Component {
  render() {
    return (
      <>
        <NavList />
        <ContactPageIndex />
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

export default contact