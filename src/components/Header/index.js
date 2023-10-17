// Write your JS code here

import './index.css'

const Header = () => (
  <nav className="nav-bar">
    <div>
      <img
        src="
https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="logo-image"
      />
    </div>
    <ul className="list-elements">
      <li className="nav-item">Home</li>
      <li className="nav-item">Products</li>
      <li className="nav-item">Cart</li>
      <button type="button" className="button">
        Logout
      </button>
    </ul>
  </nav>
)

export default Header
