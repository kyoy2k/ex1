import React from 'react';
import './index.css';

interface Props {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
}

export default class Switch extends React.PureComponent<Props> {
  render() {
    return (
      <div className="comp-switch">
        <div className="switch-button" />
      </div>
    );
  }
}
