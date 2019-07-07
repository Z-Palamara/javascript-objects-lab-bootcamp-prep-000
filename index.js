var recipes = {
  Smoothie : 'Fruit, Milk, Peanut Butter'
};

function updateObjectWithKeyAndValue(object, key, value) {
 return Object.assign({}, recipes , {Dinner:'Chik-Fil-A'});
}

