import React, { Component } from 'react';
import { Button } from 'react-mdl';
import PDF from 'react-pdf-js-infinite';

class Resume extends Component {	

	render() {
		return (
      <div className="resume">
        <h2 className="page-banner-text">Resume</h2>
        <a href="https://github.com/tmoss0/tmoss0-updated.github.io/raw/master/public/Tim%20Moss%20Resume%20(Apr%202020).pdf">
          <Button raised colored className="normal-text-transform">
            Download Resume
          </Button>
        </a>
        <div className="PDF">
          <PDF
            className="resume-pdf"
            file="./Tim Moss Resume (Apr 2020).pdf"
            scale={1.15}
          />
        </div>
      </div>
    );
	}
}

export default Resume;