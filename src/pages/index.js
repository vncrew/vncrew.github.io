import 'rc-time-picker/assets/index.css';

import React from 'react'
import moment from 'moment';
import Moment from 'react-moment';
import TimePicker from 'rc-time-picker';

import Layout from '../components/layout'

class IndexPage extends React.Component {
  static displayName = 'TestComponent';

  state = { time: new Date() };
  
  render() {
    const showSecond = false;

    return <div>
      <Layout>
        <TimePicker
          style={{ width: 100 }}
          showSecond={showSecond}
          defaultValue={moment()}
          className="xxx"
          onChange={(value) => this.setState({ time: value && value.format('YYYY-MM-DD HH:mm:ss') })}
        />
        <ul>
          <li>Ngắn nội địa: <Moment format="HH:mm" subtract={{ hours: 1, minutes: 20 }}>{this.state.time}</Moment></li>
          <li>Ngắn quốc tế: <Moment format="HH:mm" subtract={{ hours: 1, minutes: 35 }}>{this.state.time}</Moment></li>
          <li>Dài: <Moment format="HH:mm" subtract={{ hours: 2, minutes: 5 }}>{this.state.time}</Moment></li>
        </ul>
      </Layout>
    </div>
  }
}


export default IndexPage
