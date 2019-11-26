import NavList from '../components/NavList'
import Table from '../components/Table'
import Footer from '../components/Footer'

class table extends React.Component {
  static pageTransitionDelayEnter = true

  constructor(props) {
    super(props)
    this.state = { loaded: false }
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.props.pageTransitionReadyToEnter()
      this.setState({ loaded: true })
    }, 200)
  }

  componentWillUnmount() {
    if (this.timeoutId) clearTimeout(this.timeoutId)
  }

  render() {
    if (!this.state.loaded) return null
    return (
      <>
        <NavList />
        <Table/>
        <Footer />
        <style jsx global>{`
          body {
            margin: 0;
          }
        `}</style>
      </>
    )
  }
}

export default table