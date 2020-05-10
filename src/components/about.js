import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

const size = {
	width: '100%',
	height: 500,
};
const view = 'list'; // or 'coverart'
const theme = 'black'; // or 'white'

class About extends Component {
	
  render() {
    return (
      <div className="about-body">
        <h2 className="page-banner-text">About Me</h2>
        <Grid className="about-grid">
          <Cell>
            <p>
              I am an experienced Front-End Web Developer in Charlotte, NC with
              a demonstrated history of three years of working in the marketing
              and advertising industry. I have built dynamics websites for
              clients in numerous industries including boutique bakeries,
              high-end automotive detail shops and a vehicle parts shop.
            </p>
            <p>
              Utilizing HTML, CSS, JavaScript and PHP, I love creating
              mobile-friendly websites for national clients and local
              entrepenuers. In addition to my programming experience, I also
              have experience working with numerous CMS platforms including
              WordPress and Shopify.
            </p>
            <p>
              One of my favorite aspects of programming doesn't actually involve
              programming I enjoy being able to collaborate with my clients in
              order to bring their dreams to life. Nothing is more satisfying
              than meeting with a client in person, determining what kind of
              market they are targeting, thencreating a solution for their
              web-based needs.
            </p>
            <p>
              I am also consistently learning new technologies and updating my
              skillset with the newest web technologies, like React and VueJS. 
			  If you have any questions, please reach out to me at <a href="mailto:tim@thmoss.com">tim@thmoss.com</a>
            </p>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default About;
