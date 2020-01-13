import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class About extends Component {
  render() {
    return (
      <div className="about-body">
        <h2 className="page-banner-text">About Me</h2>
        <Grid className="about-grid">
          <Cell>
            <p>
              My adoration for programming started at a young age during the
              loitering, dreaded dial-up years. The first language I programmed in was
              Visual Basic, where I learned to creating interactive forms while in 
			  middle school programming class. I fell in love with the newfound 
			  capability to manipulate the contents on the screen. Never in my wildest
			  dreams did I think I'd still be programming almost fifteen years later.
            </p>
            <p>
              I am an experienced Front-End Web Developer in Charlotte, NC with a demonstrated
              history of nearly three years of working in the marketing and
              advertising industry. I have built dynamics websites for clients in
              various industries, from boutique bakeries to high-end automotive
			  detail shops and everything in between.
            </p>
            <p>
              Utilizing HTML, CSS, JavaScript and PHP, I am constantly creating
			  mobile-friendly websites for national clients and local entrepenuers. In addition
              to my programming experience, I also have experience working with
              numerous CMS platforms including WordPress, Shopify and Adobe
              Experience Manager.
            </p>
            <p>
              One of my favorite aspects of programming is when I collaborate with my clients
			  in order to bring their dreams to life. Nothing is more satisfying than meeting
			  with a client in person and creating a solution for their web-based needs.
            </p>
            <p>
              While not on a computer, I am an avid Carolina Hurricanes (#letsgocanes) and
              Chelsea FC fan. I also enjoy visiting the various local breweries
              around Charlotte. I'm primarily a PC gamer (although I do enjoy the occasional Mario Kart) 
			  and have especially recently grown fond of virtual reality games.
            </p>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default About;
