import NavList from '../components/NavList'

class contact extends React.Component {
  static pageTransitionDelayEnter = true

  constructor(props) {
    super(props)
    this.state = { loaded: false }
  }

  render() {
    return (
      <>
        <NavList />
        <p>contact page</p>
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