import {Component} from 'react'
import {v4} from 'uuid'
import './index.css'

class CharacterCounter extends Component {
  state = {searchInput: '', array: []}

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickButton = () => {
    const {array, searchInput} = this.state
    const add = {
      text: searchInput,
      id: v4(),
    }
    this.setState({array: [...array, add], searchInput: ''})
  }

  render() {
    const {searchInput, array} = this.state
    return (
      <div className="bg-container">
        <div className="character-container">
          <h1 className="character-heading">Character Counter</h1>
          <div className="input-container">
            <input
              value={searchInput}
              onChange={this.onChangeInput}
              type="text"
              className="input"
              placeholder="Enter the Characters here"
            />
            <button onClick={this.onClickButton} type="button">
              Add
            </button>
          </div>
        </div>
        <div className="count-container">
          <div className="heading-container">
            <h1 className="heading">Count the characters like a Boss...</h1>
          </div>
          {array.length === 0 ? (
            <div className="image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                alt="no user inputs"
                className="image"
              />
            </div>
          ) : (
            <div className="text-container">
              {array.map(each => (
                <p className="text" key={each.id}>
                  {`${each.text}: ${each.text.length}`}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default CharacterCounter
