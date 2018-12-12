import React, { Component } from 'react';
import {
  Text,
  View,
  Dimensions
} from 'react-native';
import BatchDetails from './batch-details'
import { PieChart } from 'react-native-svg-charts'
import { Circle, G, Line} from 'react-native-svg'

class WelcomeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedSlice: {
        label: '',
        value: 0
      },
      labelWidth: 0
    }
  }
  render() {
    const { labelWidth, selectedSlice } = this.state;
    const { label, value } = selectedSlice;
    const keys = ['iHop', 'Marriot', 'Hyatt', 'RedLion', 'AppleBees'];
    const values = [15, 25, 35, 45, 55];
    const colors = ['#600080', '#9900cc', '#c61aff', '#d966ff', '#ecb3ff']
    const data = keys.map((key, index) => {
        return {
          key,
          value: values[index],
          svg: { fill: colors[index] },
          // onPress: () => this.setState({ selectedSlice: { label: key, value: values[index] } }),
          onPress: () => this.props.navigation.navigate('BatchDetails', { label: key, value: values[index] })
        }
      })
    const Labels = ({ slices }) => {
      return slices.map((slice, index) => {
          const { labelCentroid, pieCentroid, data } = slice;
          return (
              <G key={ index }
              >
                  <Line
                      x1={ labelCentroid[ 0 ] }
                      y1={ labelCentroid[ 1 ] }
                      x2={ pieCentroid[ 0 ] }
                      y2={ pieCentroid[ 1 ] }
                      stroke={ data.svg.fill }
                  />
                  <Circle
                      cx={ labelCentroid[ 0 ] }
                      cy={ labelCentroid[ 1 ] }
                      r={ 20 }
                      fill={ data.svg.fill }
                  />
                  <Text
                      x={ labelCentroid[ 0 ] }
                      y={ labelCentroid[ 1 ] }
                      fill={'black'}
                      textAnchor={'middle'}
                      alignmentBaseline={'middle'}
                      fontSize={20}
                      stroke={'black'}
                      strokeWidth={0.2}
                  >
                    {data.value}
                  </Text>
              </G>
          )
      })
    }
    const deviceWidth = Dimensions.get('window').width

    return (
        <PieChart
          style={ { height: 400 } }
          data={ data }
          innerRadius={ 50 }
          outerRadius={ 100 }
          labelRadius={ 140 }
        >
          <Labels/>
        </PieChart>
    )
  }
}

export default WelcomeScreen;
