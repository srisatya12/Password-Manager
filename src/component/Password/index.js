import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import PasswordItem from '../PasswordItem'
import './index.css'
class Password extends Component {
  state = {
    website: '',
    username: '',
    password: '',
    passwordList: [],
    count: 0,
    isActive: false,
    searchInput:''
  }
  onDelete = id => {
    const {passwordList} = this.state
    const filtered = passwordList.filter(each => each.id !== id)
    this.setState(prevState => ({
      passwordList: filtered,
      count: prevState.count - 1,
    }))
  }
  searchInputList = event=>{
    this.setState({searchInput:event.target.value})
  }
  changePassword = event => {
    this.setState({password: event.target.value})
  }
  changeUsername = event => {
    this.setState({username: event.target.value})
  }
  changeWebsite = event => {
    this.setState({website: event.target.value})
  }
  submitForm = event => {
    event.preventDefault()
    const {website, username, password} = this.state
    const newDetails = {
      id: uuidv4(),
      website,
      username,
      password,
    }
    this.setState(prevState => ({
      passwordList: [...prevState.passwordList, newDetails],
      count: prevState.count + 1,
      website: '',
      username: '',
      password: '',
    }))
  }
  onCheckbox = () =>{
    this.setState((prevState)=>({isActive:!prevState.isActive}))
  }
  render() {
    const {count, passwordList, website, username, password, isActive,searchInput} =
      this.state
      const searchList = passwordList.filter(each=>
      each.website.toLowerCase().includes(searchInput.toLocaleLowerCase()))
    return (
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
        />
        <div className="container">
          <div>
            <form onSubmit={this.submitForm}>
              <h1>Add New Password</h1>
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
              />
              <input
                value={website}
                onChange={this.changeWebsite}
                type="text"
                placeholder="Enter Website"
              />
              <br />
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
              />
              <input
                value={username}
                onChange={this.changeUsername}
                type="text"
                placeholder="Enter Username"
              />
              <br />
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
              />
              <input
                value={password}
                onChange={this.changePassword}
                type="password"
                placeholder="Enter Password"
              />
              <br />
              <button type="submit">Add</button>
            </form>
          </div>
          <img
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            alt="password manager"
          />
        </div>
        <div>
          <div className="container">
            <h1>Your Passwords</h1>
            <p> {count}</p>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
              />
              <input onChange={this.searchInputList} type="search" placeholder="search" />
            </div>
          </div>
          <hr />
          <input onChange={this.onCheckbox} id="checkbox1" type="checkbox" />
          <label for="checkbox1">Show Passwords</label>
          {searchList.length === 0 ? (
            <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
              alt="no passwords"
            />
            <p>No Passwords</p>
            </div>
          ) : (
            <ul>
            {searchList.map(each => (
              <PasswordItem key={each.id}
                each={each}
                isActive={isActive}
                onDelete={this.onDelete}
              />
            ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}
export default Password
