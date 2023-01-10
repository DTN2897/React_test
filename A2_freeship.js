function freeShipping(order) {
  let isFree = false;
  let quantity = 0;

  if (order) {
    for (good in order) {
      quantity += order[good];
    }
    if (quantity > 50) {
      isFree = true;
    }
  }
  console.log(isFree);
}

freeShipping({ Shampoo: 5.99, "Rubber Ducks": 15.99 });
freeShipping({ "Flatscreen TV": 399.99 });
freeShipping({ Monopoly: 11.99, "Secret Hitler": 35.99, Bananagrams: 13.99 });
freeShipping({ 1: 2.3, 2: 35.4, 3: 42.2 });
