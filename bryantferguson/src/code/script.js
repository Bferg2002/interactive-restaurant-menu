console.log("JavaScript is connected!");

const buttons = document.querySelectorAll(".menu-btn");
const menuTitle = document.querySelector("#menu-title");
const menuDisplay = document.querySelector("#menu-display");

console.log(buttons);
console.log(menuTitle);
console.log(menuDisplay);

const menuData = {
  vodka: [
    { name: "Irish Coffee", description: "Whiskey, coffee, sugar, and cream", price: "$9" },
    { name: "Mimosa", description: "Champagne and orange juice", price: "$8" },
    { name: "Bloody Mary", description: "Vodka, tomato juice, and spices", price: "$9" }
  ],
  whiskey: [
    { name: "Whiskey Sour", description: "Whiskey, lemon juice, and sugar", price: "$10" },
    { name: "Old Fashioned", description: "Whiskey, bitters, sugar, and orange", price: "$12" },
    { name: "Manhattan", description: "Whiskey, sweet vermouth, and bitters", price: "$12" }
  ],
  rum: [
    { name: "Bellini", description: "Prosecco and peach purée", price: "$9" },
    { name: "Aperol Spritz", description: "Aperol, prosecco, and soda", price: "$10" },
    { name: "Screwdriver", description: "Vodka and orange juice", price: "$8" }
  ],
  tequila: [
    { name: "Negroni", description: "Gin, Campari, and sweet vermouth", price: "$12" },
    { name: "Martini", description: "Gin or vodka with dry vermouth", price: "$11" },
    { name: "Boulevardier", description: "Whiskey, Campari, and sweet vermouth", price: "$12" }
  ], 
  gin: [
  { name: "Gin & Tonic", description: "Gin with tonic water and lime", price: "$9" },
  { name: "Tom Collins", description: "Gin, lemon juice, sugar, and soda", price: "$10" },
  { name: "Negroni", description: "Gin, Campari, and sweet vermouth", price: "$12" }
],
brandy: [
  { name: "Sidecar", description: "Brandy, orange liqueur, and lemon juice", price: "$11" },
  { name: "Brandy Alexander", description: "Brandy, cream, and chocolate liqueur", price: "$12" },
  { name: "French Connection", description: "Brandy and amaretto", price: "$11" }
]
};


function displayMenu(category) {
  menuDisplay.innerHTML = "";

  const categoryTitles = {
    vodka: "Vodka",
    whiskey: "Whiskey",
    rum: "Rum",
    tequila: "Tequila",
    gin: "Gin",
    brandy: "Brandy"
  };

  menuTitle.textContent = categoryTitles[category];

  menuData[category].forEach(item => {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    menuItem.innerHTML = `
      <h3>${item.name}</h3>
      <p>${item.description}</p>
      <p class="price">${item.price}</p>
    `;

    menuDisplay.appendChild(menuItem);
  });
}
displayMenu("vodka");

buttons.forEach(button => {
  button.addEventListener("click", function () {
    buttons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const selectedCategory = button.dataset.category;
    displayMenu(selectedCategory);
  });
});
