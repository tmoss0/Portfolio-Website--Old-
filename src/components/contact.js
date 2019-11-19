import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <h2 className="page-banner-text">Contact</h2>
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Tim Moss</h2>
            <hr />
            <p style={{ width: "50%", margin: "auto", paddingTop: "2em" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis
              tincidunt id aliquet risus feugiat. Lectus proin nibh nisl
              condimentum id venenatis a condimentum.
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Information</h2>
            <hr />
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    className="list-item-content"
                    style={{ fontSize: "25px" }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    919-434-7783
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    className="list-item-content"
                    style={{ fontSize: "25px" }}
                  >
                    <i className="fa fa-envelope-square" aria-hidden="true" />
                    tim@thmoss.com
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
