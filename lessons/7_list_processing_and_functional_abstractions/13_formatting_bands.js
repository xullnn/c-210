var bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

// with side effects
// function processBands(data) {
//   data.forEach(brand => {
//     brand.name = brand.name.replace(/\.+/g, '');
//     brand.name = brand.name.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
//     brand.country = 'Canada';
//   })
//
//   return data;
// }

// without side effects

function processBands(data) {
  return data.map(brand => {
    brand.name = brand.name.replace(/\.+/g, '');
    brand.name = brand.name.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
    brand.country = 'Canada';

    return {
      name: brand.name,
      country: brand.country,
      active: brand.active,
    }
  })
}

processBands(bands);

// should return:
// [
//   { name: 'Sunset Rubdown', country: 'Canada', active: false },
//   { name: 'Women', country: 'Canada', active: false },
//   { name: 'A Silver Mt Zion', country: 'Canada', active: true },
// ]


// use forEach to iterate through the array
//   - for each obj perform
//   - remove dot from 'name' property
//     - str.replace(/\.+/g, '')
//   - capitalize 'name' property
//     - split name by empty space
//     - map through words
//       - return word[0] + word.slice(1)
//     - join back words by 1 empty space
//   - change country to 'Canada'
//
// return processed array
