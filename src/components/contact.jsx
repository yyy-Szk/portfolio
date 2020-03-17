import React from 'react'
import facebook from '../images/facebook.png'
import twitter from '../images/twitter.jpg'

class Contact extends React.Component {
  render() {
    const { mainComponent } = this.props
    return(
      <div class={`contact hidden ${mainComponent === "contact" ? "active" : ''}`}>
        <div class="inner">
          <h1>連絡先</h1>
          <div class="desc">
            <p>　お問い合わせは、各種SNSからお願いします。以下のリンクはボクの、Twitter、Facebookです。</p>
          </div>
        </div>
        <div class="container">
          <div style={{textAlign: 'center'}}>
            <a href="https://www.facebook.com/profile.php?id=100021899183437" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="facebook" /></a>
            <p>Facebook</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact
