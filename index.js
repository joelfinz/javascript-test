console.log("Array Functions examples");
console.log("Hello world");

const catArray = [
  {
    id: 24274,
    name: "CAT0",
    items: [
      { id: 5354, name: "ITEM00", price: 100 },
      { id: 5355, name: "ITEM01", price: 100 },
      { id: 5356, name: "ITEM02", price: 100 },
      { id: 5357, name: "ITEM03", price: 100 }
    ]
  },
  {
    id: 23274,
    name: "CAT1",
    items: [
      { id: 5358, name: "ITEM10", price: 100 },
      { id: 5359, name: "ITEM11", price: 100 },
      { id: 5360, name: "ITEM12", price: 100 },
      { id: 5361, name: "ITEM13", price: 100 }
    ]
  },
  {
    id: 24344,
    name: "CAT2",
    items: [
      { id: 5362, name: "ITEM20", price: 100 },
      { id: 5363, name: "ITEM21", price: 100 },
      { id: 5364, name: "ITEM22", price: 100 },
      { id: 5365, name: "ITEM23", price: 100 }
    ]
  },
  {
    id: 22344,
    name: "CAT3",
    items: [
      { id: 5366, name: "ITEM30", price: 100 },
      { id: 5367, name: "ITEM31", price: 100 },
      { id: 5368, name: "ITEM32", price: 100 },
      { id: 5369, name: "ITEM33", price: 100 }
    ]
  },
  {
    id: 24234,
    name: "CAT4",
    items: [
      { id: 5370, name: "ITEM40", price: 100 },
      { id: 5371, name: "ITEM41", price: 100 },
      { id: 5372, name: "ITEM42", price: 100 },
      { id: 5373, name: "ITEM43", price: 100 }
    ]
  },
  {
    id: 24235,
    name: "CAT5",
    items: [
      { id: 5374, name: "ITEM50", price: 100 },
      { id: 5375, name: "ITEM51", price: 100 },
      { id: 5376, name: "ITEM52", price: 100 },
      { id: 5377, name: "ITEM53", price: 100 }
    ]
  }
];

const cartCase1 = [
  { id: 5357, name: "ITEM03", price: 100 },
  { id: 5369, name: "ITEM33", price: 100 },
  { id: 5372, name: "ITEM42", price: 100 },
  { id: 5360, name: "ITEM12", price: 100 },
  { id: 5480, name: "UKNOWNITEM", price: 100 }
];

const cartCase2 = [
  { id: 5357, name: "ITEM03", price: 100 },
  { id: 5369, name: "ITEM33", price: 100 },
  { id: 5372, name: "ITEM42", price: 100 },
  { id: 5360, name: "ITEM12", price: 100 },
  { id: 5376, name: "ITEM52", price: 100 }
];

const coolArrayCheckingFunction = (menuItemArray, cartItemsArray) => {
  let filteredItems = [];
  cartItemsArray.map(cartItem => {
    return menuItemArray.filter(catItem => {
      return catItem.items.some(menuItem => {
        if (menuItem.id === cartItem.id) {
          console.log("crewmate", cartItem);
          filteredItems.push(cartItem);
          return filteredItems;
        } else return false;
      });
    });
  });
  console.log("Filter Array: ", filteredItems);
  console.log("Filter Array length: ", filteredItems.length);
  console.log("Cart Array: ", cartItemsArray);
  console.log("Cart Array length: ", cartItemsArray.length);
  // console.log(
  //   filteredItems.length === cartItemsArray.length ? "EQUAL" : "NOT EQUAL"
  // );
  return filteredItems.length === cartItemsArray.length;
};

// cartCase1
// cartCase2
console.log(coolArrayCheckingFunction(catArray, cartCase1));
