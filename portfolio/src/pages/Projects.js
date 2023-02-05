import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import './projects.css';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

class Classes extends Component {
  render() {
    return (
      <div className="App-header">
        <div className="grid">
          <Grid container spacing={12}>
            
            <Grid item xs={3}>
              <Item>
                <Card > 
                  <Card.Img variant="top" src='https://raw.githubusercontent.com/MichaelG922/Smarternships/main/new_logo.png'/>
                  <Card.Body>
                    <Card.Title>smarternships</Card.Title>
                    <Card.Text>
                      an android application similar to fiverr, where students and companies can connect and fulfill jobs.
                    </Card.Text>
                    <Button href="https://github.com/MichaelG922/Smarternships" variant="primary">Let's see it!</Button>
                  </Card.Body>
                </Card>
              </Item>
            </Grid>

            <Grid item xs={3}>
            <Item>
              <Card>
                  <Card.Img variant="top" src="https://preview.redd.it/mn3yrpc10t761.png?width=1000&format=png&auto=webp&v=enabled&s=4ee098c367a492c85c20023c46ef5aeb47457865" />
                  <Card.Body>
                    <Card.Title>data science final</Card.Title>
                    <Card.Text>
                      an exploratory analysis of all valorant professional matches from launch until may 2021 with machine learning.
                    </Card.Text>
                    <Button href="https://dhaliwalg.github.io/320finalproj/" variant="primary">Let's see it!</Button>
                  </Card.Body>
                </Card>
              </Item>
            </Grid>

            <Grid item xs={3}>
            <Item>
              <Card className='jb_card'>
                  <Card.Img variant="top" src="https://raw.githubusercontent.com/dhaliwalg/dhaliwalg.github.io/master/CydiaIcon.png"/>
                  <Card.Body>
                    <Card.Title>ios jailbreak development</Card.Title>
                    <Card.Text>
                      a personal passion for reverse-engineering and injecting 3rd party code to add functionality to jailbroken iOS firmwares.
                    </Card.Text>
                    <Button href="https://github.com/dhaliwalg/tweaks" variant="primary">Let's see it!</Button>
                  </Card.Body>
                </Card>
              </Item>
            </Grid>
          </Grid>
        </div>
        <p className="text">more projects on the way 😀</p>
      </div>
    )
  }
}

export default Classes;