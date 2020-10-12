import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
  render() {
    return (
      <Grid className="landing-grid">        
        <Cell col={12}>
          <div className="banner-text">
            <h1>Tim Moss</h1>
            <h1>Front-End Web Developer</h1>
            <p><b>HTML | CSS | SASS | Bootstrap | JavaScript | ReactJS</b></p>
            <hr />
            <div className="banner-text-bio">
                <p>
                Hello there, I'm Tim!
                </p>
                <p>
                Quick note: I'm constantly improving this website! Thanks for understanding!
                </p>
                <p>
                Programming and technology as a whole are topics I've been
                fascinated by my entire life. I originally went to school to get in game development.
                However, I  found web development something I really enjoyed after taking some classes, 
                getting on the job experience and personal projects I've worked on.                
                </p>
                <p>               
                So now I am a front-end web developer who has five years of web development experience. I've honed my skills primarily
                in the advertising and marketing fields. I enjoy helping clients grow their brand and reaching new customers 
                they would not have reached without my help.
                </p>
                <p>
                Thanks for reading! If you'd like to get in touch with me, please see one of the links below!
                </p>
            </div>
            <div className="social-links">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/tmoss0/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-linkedin-square" aria-hidden="true" />
              </a>
              {/* Github */}
              <a
                href="https://github.com/tmoss0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-github-square" aria-hidden="true" />
              </a>
              {/* Email */}
              <a
                href="mailto:tim@thmoss.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-envelope-square" aria-hidden="true" />
              </a>
            </div>
          </div>
        </Cell>
      </Grid>
    );
  }
}

export default LandingPage;
