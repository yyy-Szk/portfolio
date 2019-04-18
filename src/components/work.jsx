import React from 'react'
import hair_more from '../images/hair-more.png'

class Work extends React.Component {
  render() {
    const { mainComponent } = this.props
    return(
      <div class={`work hidden ${mainComponent === "work" ? "active" : ''}`}>
        <div class="inner">
          <h1>直近の作品</h1>
          <div class="container">
            <div class="image_box">
              <img src={hair_more} alt="latest_work" />
              <span>作品のGithubは<a href="https://github.com/Yoshimasa-Suzuki/hair-more">こちら</a></span><br />
              <span>実際のアプリは<a href="https://mighty-journey-43203.herokuapp.com/">こちら</a></span>
            </div>
            <div class="desc">
              <p>　美容師と髪の悩みを持つ人をマッチングさせるサービスです。</p>
              <p>　ログイン機能、基本的なCRUD処理、いいね機能など、基本的なWebアプリケーションの機能を網羅することを意識して作っています。</p>
              <p>　その他にも、個人的に興味があったAction Cableを使用したリアルタイムチャット機能、チャットに対する評価機能なども追加しています。</p>
            </div>
          </div>
        </div>

        {/*<div class="inner">
          <h1>過去の作品一覧</h1>

          <div class="container">
            <div class="boxbox">

            </div>
          </div>
        </div>*/}
      </div>
    )
  }
}

export default Work
