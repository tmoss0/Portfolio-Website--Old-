import React, { Component } from 'react';
import { Button } from 'react-mdl';
import PDF from 'react-pdf-js-infinite';

class Resume extends Component {	

	render() {
		return (
      <div>
        <div className="resume">
			<h2 className="page-banner-text">Resume</h2>
		  <a href="https://github.com/tmoss0/resume/raw/master/Tim%20Moss%20Resume%20(Nov%202019).pdf">
			<Button raised colored className="normal-text-transform">
				Download Resume
			</Button>
		  </a>
          <PDF className="resume-pdf" file="./Resume (Nov 2019).pdf" scale={1.25} />
        </div>
      </div>
    );
	}
}

export default Resume;