// Write your JS code here

import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    errorMsg: '',
    showSubmitError: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onErrorMessage = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onFormSubmit = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.onErrorMessage(data.error_msg)
    }
  }

  render() {
    const {username, password, errorMsg, showSubmitError} = this.state
    return (
      <div className="main-container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="website-login-image"
          />
        </div>
        <form className="login-card" onSubmit={this.onFormSubmit}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            className="website-logo"
            alt="website logo"
          />
          <label htmlFor="username" className="username-label">
            USERNAME
          </label>
          <input
            id="username"
            className="username-input"
            placeholder="Username"
            type="text"
            onChange={this.onChangeUsername}
            value={username}
          />
          <label htmlFor="password" className="password-label">
            PASSWORD
          </label>
          <input
            id="password"
            className="password-input"
            placeholder="Password"
            type="password"
            value={password}
            onChange={this.onChangePassword}
          />
          <button className="login-button" type="submit">
            Login
          </button>
          {showSubmitError && <p className="error-msg">*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default LoginForm
