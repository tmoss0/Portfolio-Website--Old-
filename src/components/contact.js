import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Tim Moss</h2>
            <img
              src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
              alt="avatar"
              style={{ height: '250px' }}
            />
            <p style={{width: '50%', margin: 'auto', paddingTop: '1em'}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis
              tincidunt id aliquet risus feugiat. Lectus proin nibh nisl
              condimentum id venenatis a condimentum.
            </p>
          </Cell>
          <Cell col={6}>
			  
		  </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
