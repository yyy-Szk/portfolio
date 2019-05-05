import React from 'react'
import { Grid } from '@material-ui/core'
import html from '../images/html5.png'
import css from '../images/css3.png'
import javascript from '../images/javascript.svg'
import ruby from '../images/ruby.jpeg'
import bootstrap from '../images/bootstrap.jpg'
import jquery from '../images/jquery.gif'
import react from '../images/react.png'
import rails from '../images/rails.png'


class Skill extends React.Component {
  render() {
    const { mainComponent } = this.props
    return(
      <div class={`skill hidden ${mainComponent === "skill" ? "active" : ''}`}>
        <div class="inner">
          <h1>使用言語</h1>
          <p>　=>　HTML5/CSS3, Javascript(ES2015), Ruby</p>
          <Grid container className="container">
            <div>
              <img src={html} alt="html5" height={100} width={100}/>
              <p class="rate rate4"></p>
            </div>

            <div>
              <img src={css} alt="css3" height={100} width={100}/>
              <p class="rate rate4"></p>
            </div>

            <div>
              <img src={javascript} alt="javascript" height={100} width={100}/>
              <p class="rate rate3"></p>
            </div>

            <div>
              <img src={ruby} alt="ruby" height={100} width={100}/>
              <p class="rate rate4"></p>
            </div>
          </Grid>
        </div>

        <div class="inner">
          <h1>ライブラリ・フレームワーク</h1>
          <p>　=>　Bootstrap, jQuery, React.js, Ruby on Rails</p>
          <Grid container className="container">
            <div>
              <img src={bootstrap} alt="bootstrap" height={100} width={100}/>
              <p class="rate rate4"></p>
            </div>

            <div>
              <img src={jquery} alt="jquery" height={100} width={100}/>
              <p class="rate rate3"></p>
            </div>

            <div>
              <img src={react} alt="react" height={100} width={100}/>
              <p class="rate rate3"></p>
            </div>

            <div>
              <img src={rails} alt="rails" height={100} width={100}/>
              <p class="rate rate4"></p>
            </div>
          </Grid>
        </div>
      </div>
    )
  }
}

export default Skill
