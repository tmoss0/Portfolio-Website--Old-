import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class About extends Component {
	
  render() {
    return (
      <div className="about-page">
        <h2 className="page-banner-text">About Me</h2>
        <Grid className="grid about-grid">
          <Cell col={12}>
            <p>
              I am an experienced Front-End Web Developer in Charlotte, NC with
              a demonstrated history of three years working in the marketing
              and advertising industry. I have built dynamic websites for
              clients in numerous industries, including boutique bakeries,
              high-end automotive detail shops and automotive parts shops.
            </p>
            <p>
              Utilizing HTML, CSS, JavaScript and PHP, I love creating
              mobile and desktop usable websites for national clients and local
              entrepenuers. In addition to my programming experience, I also
              have experience working with numerous CMS platforms including
              WordPress and Shopify.
            </p>
            <p>
              One part of the website creation process I enjoy is being 
			  able to collaborate with my clients in order to bring their dreams 
			  to life and help their business flourish. Nothing is more satisfying
              than meeting with a client in person, understanding what market they
			  are a part of, what clients they are targeting, then creating a solution 
			  for their web-based needs.
            </p>
            <p>
              If you have any questions, please reach out to me at{' '}
              <a href="mailto:tim@thmoss.com">tim@thmoss.com</a> so we can connect.
            </p>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default About;
