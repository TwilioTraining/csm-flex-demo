import React from 'react';

export class CustomNotification extends React.Component {
  render() {
    const { header, message } = this.props;
    return (
      <div>
        <div style={{ fontWeight: 'bold' }}>
          {header}
        </div>
        <div>
          {message}
        </div>
      </div >
    );
  }
}

export default CustomNotification;
