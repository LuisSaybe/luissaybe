var getXYArray = function(length) {
  var r = new Array(length);

  for (var i = 0; i < length; i += 1) {
    r[i] = {x: 0, y: 0};
  }

  return r;
};

var max = 150;
var events = [];
var canvas = document.querySelector('canvas');

var chart = new Chart(canvas, {
    type: 'line',
    data: {
      datasets: [
        {
          label: 'x acceleration',
          backgroundColor: 'black',
          pointBackgroundColor: 'black',
          data: getXYArray(max)
        },
        {
          label: 'y acceleration',
          backgroundColor: 'red',
          pointBackgroundColor: 'red',
          data: getXYArray(max)
        },
        {
          label: 'z acceleration',
          backgroundColor: 'blue',
          pointBackgroundColor: 'blue',
          data: getXYArray(max)
        }
      ]
    },
    options: {
      animation : false,
      showLines: false,
      scales: {
          xAxes: [{
              type: 'linear',
              position: 'bottom',
              display: false
          }],
          yAxes: [{
              type: 'linear',
              position: 'left',
              ticks: {
                min: -40,
                max: 40
              }
          }]
      }
    }
});

var cdraw = function() {
  requestAnimationFrame(function() {
    var xset = chart.data.datasets[0].data;
    var yset = chart.data.datasets[1].data;
    var zset = chart.data.datasets[2].data;

    for (var i = 0; i < events.length; i += 1) {
      var e = events[i];
      var x = i * e.interval;

      xset[i].x = x;
      xset[i].y = e.acceleration.x;
      yset[i].x = x;
      yset[i].y = e.acceleration.y;
      zset[i].x = x;
      zset[i].y = e.acceleration.z;
    }

    chart.update();
    cdraw();
  });
};

if ('ondevicemotion' in window) {
  window.ondevicemotion = function(event) {
    events.push(event);

    if (events.length > max) {
      events.shift();
    }
  };

  cdraw();
  document.querySelector('canvas').style.display = 'block';
} else {
  document.querySelector('p').style.display = 'block';
}