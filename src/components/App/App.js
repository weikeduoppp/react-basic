import React from 'react'
import { connect } from 'react-redux'
import { setName, fetchName } from '../../store/name/actions'
import './App.styl'

function App({ name, setName, fetchName }) {
  return (
    <div className="App">
      <header className="App-header">
        <h1 onClick={() => setName('test')}>{name}</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    //immutable取值 get('cn') 嵌套数据 getIn
    name: state.name.get('cn')
  }
}

export default connect(
  mapStateToProps,
  { setName, fetchName }
)(App)
