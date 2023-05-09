import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <div>
          <div>
            {isDarkTheme ? (
              <div className="home">
                <Navbar />
                <div>
                  <img
                    alt="about"
                    src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
                  />
                </div>
                <h1 className="head">About</h1>
              </div>
            ) : (
              <div>
                <Navbar />
                <div>
                  <img
                    alt="about"
                    src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
                  />
                </div>
                <h1>About</h1>
              </div>
            )}
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
