import React from 'react';
import { Card, Button, CardMedia, Link, CardContent, Typography, makeStyles } from '@material-ui/core';

import './App.css';

export function App() {

  const virusVisualizationClick = () => {
    window.open('https://jgf5013.github.io/virus-visualization', '_blank');
  };
  const virusPlanetMapperClick = () => {
    window.open('https://jgf5013.github.io/planet-mapper', '_blank');
  }

  return (
    <div className="app">
      <header className="app-header">
        John Fisher
      </header>
      <div id="projectsContainer">
        <Card className="card">
          <div className="card-wrapper" onClick={virusVisualizationClick}>
            <div className="img-container">
              <CardMedia
                  component="img"
                  alt="Image of virus"
                  image="https://raw.githubusercontent.com/jgf5013/virus-visualization/master/src/bug.png"
                  title="Virus"
              />
            </div>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Virus Simulation
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Why do I need to stay inside??
                </Typography>
              </CardContent>
            </div>
        </Card>
        <Card className="card">
          <div className="card-wrapper" onClick={virusPlanetMapperClick}>
            <div className="img-container">
              <CardMedia
                  component="img"
                  alt="Image of planetary orbit"
                  image="https://raw.githubusercontent.com/jgf5013/planet-mapper/master/public/favicon.png"
                  title="Orbit"
                />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Planet Mapper
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Space tells matter how to move; matter tells space how to curve
                </Typography>
              </CardContent>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};