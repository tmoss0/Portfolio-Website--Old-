import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <h2 className="page-banner-text">Contact</h2>
        <Grid className="contact-grid">
          <Cell col={12}>
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    className="list-item-content"
                    style={{ fontSize: "25px" }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    <a href="tel:919-434-7783">919-434-7783</a>
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    className="list-item-content"
                    style={{ fontSize: "25px" }}
                  >
                    <i className="fa fa-envelope-square" aria-hidden="true" />
                    <a
                      href="mailto:tim@thmoss.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      tim@thmoss.com
                    </a>
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    className="list-item-content"
                    style={{ fontSize: "25px" }}
                  >
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                    <a
                      href="https://www.linkedin.com/in/tmoss0/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      linkedin.com/in/tmoss0
                    </a>
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
