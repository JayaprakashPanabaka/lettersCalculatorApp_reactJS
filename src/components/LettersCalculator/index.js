// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {lettersCount: 0}

  onChangeLettersCount = event => {
    this.setState({lettersCount: event.target.value.length})
  }

  render() {
    const {lettersCount} = this.state
    // console.log(lettersCount)
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label htmlFor="input-text" className="label-name">
            Enter the phrase
          </label>
          <br />
          <input
            type="text"
            className="input-tab"
            onChange={this.onChangeLettersCount}
            id="input-text"
            placeholder="Enter the phrase"
          />
          <p className="result-para">No.of letters: {lettersCount}</p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          className="img"
          alt="letters calculator"
        />
      </div>
    )
  }
}

export default LettersCalculator
