function doubleObjectValues(obj) {
  let resultObj = {};

  Object.keys(obj).forEach(key => resultObj[key] = obj[key] * 2);

  return resultObj;
}


doubleObjectValues({ a: 1, b: 2, c: 3 });        // { a: 2, b: 4, c: 6 }

// filter an object to select only values with even numbers

function keepEvenValues(obj) {
  let resultObj = {};

  Object.keys(obj).forEach(key => {
    if (obj[key] % 2 === 0) resultObj[key] = obj[key];
  })

  return resultObj;
}

keepEvenValues({ a: 1, b: 2, c: 3 });

// reduce an invoice object

function getTotalFromInvoice(obj) {
  return Object.values(obj).reduce((acc, e) => acc + e);
}


getTotalFromInvoice({ phone: 10000, internet: 8000, tax: 3000 });
// returns { total: 21000 }
