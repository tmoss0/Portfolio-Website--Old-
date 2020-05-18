import React from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link, NavLink } from 'react-router-dom';
import './App.css';

function App() {

  return (
    <div className="demo-big-content">
      <Layout>
        <Header className="header-color" title="Tim Moss" scroll>
          <Navigation>
            {/* <Link to="/">Home</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link> */}
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
            <Link to="/">Home</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
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

export default App;
