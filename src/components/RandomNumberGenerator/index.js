// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  onGenetate = () => {
    const generateNum = Math.ceil(Math.random() * 100)
    this.setState({count: generateNum})
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-con">
        <div className="card">
          <h1 className="head">Random Number</h1>
          <p className="para">
            {' '}
            Generate a random number in the range of 0 to 100
          </p>
          <button className="button" type="button" onClick={this.onGenetate}>
            {' '}
            Generate
          </button>
          <p className="count">{count}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
