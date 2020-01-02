import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardText, CardTitle, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

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
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background:
                  "url(https://cdn.auth0.com/blog/react-js/react.png) center / cover"
              }}
            >
              Tim Moss Website
            </CardTitle>
            <CardText>
              <p>
                The source code for the website you are currently viewing.
                Written entirely in ReactJS with SCSS.{" "}
              </p>
              <p>
                Constantly a work in progress, so expect the code to change.
              </p>
            </CardText>
            <CardActions border style={{ textAlign: "center" }}>
              <a
                href="https://github.com/tmoss0/react-site"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button colored>GitHub</Button>
              </a>
              <a
                href="https://thmoss.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button colored>Demo</Button>
              </a>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
		}
		/* Python tab (Tab 2) */
		else if (this.state.activeTab === 1) {
			return (
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background:
                  "url(https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png) center / cover"
              }}
            >
              NHL API Search
            </CardTitle>
            <CardText>
              <p>
                A simple one file app I built while learning Python. it uses the
                open NHL API to search various stats, draft year selections and
                other NHL information.
              </p>
              <p>
                Will expand into a Flask app and add it's own website in the
                near future.
              </p>
            </CardText>
            <CardActions border style={{ textAlign: "center" }}>
              <a
                href="https://github.com/tmoss0/NHL-API-Parser"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button colored>GitHub</Button>
              </a>
            </CardActions>
          </Card>
        </div>
      );
		}
	} 	

	render() {
		return (
      <div className="category-tabs">
        <h2 className="page-banner-text">Projects</h2>

        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>Python</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
	}
}

export default Projects;
