import React from 'react';

class Bullet extends React.Component {

  render() {
    return(
      <div style={this.props.bulletStyle}>
        <svg version="1.1" width="18px" height="30px" viewBox="0 0 29 59"> <g id="Layer_1">
          <path fill="#808080" stroke="#666666" d="M26.3,24.8c0,12.8-9,32-12,32c-3.7,0-12-19.2-12-32
            s5.4-23.1,12-23.1S26.3,12,26.3,24.8z"/>
          </g>
        </svg>

      </div>
    );
  }
}

export default Bullet;
