import Navbar from '../Navbar'
import './index.css'

import ThemeContext from '../../context/ThemeContext'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <div>
          {isDarkTheme ? (
            <div>
              <Navbar />
              <div className="not">
                <img
                  alt="not found"
                  src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                />
                <h1 className="he">Lost Your Way?</h1>
                <p className="he">We cannot seem to find the page</p>
              </div>
            </div>
          ) : (
            <div>
              <Navbar />
              <div className="white">
                <img
                  alt="not found"
                  src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                />
                <h1>Lost Your Way?</h1>
                <p>We cannot seem to find the page</p>
              </div>
            </div>
          )}
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
