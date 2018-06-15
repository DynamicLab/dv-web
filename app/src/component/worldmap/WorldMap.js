import React, { Component } from 'react';
import { geoMercator, geoPath } from 'd3-geo';

//TODO: Not sure why css loading doesn't work with webpack in component folder. Though the index.css can load properly.
// import styles from "./worldmap.css";

//If we want to make the map interactive or under the search panel, then we can just remove all styles
const styles={
  position: 'absolute',
  zIndex: -1,
  top: 0,
  left: 0,
  height: '160%',
  width: '100%'
}

class WorldMap extends Component {
  render() {
    const projection = geoMercator()
      .scale(100)
      .translate([800 / 2, 450 / 2]);
    const pathGenerator = geoPath().projection(projection);
    const countries = this.props.data.map((d, i) => (
      <path
        key={'path' + i}
        d={pathGenerator(d)}
        onMouseEnter={() => {
          this.props.onHover(d);
        }}
        style={{
          fill:
            this.props.hoverElement === d.id
              ? '#FCBC34'
              : this.props.colorScale(d.launchday),
          stroke: 'black',
          strokeOpacity: 0.5
        }}
        className="countries"
      />
    ));
    return (
      //TODO: Change the height back to use second item in array
      
      <svg
        style={styles}
        width={this.props.size[0]}
        height={this.props.size[0]}
        viewBox="0 0 800 900"
      >
        {countries}
      </svg>
    );
  }
}

export default WorldMap;
