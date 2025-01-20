 // Function to increment the counter
 function increment() {
  const counter = document.getElementById('counter');
  counter.value = parseInt(counter.value) + 1;
}

// Function to decrement the counter
function decrement() {
  const counter = document.getElementById('counter');
  if (parseInt(counter.value) > 0) {
    counter.value = parseInt(counter.value) - 1;
  }
}