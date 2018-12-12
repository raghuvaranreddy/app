import React from 'react'
import { ScrollView, StatusBar, Dimensions, Text } from 'react-native'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import BarChart from './bar-chart'
import { data, contributionData, pieChartData, progressChartData } from './data'
import 'babel-polyfill'

// in Expo - swipe left to see the following styling, or create your own
const chartConfigs = [
  
  {
    backgroundColor: '#ffffff',
    backgroundGradientFrom: '#e53935',
    backgroundGradientTo: '#ef5350',
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16
    }
  },
  {
    backgroundColor: '#ff3e03',
    backgroundGradientFrom: '#ff3e03',
    backgroundGradientTo: '#ff3e03',
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`
  }
]

export default class BatchDetails extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            label: this.props.navigation.state.params.label,
            value: this.props.navigation.state.params.value,
        };
    }

  renderTabBar() {
    return <StatusBar />
  }

  render() {
    const { width } = Dimensions.get('window')
    const height = 220
    return (
      <ScrollableTabView renderTabBar={this.renderTabBar}>
        {chartConfigs.map(chartConfig => {
          const labelStyle = {
            color: 'black',
            marginVertical: 10,
            textAlign: 'center',
            fontSize: 16
          }
          const graphStyle = {
            marginVertical: 8,
            ...chartConfig.style
          }
          return (
            <ScrollView
              key={Math.random()}
              style={{
                backgroundColor: chartConfig.backgroundColor
              }}
            >
              <Text style={labelStyle}>Batch Details</Text>
              <Text style={labelStyle}>{this.state.label}</Text>
              <BarChart
                width={width}
                height={height}
                data={data}
                chartConfig={chartConfig}
                style={graphStyle}
              />
            </ScrollView>
          )
        })}
      </ScrollableTabView>
    )
  }
}