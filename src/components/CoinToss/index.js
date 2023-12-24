import {Component} from 'react'

import './index.css'

const headsImageUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailsImageUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    imageUrl: headsImageUrl,
    headCount: 0,
    tailCount: 0,
  }

  onClickTossButton = () => {
    const {headCount, tailCount} = this.state
    const toss = Math.floor(Math.random() * 2)

    if (toss === 0) {
      this.setState({headCount: headCount + 1, imageUrl: headsImageUrl})
    } else {
      this.setState({tailCount: tailCount + 1, imageUrl: tailsImageUrl})
    }
  }

  render() {
    const {imageUrl, headCount, tailCount} = this.state
    const totalCount = headCount + tailCount
    console.log(Math.floor(Math.random() * 2))
    return (
      <div className="coin-toss-bg-container">
        <div className="coin-toss-card-container">
          <h1 className="game-heading">Coin Toss Game</h1>
          <p className="game-name-text">Heads (or) Tails</p>
          <img src={imageUrl} className="toss-image" alt="toss result" />
          <button
            className="toss-button"
            type="button"
            onClick={this.onClickTossButton}
          >
            Toss Coin
          </button>
          <div className="result-container">
            <p className="count-text">Total: {totalCount}</p>
            <p className="count-text">Heads: {headCount}</p>
            <p className="count-text">Tails: {tailCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
