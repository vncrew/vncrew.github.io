import React from 'react'
import moment from 'moment';
import Moment from 'react-moment';

import TextField from '@material-ui/core/TextField';
import { RadioGroup, RadioButton } from 'react-radio-buttons'

import Layout from '../components/layout'

class IndexPage extends React.Component {
  static displayName = 'TestComponent';

  styles = ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      width: 200,
    },
    table: {
      background: '#f3f3f3',
    },
  });

  state = { time: moment().format('YYYY-MM-DD HH:mm:ss'), base: 'sgn' };
  
  render() {

    let noidia = <Moment format="HH:mm" subtract={{ hours: 1, minutes: 20 }}>{this.state.time}</Moment>
    let ngan = <Moment format="HH:mm" subtract={{ hours: 1, minutes: 35 }}>{this.state.time}</Moment>
    let trung = <Moment format="HH:mm" subtract={{ hours: 1, minutes: 50 }}>{this.state.time}</Moment>
    let dai = <Moment format="HH:mm" subtract={{ hours: 2, minutes: 15 }}>{this.state.time}</Moment>
    let chuy = "Lưu ý: Nội địa có mặt trước 1h20p, Ngắn quốc tế có mặt trước 1h35p, đường Trung có mặt trước 1h50p và đường Dài có mặt trước 2h15p"

    if(this.state.base === 'han') {
      if (moment(this.state.time).format('HH') < 8) {
        noidia = <Moment format="HH:mm" subtract={{ hours: 2, minutes: 0 }}>{this.state.time}</Moment>
        ngan = <Moment format="HH:mm" subtract={{ hours: 2, minutes: 0 }}>{this.state.time}</Moment>
      } else {
        noidia = <Moment format="HH:mm" subtract={{ hours: 2, minutes: 10 }}>{this.state.time}</Moment>
        ngan = <Moment format="HH:mm" subtract={{ hours: 2, minutes: 10 }}>{this.state.time}</Moment>
      }
      trung = <Moment format="HH:mm" subtract={{ hours: 2, minutes: 30 }}>{this.state.time}</Moment>
      dai = <Moment format="HH:mm" subtract={{ hours: 2, minutes: 35 }}>{this.state.time}</Moment>
      chuy = "Lưu ý: Nội địa và Ngắn quốc tế có mặt trước 2h10p (trước 8 giờ có mặt trước 2h00p), đường Trung có mặt trước 2h30p và đường Dài có mặt trước 2h35p"
    }

    return <div>
      <Layout>
        <div style={{marginBottom: 30 + 'px'}}>
          <RadioGroup onChange={(value) => this.setState({base: value})} horizontal value={this.state.base}>
            <RadioButton value="han" pointColor='#639'>Base HAN</RadioButton>
            <RadioButton value="sgn" pointColor='#639'>Base SGN</RadioButton>
          </RadioGroup>

          <h3 style={{ marginTop: 30 + 'px' }}>Chọn giờ bay</h3>
          <form style={this.styles.container} noValidate>
            <TextField
              id="time"
              type="time"
              defaultValue={moment().format('HH:mm')}
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300, // 5 min
              }}
              style={this.styles.textField}
              //onChange={(e) => console.log(moment(e.target.value, "HH:mm").format('YYYY-MM-DD HH:mm:ss'))}
              onChange={(e) => this.setState({ time: moment(e.target.value, "HH:mm").format('YYYY-MM-DD HH:mm:ss') })}
            />
          </form>
        </div>

        <table style={{width: 100 + '%'}}>
          <tbody>
            <tr>
              <th>Chặng</th>
              <th>Giờ briefing</th>
            </tr>
            <tr style={this.styles.table}>
              <td>Nội địa</td>
              <td>{ noidia }</td>
            </tr>
            <tr>
              <td>Ngắn quốc tế</td>
              <td>{ ngan }</td>
            </tr>
            <tr style={this.styles.table}>
              <td>Đường trung</td>
              <td>{ trung }</td>
            </tr>
            <tr>
              <td>Đường dài</td>
              <td>{ dai }</td>
            </tr>
          </tbody>
        </table>
        
        <p style={{ fontSize: 12 + 'px', fontStyle: 'italic', color: '#9BB0C2' }}>{ chuy }</p>

        <p style={{ fontSize: 12 + 'px', fontStyle: 'italic', textAlign: 'center' }}><span role="img" aria-label="heart">❤️</span> via Ha93</p>
      </Layout>
    </div>
  }
}


export default IndexPage
