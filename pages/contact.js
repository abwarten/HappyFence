import NavList from '../components/NavList'
import ContactLForm from '../components/ContactLForm'
import Footer from '../components/Footer'

class contact extends React.Component {

  constructor(props) {
    super(props)
   
  }

  render() {
    return (
      <>
        <NavList />
        <ContactLForm />
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