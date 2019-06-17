var todos = ['wash car', 'exercise', 'buy groceries', 'balance budget',
             'call plumber', 'feed fido', 'get gas',  'organize closet'];

function addTask(task) { // return undefined
  if (todos.includes(task)) {
    console.log('That task is already on the list.');
  } else {
    todos.push(task);
  }
}

function completeTasks(n = 1) { // return undefined
  var tasksComplete = 0;

  while (todos.length > 0 && tasksComplete < n) {
    console.log(todos[0] + ' complete!');
    todos.splice(0, 1) // delete todos[0]; // or use shift()
    tasksComplete++;
  }

  if (todos.length === 0) {
    console.log('All tasks complete!');
  } else {
    console.log(tasksComplete + ' tasks completed; ' + todos.length + ' remaining.');
  }
}

function displayTaskList() { // return undefined
  var i;

  console.log('ToDo list (' + todos.length + ' tasks):')
  console.log('---------------------');

  for (i = 0; i < todos.length; i++) {
    console.log('-- ' + todos[i]);
  }
}

// Utilizing our task manager

addTask('oil change');
addTask('dentist');
addTask('homework');

completeTasks(3);
displayTaskList();

// On line 17, the code intends to delete 1 element from the array
  // each iteration
// but using delete array[0] will left an undefined at the slot

// > array = [1,2,3]
// [ 1, 2, 3 ]
// > delete array[0]
// true
// > array
// [ <1 empty item>, 2, 3 ]
// if we insist deleting element through this way
  // we need to find a way to move all the remaining element 1 position forward to fill the gap at the beginning of the array

// Or we can use Array.prototype.splice() to wrap all the work together in one line of code
