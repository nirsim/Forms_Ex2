var currentValue = 1

function changeProgress() {
	var progressElement = document.getElementById("progbar");
	var currentValue = parseInt(progressElement.value);
	progressElement.value = currentValue + 1;
  }