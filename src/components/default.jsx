import React from 'react'

class Default extends React.Component {
  render() {
    const { mainComponent } = this.props
    return(
      <div class={`default ${mainComponent === "default" ? "active" : ''}`}>
        <div class="inner">
          <h1>当サイトについて</h1>
          <div class="desc">
            <p>　ご閲覧ありがとうございます。こちらは、当サイト管理人、鈴木由将（すずき よしまさ）のポートフォリオサイトになります。</p>
            <p>　上のメニューをクリックしていただければ、各項目へと表示が切り替わります。</p>
          </div>

          <h1>成果物について</h1>
          <div class="desc">
            <p>　当サイトに掲載しております作品は全て、ボク個人が一人で開発したものになります。</p>
            <p>　その他、業務で取り扱ったWebサービスや技術に関しては、スキルシートまたは職務経歴書にてご確認していただけると幸いです。</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Default
