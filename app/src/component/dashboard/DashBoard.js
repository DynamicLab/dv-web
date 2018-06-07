import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { Title } from "../title/Title";
import SearchBar from "../searchbar/SearchBar";
import { airports } from "../../data/Airports";
import WorldMap from "../worldmap/WorldMap";
import { range } from "d3-array";
import { scaleThreshold } from "d3-scale";
import { geoCentroid } from "d3-geo";

import worlddata from "../../data/World";

const appdata = worlddata.features.filter(d => geoCentroid(d)[0] < -20);

appdata.forEach((d, i) => {
  const offset = Math.random();
  d.launchday = i;
  d.data = range(30).map((p, q) => (q < i ? 0 : Math.random() * 2 + offset));
});

const colorScale = scaleThreshold()
  .domain([5, 10, 20, 30])
  .range(["#75739F", "#5EAFC6", "#41A368", "#93C464"]);

export class DashBoard extends Component {
  state = {
    airports: "YOW",
    screenWidth: 1000,
    screenHeight: 500,
    hover: "none",
    brushExtent: [0, 40]
  };
  onResize = this.onResize.bind(this);
  onHover = this.onHover.bind(this);
  onBrush = this.onBrush.bind(this);

  onResize() {
    this.setState({
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight - 120
    });
  }

  onHover(d) {
    this.setState({ hover: d.id });
  }

  onBrush(d) {
    this.setState({ brushExtent: d });
  }

  componentDidMount() {
    window.addEventListener("resize", this.onResize, false);
    this.onResize();
  }

  setAirport = state => {
    this.setState({ airports: state });
    console.log(`Print in DashBoard: ${state}`);
  };

  render() {
    const filteredAppdata = appdata.filter(
      (d, i) =>
        d.launchday >= this.state.brushExtent[0] &&
        d.launchday <= this.state.brushExtent[1]
    );
    return (
      <div>
        {/* title */}
        <Grid container spacing={8}>
          <Grid item xs={1} />
          <Grid item xs>
            <Title title={this.state.airports} />
          </Grid>
        </Grid>
        
        <Grid container spacing={8} justify="center" alignItems="center">
          <Grid>
          <WorldMap
            hoverElement={this.state.hover}
            onHover={this.onHover}
            colorScale={colorScale}
            data={filteredAppdata}
            size={[this.state.screenWidth / 2, this.state.screenHeight / 2]}
          />
          </Grid>
        </Grid>

        {/* search bar */}
        <Grid
          container
          spacing={8}
          direction="column"
          justify="center"
          alignContent="center"
        >
          <Grid container item spacing={0} justify="center" alignItems="center">
            <Grid item xs={4}>
              <SearchBar setAirport={this.setAirport} />
            </Grid>
          </Grid>
        </Grid>
        
      </div>
    );
  }
}
