import React from 'react'
import { Grid } from '@material-ui/core'
import hair_more from '../images/hair-more.png'
import gucchier from '../images/gucchier.png'
import personal_diary from '../images/personal-diary.png'


class Work extends React.Component {
  render() {
    const { mainComponent } = this.props
    return(
      <div class={`work hidden ${mainComponent === "work" ? "active" : ''}`}>
        <div class="inner">
          <h1>直近の作品</h1>
          <Grid container className="container">
            <Grid item xs={12} className="works image_box">
              <img src={personal_diary} alt="personal_diary"/>
              <a href="https://github.com/Yoshimasa-Suzuki/gucchier" target="_blank" rel="noopener noreferrer">github</a>
              /
              <a href="https://polar-retreat-48576.herokuapp.com/" target="_blank" rel="noopener noreferrer">heroku</a>
            </Grid>
            <div class="desc">
              <p>　１日ごとにリセットされるメモの機能とその日の出来事をまとめておく日記を書くというシンプルなサービス</p>
              <p>　業務のなかで学んだReactをフロントエンドに、Railsをバックエンドに使用して、別々のサーバーで運用してみたいと思い作成しました。</p>
              <p>　deviseを用いたtoken認証やフロントとバックを完全分離して開発することなど、使ってみたい技術を使う意識で開発したため、
              リファクタリングやテスト、デザインなどは甘くなっています。</p>
            </div>
          </Grid>
        </div>

        <div class="inner">
          <h1>過去の作品一覧</h1>

          <Grid contaier className="container" style={{textAlign: 'center'}}>
            <Grid item xs={12} className="works">
              <img src={gucchier} alt="gucchier"/>
              <a href="https://github.com/Yoshimasa-Suzuki/gucchier" target="_blank" rel="noopener noreferrer">github</a>
              /
              <a href="https://polar-retreat-48576.herokuapp.com/" target="_blank" rel="noopener noreferrer">heroku</a>
            </Grid>

            <Grid item xs={12} className="works">
              <img src={hair_more} alt="hair-more"/>
              <a href="https://github.com/Yoshimasa-Suzuki/hair-more" target="_blank" rel="noopener noreferrer">github</a>
              /
              <a href="https://mighty-journey-43203.herokuapp.com/" target="_blank" rel="noopener noreferrer">heroku</a>
            </Grid>
          </Grid>
        </div>
      </div>
    )
  }
}

export default Work
