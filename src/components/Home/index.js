import './index.css'
import Navbar from '../Navbar'

import ThemeContext from '../../context/ThemeContext'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <div>
          {isDarkTheme ? (
            <div className="home">
              <Navbar />
              <div>
                <img
                  alt="home"
                  src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
                />
                <h1 className="head">Home</h1>
              </div>
            </div>
          ) : (
            <div>
              <Navbar />
              <div>
                <img
                  alt="home"
                  src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
                />
                <h1>Home</h1>
              </div>
            </div>
          )}
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
