import React, { Component,  } from "react";
import { Tabs, Tab, Grid, Cell, Card, CardText, CardTitle, CardActions, Button, CardMenu, IconButton } from "react-mdl";

class Projects extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeTab: 0
		};
	}

	toggleCategories() {
	if (this.state.activeTab === 0) {
		return (
      <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
        <CardTitle
          style={{
            color: "black",
            height: "176px",
            background:
              "url(https://cdn.auth0.com/blog/react-js/react.png) center / cover"
          }}
        >
          React Project #1
        </CardTitle>
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam laoreet
          blandit bibendum. Duis vel lectus vitae est pharetra volutpat. Aliquam
          fermentum lorem vitae interdum efficitur. Donec eget tempor dolor.
        </CardText>
        <CardActions border style={{ textAlign: "center" }}>
          <Button colored>GitHub</Button>
          <Button colored>Code</Button>
          <Button colored>Demo</Button>
        </CardActions>
		<CardMenu style={{color: "#fff"}}>
			<IconButton name="share" />
		</CardMenu>
      </Card>
    );
	} 
	else if (this.state.activeTab === 1) {
		return (
			<div>
				<h1>This is Angular</h1>
			</div>
		);
	} 
	}
	
	

	render() {
		return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>Angular</Tab>
        </Tabs>

        <section className="projects-grid">
          <Grid className="projects-grid">
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
        </section>
      </div>
    );
	}
}

export default Projects;
