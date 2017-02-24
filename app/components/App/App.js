import React from 'react'
import './App.styl'
import '../../assets/lib/bootstrap.css'

class App extends React.Component {
  render () {
    return (
      <div className='AppContainer'>
        <main>
          <h1 className='MainTitle'>
            Simple Blog App
          </h1>
          {this.props.children}
        </main>
      </div>
    )
  }
}

App.propTypes = {
  children: React.PropTypes.node
}

export default App
