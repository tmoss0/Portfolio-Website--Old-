import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class About extends Component {
  render() {
    return (
      <div className="about-body">
        <h2 className="page-banner-text">About</h2>
        <Grid className="about-grid">
          <Cell>
            <p>
              I have been programming since I could type quickly (the
              dialup years!). My first language I programmed in was Visual Basic,
			  creating interactive forms while in middle school programming class. Little did I know I'd still be 
			  programming almost fifteen years later.
            </p>
            <p>
              I am an experienced Front-End Web Developer with a demonstrated
              history of nearly three years of working in the marketing and
              advertising industry. I have completed websites for clients in
              various industries, from bakeries to detail shops and everything in
              between. 
            </p>
            <p>
              Utilizing HTML, CSS, JavaScript and PHP, I create mobile-friendly websites 
			  for national clients and local entrepenuers. In addition to my programming
			  experience, I also have experience working with numerous CMS platforms 
			  including WordPress, Shopify and Adobe Experience Manager.
            </p>
            <p>
              Collaborating with clients on their websites is something I really enjoy
			  because I get to truly understand what they want and I can advise them on 
			  best web practices or web designs. It really helps create a relationship and be able
			  to accurately create the website.
            </p>
            <p>
              While not on a computer, I am an avid Carolina Hurricanes and Chelsea FC fan. I also enjoy
			  visiting the various local breweries around Charlotte. I also really enjoy playing the latest 
			  video games, including virtual reality games!
            </p>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default About;
