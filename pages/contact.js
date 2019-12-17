import NavList from '../components/NavList'
import ContactList from '../components/ContactList'
import Footer from '../components/Footer'

class contact extends React.Component {

  constructor(props) {
    super(props)
   
  }

  render() {
    return (
      <>
        <NavList />
        <ContactList />
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