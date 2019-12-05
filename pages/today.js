import NavList from '../components/NavList'

class today extends React.Component {
  static pageTransitionDelayEnter = true
 
  constructor(props) {
    super(props)
    this.state = { loaded: false }
  }

 
  render() {
    return (
      <>
        <NavList />
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