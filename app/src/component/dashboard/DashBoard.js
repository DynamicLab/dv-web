import React, { Component } from "react";

import WorldMap from "../worldmap/WorldMap";
import { range } from "d3-array";
import { scaleThreshold } from "d3-scale";
import { geoCentroid } from "d3-geo";

import worlddata from "../../data/World";
import SearchPanel from "../searchpanel/SearchPanel";
import "./DashBoard.css";

// const appdata = worlddata.features.filter(d => geoCentroid(d)[0] < -20);
const appdata = worlddata.features;

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
    screenWidth: 900,
    screenHeight:900,
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

  render() {
    const filteredAppdata = appdata.filter(
      (d, i) =>
        d.launchday >= this.state.brushExtent[0] &&
        d.launchday <= this.state.brushExtent[1]
    );
    return (
      <div className="dashboard">
        <SearchPanel />
        <br />
        <WorldMap
            hoverElement={this.state.hover}
            onHover={this.onHover}
            colorScale={colorScale}
            data={filteredAppdata}
            size={[this.state.screenWidth, this.state.screenHeight]}
          />  
      </div>
    );
  }
}
