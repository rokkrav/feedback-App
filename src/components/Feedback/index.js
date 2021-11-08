import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isFeedbackSelected: false}

  onClickEmoji = () => {
    this.setState({isFeedbackSelected: true})
  }

  renderFeedbackQuestion = () => {
    const {resources} = this.props
    const {emojis} = resources
    return (
      <div className="feedback-question-container">
        <h1 className="heading">
          How satisfied are you with our customer support performance ?
        </h1>
        <ul className="emojis-container">
          {emojis.map(eachEmoji => (
            <li
              className="emoji-item"
              key={eachEmoji.id}
              onClick={this.onClickEmoji}
            >
              <button className="emoji-button" type="button">
                <img
                  src={eachEmoji.imageUrl}
                  alt={eachEmoji.name}
                  className="emoji-image"
                />
              </button>
              <p className="emoji-name">{eachEmoji.name}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderThankYouScreen = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="thank-you-container">
        <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
        <h1 className="thank-you-heading">Thank You!</h1>
        <p className="thank-you-description">
          We will use your feedback to improve our customer support performance
        </p>
      </div>
    )
  }

  render() {
    const {isFeedbackSelected} = this.state

    return (
      <div className="main-container">
        <div className="feedback-card">
          {isFeedbackSelected
            ? this.renderThankYouScreen()
            : this.renderFeedbackQuestion()}
        </div>
      </div>
    )
  }
}

export default Feedback
