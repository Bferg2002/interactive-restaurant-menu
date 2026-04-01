console.log("JavaScript is connected!");

const buttons = document.querySelectorAll(".menu-btn");
const menuTitle = document.querySelector("#menu-title");
const menuDisplay = document.querySelector("#menu-display");

console.log(buttons);
console.log(menuTitle);
console.log(menuDisplay);

const menuData = {
  breakfast: [
    {
      name: "Pancake Stack",
      description: "Fluffy pancakes served with maple syrup",
      price: "$8"
    },
    {
      name: "Egg & Cheese Sandwich",
      description: "Scrambled eggs and cheese on a toasted roll",
      price: "$7"
    },
    {
      name: "Fruit Bowl",
      description: "Fresh seasonal fruit served chilled",
      price: "$6"
    }
  ],
  lunch: [
    {
      name: "Classic Burger",
      description: "Beef burger with fries",
      price: "$12"
    },
    {
      name: "Chicken Caesar Wrap",
      description: "Grilled chicken, romaine, and Caesar dressing",
      price: "$11"
    },
    {
      name: "Tomato Soup",
      description: "Warm tomato soup with herbs",
      price: "$7"
    }
  ],
  brunch: [
    {
      name: "Chicken & Waffles",
      description: "Crispy chicken with Belgian waffles",
      price: "$14"
    },
    {
      name: "Avocado Toast",
      description: "Toasted bread topped with avocado and eggs",
      price: "$10"
    },
    {
      name: "Brunch Mimosa",
      description: "Sparkling brunch favorite",
      price: "$9"
    }
  ],
  dinner: [
    {
      name: "Grilled Salmon",
      description: "Salmon served with rice and vegetables",
      price: "$18"
    },
    {
      name: "Steak Pasta",
      description: "Sliced steak over creamy pasta",
      price: "$19"
    },
    {
      name: "Veggie Bowl",
      description: "Roasted vegetables over quinoa",
      price: "$15"
    }
  ],
  happyHour: [
    {
      name: "Mini Sliders",
      description: "Three mini burgers",
      price: "$6"
    },
    {
      name: "Loaded Fries",
      description: "Fries topped with cheese and bacon",
      price: "$7"
    },
    {
      name: "Mozzarella Sticks",
      description: "Crispy sticks with marinara sauce",
      price: "$6"
    }
  ],
  drinks: [
    {
      name: "Fresh Lemonade",
      description: "Cold lemonade made fresh daily",
      price: "$4"
    },
    {
      name: "Iced Coffee",
      description: "Cold brew coffee over ice",
      price: "$5"
    },
    {
      name: "Berry Smoothie",
      description: "Mixed berries blended with yogurt",
      price: "$6"
    }
  ]
};

function displayMenu(category) {
  menuDisplay.innerHTML = "";

  const categoryTitles = {
    breakfast: "Breakfast Menu",
    lunch: "Lunch Menu",
    brunch: "Brunch Menu",
    dinner: "Dinner Menu",
    happyHour: "Happy Hour Menu",
    drinks: "Drinks Menu"
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
displayMenu("breakfast");

buttons.forEach(button => {
  button.addEventListener("click", function () {
    buttons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const selectedCategory = button.dataset.category;
    displayMenu(selectedCategory);
  });
});
