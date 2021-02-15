function expand() {
  var element = document.getElementById("sideBar");
  var mainArea = document.getElementById("mainArea");
  element.classList.remove("contract");
  element.classList.add("expand");
  mainArea.classList.add("add-left-margin");
}

function contract() {
  var element = document.getElementById("sideBar");
  var mainArea = document.getElementById("mainArea");
  element.classList.add("contract");
  element.classList.remove("expand");
  mainArea.classList.remove("add-left-margin");
}

window.onload = function() { 
  init();
};

function init() {
  if (document.getElementById('myChart')) {
    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'doughnut',
  
      // The data for our dataset
       data: {
        labels: [
          'Red',
          'Blue',
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 50],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
          ],
          hoverOffset: 4
        }]
      },
  
      // Configuration options go here
      options: {
        responsive: true,
   maintainAspectRatio: true, 
        rotation: 6,
        cutoutPercentage: 75,
        elements: {
          arc: {
              borderWidth: 0
          }
      },
        legend: {
          display: false
      },
      }
    });
  }
}

