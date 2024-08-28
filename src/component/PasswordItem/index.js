import './index.css'
const PasswordItem = props => {
  const {each, isActive, onDelete} = props
  const {id, website, username, password} = each
  const deletePassword = () => {
    onDelete(id)
  }
  return (
    <li>
      <div className="container">
        <div>
          <p>{username[0]}</p>
        </div>
        <div>
          <p>{website}</p>
          <p>{username}</p>
          {isActive === true ? (
            <p>{password}</p>
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="stars"
            />
          )}
          <button data-testid='delete' onClick={deletePassword}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}
export default PasswordItem
