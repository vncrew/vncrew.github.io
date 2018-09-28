import React, { Component } from "react";
import moment from 'moment';
import Moment from 'react-moment';
import TimePicker from 'rc-time-picker';

class PostPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: true
    };
    this.handleResize = this.handleResize.bind(this);
  }

  onChange(value) {
    console.log(value && value.format("HH: mm"));
  }

  render() {
    const showSecond = false;
    const date = new Date();

    return (
      <div>
      <TimePicker
        style={{ width: 100 }}
        showSecond={showSecond}
        defaultValue={moment()}
        className="xxx"
        onChange={this.onChange}
      />
      <div>
        <Moment subtract={{ hours: 12 }}>{date}</Moment>
        <Moment subtract={{ days: 1, hours: 12 }}>{date}</Moment>
      </div>
      </div>
    );
  }
}

export default PostPreview;
