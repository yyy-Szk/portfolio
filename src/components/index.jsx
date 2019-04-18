import React from 'react'
import Header from './header'
import Main from './main'
import Footer from './footer'

class Index extends React.Component {

  state = {
    mainComponent: 'default'
  }

  selectComponent(mainComponent) {
    this.setState({mainComponent})
  }

  render() {
    const { mainComponent } = this.state
    return(
      <div id="index">

        <Header
          selectComponent={(name) => this.selectComponent(name)}
          mainComponent={mainComponent}
        />

        <Main
         mainComponent={mainComponent}
        />

        <Footer />

      </div>
    )
  }
}

export default Index
