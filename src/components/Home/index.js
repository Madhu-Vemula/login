/* eslint-disable import/no-unresolved */
// Write your code here

import {Component} from 'react'

import Login from './components/Login'

import Message from './Message'

import './index.css'

// eslint-disable-next-line import/extensions

class Home extends Component {
  state = {login: 0}

  changelogin = () => {
    const {login} = this.state
    if (login) {
      this.setState(prevstate => ({login: 0}))
    } else {
      this.setState(prevstate => ({login: 1}))
    }
  }

  render() {
    const {login} = this.state
    let text = 'Please Login'
    let buttext = 'Login'
    if (login) {
      text = 'Welcome User'
      buttext = 'Logout'
    } else {
      text = 'Please Login'
      buttext = 'Login'
    }
    return (
      <div className="homecont">
        <div className="cardcont">
          <Message text={text} />
          <Login buttext={buttext} />
        </div>
      </div>
    )
  }
}
export default Home
