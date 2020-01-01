import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class LandingPage extends Component {
  render() {
    return (
      <div className="full-width auto">
        <Grid className="landing-grid">
          <Cell col={12} style={{height: "400px"}}>
            <img
              src="https://avatars2.githubusercontent.com/u/652193?s=460&v=4"
              alt="avatar"
              className="avatar-img"
            />
          </Cell>
          <div className="banner-text">
            <h1>Front-End Web Developer</h1>
            <hr />
            <p>HTML | CSS | SASS | Bootstrap | JavaScript | ReactJS</p>
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
            </div>
          </div>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;
