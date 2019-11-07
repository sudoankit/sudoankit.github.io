functionPlot({
  target: '#eigenvector',
  xAxis: {domain: [-4, 4]},
  grid: true,
  data: [{
    vector: [1, 1],
    offset: [0,0],
    graphType: 'polyline',
    fnType: 'vector',
    color: 'black'

  },{
    vector: [-1.5, -1.5],
    offset: [0,0],
    graphType: 'polyline',
    fnType: 'vector',
    color: 'green'

  },{
    vector: [-2, 2],
    offset: [0,0],
    graphType: 'polyline',
    fnType: 'vector',
    color: 'blue'

  },{
    vector: [0.5, 0.5],
    offset: [0,0],
    graphType: 'polyline',
    fnType: 'vector',
    color: 'red'

  }]
})


// functionPlot({
//   target: '#noteigen',
//   xAxis: {domain: [-3, 5]},
//   grid: true,
//   data: [{
//     vector: [1, 1],
//     offset: [0,0],
//     graphType: 'polyline',
//     fnType: 'vector',
//     color: 'red'

//   },{
//     vector: [2, -1.5],
//     offset: [0,0],
//     graphType: 'polyline',
//     fnType: 'vector',
//     color: 'green'

//   }]
// })
