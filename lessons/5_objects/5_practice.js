function greetings(names, info) {
  var full_name = names.join(' ');
  var description = Object.values(info).join(' ');
  console.log(`Hi ${full_name}! Nice to have a ${description} around.`)
}

greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' });


// Or info.title
// info.occupation
