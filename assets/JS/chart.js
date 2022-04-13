const labels = [
  'Jun 30 `17',
  'Sep 30 `17',
  'Dec 31 `17',
  'Mar 31 `18',
  'Jun 30 `18',
  'Sep 30 `18',
  'Dec 31 `18',
  'Mar 31 `19',
  'Jun 30 `19',
  'Sep 30 `19',
  'Dec 31 `19',
  'Mar 31 `20',
  'Jun 30 `20',
  'Sep 30 `20',
  'Dec 31 `20',
  'Mar 31 `21',
  'Jun 30 `21',
  moment().format("MMM YY"),
];

const data = {
  labels: labels,
  datasets: [{
    label: 'My First dataset',
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: [0, 10, 5, 2, 20, 30, 45, 100, 75, 50, 34, 75],
  }]
};

const config = {
  type: 'line',
  data: data,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    
  }
};

const myChart = new Chart(
  document.getElementById('myChart'),
  config
);

var march17 = moment().format("ddd, MMMM Do YYYY");
console.log(moment().quarter())

var june17 = moment().add(1, 'days').format("ddd, MMMM Do YYYY");