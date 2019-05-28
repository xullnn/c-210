var totalPages = 364;
var energy = 100;

function read() {
  var currentPage = 1;     // currentPage got continually reset to 1

  while (energy > 0 && currentPage < totalPages) {
    currentPage += 1;
    energy -= (5 + currentPage * 0.1);
  }

  console.log('Made it to page ' + String(currentPage) + '.');

  // Drink a cup of coffee.
  energy = 100;

  // Continue reading.
  if (currentPage < totalPages) {
    read();                         // recursive?
  } else {
    console.log('Done!');
  }
}

read();
