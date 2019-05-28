var languages = ['JavaScript', 'Ruby', 'Python'];
console.log(languages);         // ['JavaScript', 'Ruby', 'Python']
console.log(languages.length);  // 3

languages.length = 4;           // add an empty item to the end of the array
console.log(languages);         // ['JavaScript', 'Ruby', 'Python', <1 empty item>]
console.log(languages.length);  // 4

languages.length = 1;           // discard last 3 elements
console.log(languages);         // ['JavaScript']
console.log(languages.length);  // 1

languages.length = 3;           // add 2 empty items to the end
console.log(languages);         // ['JavaScript', <2 empty items>]
console.log(languages.length);  // 3

languages.length = 1;
languages[2] = 'Python';        // ['JavaScript', <1 empty items>, 'Python']
console.log(languages);
console.log(languages[1]);      // undefined
console.log(languages.length);  // 3
