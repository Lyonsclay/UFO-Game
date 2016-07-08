import React from 'react';
import { render } from 'react-dom';


class UFO extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props.ufoStyle);
  }

  render() {
    const width = "549";
    const height = "169.5";

    return (
        <div style={this.props.ufoStyle}>   
        <svg  width={this.props.width} height={this.props.height} viewBox="0 0 549 169.5">
          <path fill="#4D4D4D" d="M275.4 158.4C166 158.4 42.7 129.5 29 126.2 6.9 120.9 4.3 112 4.7 107.3c.1-1 .2-2.8 20.1-10.5 11.7-4.5 28-10.2 45.7-15.8 31.9-10.2 74.4-22.4 97.9-25.8 5.2-.8 12.8-6.4 22.4-13.6 20.3-15.1 48-35.7 83.5-35.7h.5c34.9 0 62.3 20.4 82.4 35.3 10.1 7.5 18.1 13.5 23.5 13.9 39.1 3.3 78.5 13.9 93.7 18.3 18.7 5.4 69.4 26.8 70.1 33.9.8 8.6-6.3 14.6-22.3 18.9-40.4 11-158 32.2-246.8 32.2zM6.7 107.5c-.3 4.2 2.3 11.8 22.8 16.7 13.7 3.3 136.7 32.1 245.9 32.1 88.6 0 206-21.2 246.2-32 19.5-5.2 21.2-12.1 20.8-16.8-.4-4.8-46.5-25.8-68.6-32.2-15.1-4.4-54.4-14.9-93.3-18.2-5.9-.5-14.1-6.6-24.5-14.3-19.8-14.8-47-35-81.2-35h-.5c-34.8 0-62.3 20.4-82.3 35.3-9.9 7.3-17.7 13.1-23.3 14-23 3.4-64.8 15.3-96.3 25.3-40.8 13.1-64.2 22.7-65.7 25.1z"/>

          <path fill="#4D4D4D" d="M278.6 133.9c-15 0-27.2-7-27.2-15.5s12.2-15.5 27.2-15.5 27.2 7 27.2 15.5-12.1 15.5-27.2 15.5zm0-29c-13.9 0-25.2 6.1-25.2 13.5s11.3 13.5 25.2 13.5 25.2-6.1 25.2-13.5-11.2-13.5-25.2-13.5zM362.8 126.5c-12.2 0-21.6-5.3-22.3-12.6-.4-4.1 1.9-8.2 6.5-11.5 4.4-3.2 10.5-5.3 17.1-6 1.5-.1 2.9-.2 4.3-.2 12.2 0 21.6 5.3 22.3 12.6.8 8.2-9.7 16.1-23.6 17.5-1.4.2-2.8.2-4.3.2zm5.7-28.2c-1.4 0-2.8.1-4.1.2-6.3.6-12 2.6-16.2 5.6-4 2.9-6 6.3-5.7 9.7.6 6.2 9.4 10.8 20.3 10.8 1.4 0 2.8-.1 4.1-.2 12.8-1.3 22.5-8.2 21.8-15.3-.5-6.2-9.3-10.8-20.2-10.8zM441 114c-10.2 0-17.7-4-19-10.2-.9-4 .9-8.3 5.1-12.1 4-3.7 9.8-6.5 16.3-7.9 3-.7 6-1 8.8-1 10.2 0 17.7 4 19 10.2.9 4-.9 8.3-5.1 12.1-4 3.7-9.8 6.5-16.3 7.9-2.9.7-5.9 1-8.8 1zm11.3-29.2c-2.7 0-5.6.3-8.4.9-6.2 1.4-11.6 4-15.4 7.5-3.6 3.3-5.2 7-4.5 10.2 1.1 5.2 8 8.6 17.1 8.6 2.7 0 5.6-.3 8.4-.9 6.2-1.4 11.6-4 15.4-7.5 3.6-3.3 5.2-7 4.5-10.2-1.2-5.2-8-8.6-17.1-8.6zM195.3 126.7c-1.9 0-3.8-.1-5.7-.4-6.6-.9-12.6-3.2-16.9-6.6-4.5-3.5-6.6-7.6-6.1-11.7.9-7 9.7-11.9 21.3-11.9 1.9 0 3.8.1 5.7.4 6.6.9 12.6 3.2 16.9 6.6 4.5 3.5 6.6 7.6 6.1 11.7-.9 7-9.6 11.9-21.3 11.9zM188 98.1c-10.4 0-18.5 4.3-19.3 10.1-.5 3.3 1.4 6.8 5.3 9.8 4 3.1 9.7 5.3 16 6.2 1.8.2 3.7.4 5.4.4 10.4 0 18.5-4.3 19.3-10.1.5-3.3-1.4-6.8-5.3-9.8-4-3.1-9.7-5.3-16-6.2-1.8-.2-3.7-.4-5.4-.4zM118.3 110.8c-2.4 0-4.8-.2-7.2-.6-6.6-1.1-12.5-3.7-16.7-7.2-4.3-3.6-6.3-7.9-5.6-11.9C89.9 84.4 98.1 80 109 80c2.4 0 4.8.2 7.2.6 6.6 1.1 12.5 3.7 16.7 7.2 4.3 3.6 6.3 7.9 5.6 11.9-1.1 6.7-9.3 11.1-20.2 11.1zM109 82c-9.8 0-17.3 3.9-18.3 9.4-.6 3.3 1.2 6.9 5 10 3.9 3.3 9.5 5.7 15.7 6.8 2.3.4 4.6.6 6.8.6 9.8 0 17.3-3.9 18.3-9.4.6-3.3-1.2-6.9-5-10-3.9-3.3-9.5-5.7-15.7-6.8-2.2-.4-4.5-.6-6.8-.6zM275.9 75.9c-19.7 0-100.6-10.8-105.1-20.8l1.8-.8c3.6 8.1 79.2 19.6 103.2 19.6 27 0 93.5-7 102.2-18.6l1.6 1.2c-9.4 12.6-77.8 19.4-103.7 19.4z"/>

        <path fill="#4D4D4D" d="M277.2 165.4c-109.7 0-232.9-28.9-246.6-32.2-18.2-4.4-26.7-17.4-26.7-24.9v-1.5h2v1.5c0 5.3 6.3 18.4 25.2 22.9 13.7 3.3 136.7 32.1 246.1 32.1 88.7 0 206-21.2 246.3-32 17.5-4.7 19.2-16.3 18.6-22.9l2-.2c.6 7.1-1.1 19.9-20.1 25-40.3 10.9-157.9 32.2-246.8 32.2z"/>

      </svg>
    </div>);
  }
}

class App extends React.Component {
  constructor() {
    super()
   
    this.state = {
      ufos: [],
      screen: { width: window.innerWidth, height: window.innerHeight }
    };
  }

  render() {
    const ufoStyle = {
      width: this.state.screen.width,
      height: this.state.screen.width,
      position: 'absolute',
      top: '100px',
      left: '100px'
    };
    const ufoStyle2 = { position: 'absolute', top: '300px', left: '300px' };
    const galaxyStyle={ width: this.state.screen.width, height: this.state.screen.height };

    return (
      <div className="Galaxy" style={galaxyStyle}>
        <UFO width={200} height={75} ufoStyle={ufoStyle}/>
        <UFO width={200} height={75} ufoStyle={ufoStyle2}/>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
