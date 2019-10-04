new Chart(document.getElementById("bar-chart2"), {
type: 'bar',
data: {

  labels: [11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26],
  datasets: [
    {
      label: "users / level",
      backgroundColor: "#4f1f2f",
      data: [196,160,110,94,70,56,45,33,34,19,22,23,15,8,10,48]
    }
  ]
},
options: {
  legend: { display: false },
  title: {
    display: true,
    text: 'users / level'
  }
}
});
