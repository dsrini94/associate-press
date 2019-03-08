import React, { Component } from 'react';

import { Grid, Image, Input, Button, Divider, Icon } from 'semantic-ui-react'

import { Link } from "react-router-dom";


import './loginPage.css';
import logo from './infinity.png'
import logoRed from './infiniteRed.png'

import CoverImage from './street.jpg'

export default class LoginPage extends Component {
  render() {
    return (
      <div className="loginPageContainer">
        <img src={logo} className="logo"/>
        <div className="loginInnerContainer">
        <h1 className="imageText">Associate Press</h1>
        <Grid >
          <Grid.Row>
            <Grid.Column width={7}>
              <h3 className="smallText">Welcome To</h3>
              <Image src={logoRed} className="logoRed"/>
              <h2 className="brandName">Associate Press</h2>
              <br style={{clear:'both'}}/>
              <br />
              <p className="tagLine">Log in to get in the moment updates that interest you.</p>

              <div className="formContainer">
                  <Input focus className="input" icon='user' iconPosition='left' placeholder='Username' />
                  <br />
                  <Input focus className="input" icon='lock' iconPosition='left' placeholder='Password' />
                  <br />
                  <Button className="loginButton" as={Link} to='/home'>Login</Button>
              </div>

              <br />

              <div className="signUpContainer">
                <p className="beforeSignUp">Don't have an account?</p>
                <p>Sign Up Now</p>
              </div>

              <Divider horizontal>Or</Divider>

              <div style={{textAlign:'center'}}>
                <Icon name="facebook" color='primary' size="large" style={{marginRight:20,cursor:'pointer'}}/>
                <Icon name='twitter' color='blue' size="large" style={{marginLeft:15,cursor:'pointer'}}/>
                <Icon name='google plus' color="red" size="large" style={{marginLeft:20,cursor:'pointer'}}/>
              </div>
            </Grid.Column>

            <Grid.Column width={9}>
              <div className="imageContainer">
                <Image src={CoverImage} className="loginCoverImage"/>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        </div>
      </div>
    );
  }
}
