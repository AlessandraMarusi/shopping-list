const tiramisu = [
  {
    name: "uova",
    quantity: "2",
  },
  {
    name: "pavesini",
    quantity: "4",
  },
  {
    name: "mascarpone",
    quantity: "400gr",
  },
];

const carbonara = [
  {
    name: "uova",
    quantity: "2",
  },
  {
    name: "pasta",
    quantity: "100gr",
  },
  {
    name: "guanciale",
    quantity: "200gr",
  },
];

const prova = {};

const recipes = [
  {
    name: "tiramisu",
    ingredients: [
      {
        name: "uova",
        quantity: "2",
      },
      {
        name: "pavesini",
        quantity: "4",
      },
      {
        name: "mascarpone",
        quantity: "400gr",
      },
    ],
  },
  {
    name: "carbonata",
    ingredients: [
      {
        name: "uova",
        quantity: "2",
      },
      {
        name: "pasta",
        quantity: "100gr",
      },
      {
        name: "guanciale",
        quantity: "200gr",
      },
    ],
  },
];

// Array.prototype.push.apply(tiramisu, carbonara);
// console.log(tiramisu);

// const recipes = () => [{ tiramisu }, { carbonara }];
// console.log(recipes);
// const exportRecipes = JSON.stringify(recipes);

export default recipes;
