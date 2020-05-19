import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link, NavLink } from 'react-router-dom';
import './App.css';

class App extends Component {	

	// Toggles drawer closed when selecting new page
	hideToggle() {
		var selectorId = document.querySelector('.mdl-layout');
		selectorId.MaterialLayout.toggleDrawer();
	}

	render() {
		return (		
			<div className="demo-big-content">
			<Layout>
				<Header className="header-color" title="Tim Moss" scroll>
					<Navigation>
						<NavLink exact to="/" activeClassName="selected">
						Home
						</NavLink>
						<NavLink to="/resume" activeClassName="selected">
						Resume
						</NavLink>
						<NavLink to="/about" activeClassName="selected">
						About
						</NavLink>
						<NavLink to="/projects" activeClassName="selected">
						Projects
						</NavLink>
						<NavLink to="/contact" activeClassName="selected">
						Contact
						</NavLink>
					</Navigation>
				</Header>
				<Drawer title="Tim Moss">
					<Navigation>
						<Link to="/" onClick={() => this.hideToggle()}>Home</Link>
						<Link to="/resume" onClick={() => this.hideToggle()}>Resume</Link>
						<Link to="/about" onClick={() => this.hideToggle()}>About</Link>
						<Link to="/projects" onClick={() => this.hideToggle()}>Projects</Link>
						<Link to="/contact" onClick={() => this.hideToggle()}>Contact</Link>
					</Navigation>
				</Drawer>
				<Content>
					<div className="page-content" />
					<Main />
				</Content>
			</Layout>
			</div>
		);
	}
}

export default App;
