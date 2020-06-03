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
			/* React projects tab (Tab 1) */
			return (
				<div className="projects-grid">					
					<Card shadow={1} style={{ minWidth: '450', margin: 'auto' }}>
						<CardTitle
						style={{
							color: 'black',
							height: '176px',
							background:
							'url(https://cdn.auth0.com/blog/react-js/react.png) center / cover',
						}}
						>
						Tim Moss Website
						</CardTitle>
						<CardText>
							<p>
								The source code for the website you are currently viewing.
								Written in ReactJS with SCSS.
							</p>
							<p>
								A work in progress, so expect the code to change.
							</p>
						</CardText>
						<CardActions border style={{ textAlign: 'center' }}>
							<a
								href="https://github.com/tmoss0/tmoss0-updated.github.io"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Button className="pink">GitHub</Button>
							</a>
							<a
								href="https://thmoss.com"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Button className="pink">Demo</Button>
							</a>
						</CardActions>
						<CardMenu style={{ color: '#fff' }}>
						<IconButton name="share" />
						</CardMenu>
					</Card>
				</div>
			);
		} 
		else if (this.state.activeTab === 1) {
			/* JS projects tab (Tab 2) */
			return (
				<Grid className="projects-grid">
					<Card shadow={1} style={{ minWidth: '450', margin: 'auto' }}>
						<CardTitle
							style={{
								color: 'black',
								height: '176px',
								background:
									'url(https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png) bottom right / cover',
							}}
						>
							GitHub Finder
						</CardTitle>
						<CardText>
							<p>
								JavaScript project to pull user data from
								GitHub, displaying profile information and recent projects
							</p>
						</CardText>
						<CardActions border style={{ textAlign: 'center' }}>
							<a
								href="https://github.com/tmoss0/Github-Finder"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Button className="pink">GitHub</Button>
							</a>
							<a
								href="https://tmoss-github-finder.herokuapp.com/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Button className="pink">Demo</Button>
							</a>
						</CardActions>
						<CardMenu style={{ color: '#fff' }}>
						</CardMenu>
					</Card>
					<Card shadow={1} style={{ minWidth: '450', margin: 'auto' }}>
						<CardTitle
							style={{
								color: 'black',
								height: '176px',
								background:
									'url(https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png) bottom right / cover',
							}}
						>
							Weather App
						</CardTitle>
						<CardText>
							<p>
								JavaScript project to pull get weather based on location from
								user input or get weather based on location of browser
							</p>
						</CardText>
						<CardActions border style={{ textAlign: 'center' }}>
							<a
								href="https://github.com/tmoss0/Weather-Web-App"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Button className="pink">GitHub</Button>
							</a>
							<a
								href="https://get-weather-js.herokuapp.com/"
								target="_blank"
								rel="noopener noreferrer"
						>
							<Button className="pink">Demo</Button>
						</a>
						</CardActions>
						<CardMenu style={{ color: '#fff' }}>
						</CardMenu>
					</Card>	
				</Grid>
      		);
		} 
		else if (this.state.activeTab === 2) {
		/* Work projects tab (Tab 3) */
			return (
				<div className="projects-grid">
				<Card shadow={1} style={{ minWidth: '450', margin: 'auto' }}>
					<CardTitle
					style={{
						color: 'black',
						height: '176px',
						background:
						'url(https://i.udemycdn.com/course/750x422/1713660_a8cb_4.jpg) center / cover',
					}}
					>
					Work Projects
					</CardTitle>
					<CardText>
					<p>
						Listed below are a few of the websites I have contributed to while
						working at Theory Communication & Design.
					</p>
					<p>
						<a href="https://vortechsuperchargers.com/">
						Vortech Superchargers
						</a>
					</p>
					<p>
						<a href="https://www.theblock.com/">The Block</a>
					</p>
					<p>
						<a href="https://www.wentworthandfenn.com/">Wentworth & Fenn</a>
					</p>
					<p>
						<a href="https://www.mikemooney.com/">Mike Mooney</a>
					</p>
					</CardText>
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
		  <Tab>JavaScript</Tab>
		  <Tab>Work Projects</Tab>
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
