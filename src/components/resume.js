import React, { Component } from 'react';
import { Grid, Cell, Button } from 'react-mdl';

class Resume extends Component {	

	render() {
		return (
      <div className="resume-page">
        <h2 className="page-banner-text">Resume</h2>
        <a href="https://github.com/tmoss0/tmoss0-updated.github.io/raw/master/public/Tim%20Moss%20Resume%20(2020).pdf">
          <Button raised colored className="normal-text-transform">
            Download Resume
          </Button>
        </a>
        <Grid className="grid">
          <Cell col={12}>
            <h3>Theory Communication & Design</h3>
            <h3>Front End Developer</h3>
            <h5>May 2017 - Present (Charlotte, NC)</h5>
            <ul className="resume-list">
              <li>
                Builds, updates and maintains websites for numerous
                industry-leading automotive businesses including Mobil 1 and GM
              </li>
              <li>
                Provides Creative and Account teams with recommendations for
                website updates and implements updates using HTML, CSS,
                JavaScript and PHP
              </li>
              <li>
                Utilizes PHP, REST and JavaScript to interact with MailChimp API
                in order efficiently capture consumer information in a prospect
                list for client usage
              </li>
              <li>
                Works on updating Shopify shops for clients in a variety of
                industries
              </li>
            </ul>
          </Cell>
          <Cell col={12}>
            <h3>NC Wildlife Resources Commission (Contract)</h3>
            <h3>Programmer</h3>
            <h5>September 2016 – January 2017 (Raleigh, NC) </h5>
            <ul className="resume-list">
              <li>
                Utilized HTML and CSS to modify the layout and functionality of
                four internal webpages
              </li>
              <li>
                Wrote Visual Basic code to generate a variety of data reports
                for survey data, animal data, angler data for a team of Wildlife
                Biologists
              </li>
              <li>
                Worked with Project Manager and Business Analysts to determine
                the most efficient approach to resolve open tickets daily
              </li>
            </ul>
          </Cell>
          <Cell col={12}>
            <h3>iD Tech Camps (Summer Job)</h3>
            <h3>Lead Instructor</h3>
            <h5>Summer 2012 – Summer 2016 (Chapel Hill, NC / Davidson, NC)</h5>
            <ul className="resume-list">
              <li>
                Instructed eight students per week on the core concepts of game
                design and programming using applications such as Unreal Engine
                4, Stencyl, Hammer Source Editor, C++, and Java
              </li>
              <li>
                Prepared weekly lesson plans and monitored student performance
                with flexibility to adjust plans as necessary to account for
                student comprehension
              </li>
              <li>
                Ensured that each student had a working project by the end of
                the camp week to show off their programming and design skills
              </li>
            </ul>
          </Cell>
        </Grid>
      </div>
    );
	}
}

export default Resume;