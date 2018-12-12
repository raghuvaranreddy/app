import React, { Component } from 'react';
import { Text, View, Dimensions} from 'react-native';
import { PieChart } from 'react-native-svg-charts';

export default class PieChartDynamicSlices extends Component {

	constructor(props) {
		super(props);
		this.state = {
			selectedSlice: {
				label: ' ',
				value: 0
			},
			labelWidth: 0
		}
	}
	render () {
		const { labelWidth, selectedSlice } = this.state
		const keys = ['iHOP', 'Marriot', 'Hyatt', 'RedLion']
		const values = [15,  25, 35, 45, 55]
		const colors = ['red','green','blue','brown']
		const data = keys.map((key, index) => {
			return {
				key,
				value: values[index],
				svg: {fill: colors[index] },
				arc: { outerRadius: (70 + values[index]) + '%', padAngle: label === key ? 0.1 : 0},
				OnPress: () => this.setState({ selectedSlice : { label: key, value: values[index] } })
			}
		})
		const deviceWidth = Dimensions.get('window').width

		return (
			<View style={{ justifyContent: 'center', flex: 1 }}>
				< PieChart
					style={ { height: 200 } }
					outerRadius={ '80%' }
					innerRadius={ '45%' }
					data={ data }
				/>
				<Text
					onLayout={({ nativeEvent: { layout: {width} } }) => {
						this.setState({ labelWidth: width });
					}}
					style={{
						position: 'absolute',
						left: deviceWidth / 2 - labelWidth / 2,
						textAlign: 'center'
					}}>
					{`${label} \n ${value}`}
				</Text>
			</View>
		)
	}
}
