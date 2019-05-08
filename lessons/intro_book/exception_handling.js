let names = ['bob', 'joe', 'steve', undefined, 'frank'];

names.forEach((name) => {
  try {
  console.log(`${name}'s name has ${name.length} letters in it.`);
  } catch {
  console.log('Something went wrong');
  }
});
