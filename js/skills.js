const meterFills = document.querySelectorAll('.meter-fill');

meterFills.forEach(meter => {
  const width = meter.style.width;
  const percentage = parseInt(width);

  if (percentage >= 90) {
    meter.style.backgroundColor = "green";
  } else if (percentage >= 80) {
    meter.style.backgroundColor = "orange";
  } else if (percentage >= 60) {
    meter.style.backgroundColor = "rgb(218, 218, 8)";
  } else {
    meter.style.backgroundColor = "red";
  }
});
