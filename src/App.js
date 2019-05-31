import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getData } from './Store/actions/actions'
import MainList from './Containers/MainList'
import Sidebar from './Components/Sidebar'
import Spinner from './Components/Spinner'

class App extends Component {
  componentDidMount() {
    this.props.getData()
  }

  render() {
    const { loading } = this.props
    const a = loading ? <Spinner /> : <MainList />

    return (
      <div className="container">
        <Sidebar />
        {a}
      </div>
    )
  }
}

const mapDispatchToProps = state => {
  return {
    loading: state.characters.loading,
  }
}

export default connect(
  mapDispatchToProps,
  { getData }
)(App)
