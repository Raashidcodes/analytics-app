let data = [];

const ctx = document.getElementById('myChart').getContext('2d');

let chart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: [],
    datasets: [{
      label: 'Values',
      data: [],
      backgroundColor: '#764ba2'
    }]
  }
});

function addData() {
  let val = document.getElementById("value").value;

  data.push(val);

  chart.data.labels.push("Data " + data.length);
  chart.data.datasets[0].data.push(val);

  chart.update();
}