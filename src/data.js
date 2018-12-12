// Mock data object used for LineChart and BarChart

const data = {
  labels: ['Open', 'Rejected', 'Closed', 'SoftClosed'],
  datasets: [{
    data: [
      50,
      12,
      20,
      10
    ]
  },{
    data: [
      20,
      10,
      4,
      56,
      87,
      90
    ]
  },{
    data: [
      30,
      90,
      67,
      54,
      10,
      2
    ]
  }]
}

// Mock data object used for Contribution Graph

const contributionData = [
  { date: '2016-01-02', count: 1 },
  { date: '2016-01-03', count: 2 },
  { date: '2016-01-04', count: 3 },
  { date: '2016-01-05', count: 4 },
  { date: '2016-01-06', count: 5 },
  { date: '2016-01-30', count: 2 },
  { date: '2016-01-31', count: 3 },
  { date: '2016-03-01', count: 2 },
  { date: '2016-04-02', count: 4 },
  { date: '2016-03-05', count: 2 },
  { date: '2016-02-30', count: 4 }
]

// Mock data object for Pie Chart

const pieChartData = [
  { name: 'iHOP', batches: 50, color: 'rgba(131, 167, 234, 1)', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  { name: 'Marriot', batches: 28, color: 'orange', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  { name: 'Hyatt', batches: 52, color: 'red', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  { name: 'RedLion', batches: 85, color: 'green', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  { name: 'AppleBees', batches: 65, color: 'rgb(0, 0, 255)', legendFontColor: '#7F7F7F', legendFontSize: 15 }
]

// Mock data object for Progress

const progressChartData = [0.4, 0.6, 0.8]

export { data, contributionData, pieChartData, progressChartData }