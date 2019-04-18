import React from 'react'

class Header extends React.Component {

  render() {
    const { selectComponent, mainComponent } = this.props
    return (
      <div id="header">
        <h1 className="logo" onClick={() => selectComponent('default')}>
          <span className="logo-name">Yoshimasa Suzuki's</span>
          <span className="logo-title">PORTFOLIO</span>
        </h1>
        <div　className="nav-bar">
          <nav>
            <ul>
              <li onClick={() => selectComponent('about')} class={`${mainComponent === "about" ? "active" : ''}`}>ABOUT</li>
              <li onClick={() => selectComponent('skill')} class={`${mainComponent === "skill" ? "active" : ''}`}>SKILL</li>
              <li onClick={() => selectComponent('work')} class={`${mainComponent === "work" ? "active" : ''}`}>WORK</li>
              <li onClick={() => selectComponent('contact')} class={`${mainComponent === "contact" ? "active" : ''}`}>CONTACT</li>
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}

export default Header
