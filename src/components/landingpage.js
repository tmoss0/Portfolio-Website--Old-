import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="http://styleguide.europeana.eu/images/fpo_avatar.png"
              alt="avatar"
              className="avatar-img"
            />
          </Cell>
		  <div className="banner-text">
			<h1>Full-Stack Web Development</h1>
			<hr/>
			<p>HTML/CSS | Bootstrap | JavaScript | ReactJS</p>
		  </div>
		  <div className="social-links">
			  <a href=""></a>
		  </div>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;
