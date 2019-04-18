import React from 'react'
import MyPhoto from '../images/yoshimasa_suzuki.jpg'

class About extends React.Component {
  render() {
    const { mainComponent } = this.props
    return(
      <div class={`about hidden ${mainComponent === "about" ? "active" : ''}`}>
        <div class="inner">
          <h1>管理人について</h1>
          <div class="container">
            <img src={MyPhoto} alt="管理人の画像" />
            <div class="desc">
              <p>　1998年生まれ。愛知県豊橋市出身。大同大学・情報工学部・情報システム学科・コンピューターサイエンス専攻所属。</p>
              <p>　大学2年の時に「東京でプログラミングを学びたい」と思い、休学して上京。プログラミングスクールを経て、現在は東京にあるベンチャー企業でWebエンジニアとして働いている。</p>
              <p>　ブログやSNSでの情報発信、バンジージャンプなどの非日常的な体験、ストリートナンパでの対人能力の向上など、自分が面白いと思ったことにいち早く手を出す行動力が一番の売り。</p>
              <p>　まずは5年以内に自分のサービスを立ち上げ、事業として運営していく。それを目標に、バリバリ働いて、ゴリゴリコードを書いて、モクモクと勉強中！！！</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About
