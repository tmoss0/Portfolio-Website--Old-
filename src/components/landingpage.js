import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
  render() {
    return (
      <Grid className="landing-grid">
        <Cell col={12}>
          <img
            src="https://avatars2.githubusercontent.com/u/652193?s=460&v=4"
            alt="avatar"
            className="avatar-img"
          />
        </Cell>
        <Cell col={12}>
          <div className="banner-text">
            <h1>Tim Moss</h1>
            <h1>Front-End Web Developer</h1>
            <p>HTML | CSS | SASS | Bootstrap | JavaScript | ReactJS</p>
            <hr />
            <p style={{ width: "60%", margin: "auto" }}>
              Hello there, I'm Tim!
            </p>
            <p style={{ width: "60%", margin: "auto" }}>
              Programming and technology in general are topics I've been
              fascinated by most of my life. I am a front-end web developer who
              has been programming for five years, enhancing my skills primarily
              in the advertising and marketing fields.
            </p>
            <p style={{ width: "60%", margin: "auto" }}>
              I am always on the look out for new opportunities. If I sound like
              a fit for your team, please reach out!
            </p>
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
