import React from 'react'
import Default from './default'
import About from './about'
import Work from './work'
import Contact from './contact'
import Skill from './skill'

class Main extends React.Component {

  render() {
    const { mainComponent } = this.props
    return(
      <div id="main">
        <Default mainComponent={mainComponent}/>
        <About mainComponent={mainComponent}/>
        <Skill mainComponent={mainComponent}/>
        <Work mainComponent={mainComponent}/>
        <Contact mainComponent={mainComponent}/>
      </div>
    )
  }
}

export default Main
