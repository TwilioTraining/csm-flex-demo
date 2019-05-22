import React, { Component } from 'react';
import { withTheme } from '@twilio/flex-ui';
import styled from "react-emotion";

class SampleView extends Component {
  render() {
    return (
      <Canvas>
        <Container>
          <HeaderLine>
            <Header>Welcome to our Custom View</Header>
          </HeaderLine>
          <SVGIcon color={this.props.theme.calculated.textColor} />
          <Label>I am a custom view</Label>
        </Container>
      </Canvas >
    );
  }
}

const SVGIcon = (props) => {
  return <svg viewBox="0 0 352 472" height="330" width="200">
    <g fill={props.color} fill-opacity="0.9">
      <path d="m303.93111,21.384l-73.345,0l-2.982,-13.394c-1.024,-4.667 -5.171,-7.99 -9.953,-7.99l-82.618,0c-4.782,0 -8.913,3.323 -9.953,7.99l-2.967,13.394l-73.36,0c-26.835,0 -48.654,21.827 -48.654,48.662l0,352.06c0,26.835 21.819,48.662 48.654,48.662l255.179,0c26.835,0 48.67,-21.827 48.67,-48.662l0,-352.06c-0.001,-26.835 -21.836,-48.662 -48.671,-48.662zm16.866,400.721c0,9.295 -7.563,16.858 -16.866,16.858l-255.179,0c-9.287,0 -16.85,-7.563 -16.85,-16.858l0,-352.059c0,-9.295 7.563,-16.857 16.85,-16.857l66.294,0l-1.692,7.609c-0.684,3.02 0.062,6.188 1.988,8.596c1.94,2.415 4.876,3.82 7.965,3.82l106.082,0c3.091,0 6.026,-1.405 7.951,-3.82c1.942,-2.415 2.687,-5.575 2.004,-8.596l-1.692,-7.609l66.279,0c9.303,0 16.866,7.563 16.866,16.857l0,352.059z" />
      <path d="m111.80111,188.426l43.249,0l-10.279,-7.019c-14.506,-9.899 -18.232,-29.693 -8.325,-44.197c9.893,-14.489 29.693,-18.239 44.197,-8.324l1.694,1.157l0,-12.136c0,-7.866 -6.383,-14.248 -14.242,-14.248l-56.294,0c-7.857,0 -14.24,6.383 -14.24,14.248l0,56.271c0,7.867 6.383,14.248 14.24,14.248z" />
      <path d="m244.22211,110.313l-49.85,47.194l-22.704,-15.49c-7.221,-4.962 -17.13,-3.083 -22.099,4.162c-4.954,7.251 -3.09,17.144 4.178,22.098l33.28,22.727c2.718,1.864 5.839,2.772 8.961,2.772c3.96,0 7.888,-1.474 10.933,-4.356l59.167,-56.014c6.382,-6.033 6.645,-16.104 0.62,-22.479c-6.056,-6.375 -16.105,-6.647 -22.486,-0.614z" />
      <path d="m111.80111,297.669l43.265,0l-10.295,-7.027c-14.506,-9.901 -18.232,-29.693 -8.325,-44.197c9.893,-14.498 29.693,-18.248 44.197,-8.325l1.694,1.158l0,-12.136c0,-7.865 -6.383,-14.248 -14.242,-14.248l-56.294,0c-7.857,0 -14.24,6.383 -14.24,14.248l0,56.279c0,7.865 6.383,14.248 14.24,14.248z" />
      <path d="m244.22211,219.555l-49.85,47.186l-22.704,-15.49c-7.221,-4.97 -17.13,-3.098 -22.099,4.162c-4.954,7.253 -3.09,17.144 4.178,22.099l33.28,22.727c2.718,1.864 5.839,2.772 8.961,2.772c3.96,0 7.888,-1.476 10.933,-4.356l59.167,-56.007c6.382,-6.033 6.645,-16.096 0.62,-22.479c-6.056,-6.376 -16.105,-6.64 -22.486,-0.614z" />
      <path d="m168.09511,322.135l-56.294,0c-7.857,0 -14.24,6.383 -14.24,14.248l0,56.271c0,7.865 6.383,14.248 14.24,14.248l56.294,0c7.859,0 14.242,-6.383 14.242,-14.248l0,-56.271c0,-7.865 -6.383,-14.248 -14.242,-14.248z" />
    </g>
  </svg >;
}

const Label = styled("h1")`
  letter-spacing: 2px;
`;

const HeaderLine = styled("div")`
  border-style: solid;
  border-width: 0px 0px 4px;
  border-color: rgb(25, 118, 210);
`;

const Container = styled("div")`
  color: ${props => props.theme.calculated.textColor}};
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  max-width: 100%;
`;

const Header = styled("div")`
  font-size: 10px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 0px 12px 4px;
`;

const Canvas = styled("div")`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  align-items: center;
  background-color: ${props => props.theme.TaskCanvas.Container.background};
`;

export default withTheme(SampleView);
