import './projects.css';
import React, { Component } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { FooterBar } from '../components/FooterBar';

// const projects = [
//   {
//       'picture': 'zyx',
//       'title' : 'title',
//       'descr'
//   }
// ]

class Classes extends Component {
  render() {
    return (
      <div className="App-header">
        <div className="grid">
          <MDBRow style={{ padding: '6.5vmin', maxHeight: '100vh', overflow: 'auto' }}>
            <MDBCol md='4'>
              <Card sx={{ maxWidth: 320 }}>
                <CardActionArea href="https://github.com/MichaelG922/Smarternships" target="_blank">
                  <CardMedia
                    component="img"
                    height="230"
                    image="https://raw.githubusercontent.com/MichaelG922/Smarternships/main/new_logo.png"
                    alt="Smarternships Logo"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Smarternships
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      An Android app in Kotlin with Firebase to store encrypted logins. The platform is
                      like Fiverr, allowing students and companies to connect and fill jobs.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </MDBCol>

            <MDBCol md='4'>
              <Card sx={{ maxWidth: 320 }}>
                <CardActionArea href="https://dhaliwalg.github.io/320finalproj/" target="_blank">
                  <CardMedia
                    component="img"
                    height="230"
                    image="https://preview.redd.it/shpmpl91zk761.png?width=1000&format=png&auto=webp&s=9cfd77d2b414ae91725379294b7ab6370238e409"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      DataSci + ML
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      An exploratory analysis in Python of all VALORANT professional matches from launch until May 2021,
                      with hypothesis testing & machine learning.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </MDBCol>

            <MDBCol md='4'>
              <Card sx={{ maxWidth: 320 }}>
                <CardActionArea href="https://github.com/dhaliwalg/tweaks" target="_blank">
                  <CardMedia
                    component="img"
                    height="230"
                    image="https://raw.githubusercontent.com/dhaliwalg/dhaliwalg.github.io/master/CydiaIcon.png"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      iOS Exploits
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      A personal passion project of reverse-engineering and injecting 3rd party code on
                      jailbroken iOS softwares, developed in Obj-C using THEOS.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </MDBCol>
          </MDBRow>
        </div>

        <p className="text">more projects on the way 😀</p>
        <FooterBar />
      </div >
    )
  }
}

export default Classes;