import PropTypes from 'prop-types'
import React from 'react'
import ScreenShot1 from '../images/ScreenShot1.png'
import ScreenShot2 from '../images/ScreenShot2.png'
import ScreenShot3 from '../images/ScreenShot3.png'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h1 className="major">Skills</h1>
          <span className="image main">
            {/* <img src={pic01} alt="" /> */}
          </span>
          <h3 >Languages</h3>
          <p>JavaScript | HTML5 | CSS3</p>
          <h3>Frameworks & Libraries</h3>
          <p>React | Node.js | Express.js | Massive.js | React Redux</p>
          <h3>Databases</h3>
          <p>PostgreSQL</p>
          <h3>Extra Technologies</h3>
          <p>Gatsby.js | Axios | Bcrypt | Postman | Git | Netlify</p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Projects</h2>
          <h3>Locker Room Chat</h3>
          <span className="image main">
            <h4>Landing Page</h4>
            <img src={ScreenShot1} alt="" />
            <br/>
            <h4>Home Page</h4>
            <img src={ScreenShot2} alt="" />
            <br/>
            <h4>Chat</h4>
            <img src={ScreenShot3} alt="" />
          </span>
          <p>
            The idea behind this app was to allow NFL fans from all over the world to have easy access to talk with eachother. I felt that if teams could post updates on what was going on whether it was an Injury, Trade, Release, etc. and that there were chat rooms attached to those posts it would give fans the ability to talk about the team and game they love. I felt this would especially be helpful for those who don't live close to there favorite teams.
          </p>
          <p>
            For me being a New Englad Patriots fan in Utah I don't have the ability to talk with fans a lot so having an app that gives me the opportunity to do that makes me very excited.
          </p>
          <button className="icon fa-github">
              <a
                href="https://github.com/AlexStandfield/football-chat"
                > 
                <span className="label">GitHub</span>
              </a>
          </button>

          <button className="icon fa-mouse-pointer">
            <a href="http://157.245.186.24:8080/#/"
            >
              <span className="label">Website</span>
            </a>

          </button>
           
         
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About Me</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            When I'm not writing full stack applications I am usually either watching the New Englad Patriots or playing video games. I also love playing sports. Specifically soccer and basketball. I grew up playing competitive soccer where I first developed a strong work ethic and ability to push myself to my very best.
          </p>
          <p>
            I am extremely flexible and feel I can work in most environments. I am eager to learn and ready to contribute in every way that I can.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <h3>Phone: 801-368-0547</h3>
          {/* <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form> */}
          
          
            {/* <li> */}
              <button className="icon fa-github">
              <a
                href="https://github.com/AlexStandfield"
                
              >
                <span className="label">GitHub</span>
              </a>
              </button>
            {/* </li> */}
            {/* <li> */}
            <button className="icon fa-linkedin">
              <a href="https://codebushi.com" >
                <span className="label">Linkedin</span>
              </a>
              </button>
              <button className="icon fa-envelope">
              <a href="mailto:AlexStandfield@gmail.com" >
                <span className="label">Email</span>
              </a>
              </button>
            {/* </li> */}
            {/* <li>
              <a href="" className="icon fa-envelope">
                <span className="label">Email</span>
              </a>
            </li> */}
        
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
