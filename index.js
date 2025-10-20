import React from "react";
// Import createRoot from 'react-dom/client' for React 18+
import { createRoot } from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName:
      "https://github.com/jonasschmedtmann/ultimate-react-course/blob/main/03-pizza-menu/starter/pizzas/focaccia.jpg?raw=true",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName:
      "https://github.com/jonasschmedtmann/ultimate-react-course/blob/main/03-pizza-menu/starter/pizzas/margherita.jpg?raw=true",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName:
      "https://github.com/jonasschmedtmann/ultimate-react-course/blob/main/03-pizza-menu/starter/pizzas/spinaci.jpg?raw=true",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName:
      "https://github.com/jonasschmedtmann/ultimate-react-course/blob/main/03-pizza-menu/starter/pizzas/funghi.jpg?raw=true",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName:
      "https://github.com/jonasschmedtmann/ultimate-react-course/blob/main/03-pizza-menu/starter/pizzas/salamino.jpg?raw=true",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName:
      "https://github.com/jonasschmedtmann/ultimate-react-course/blob/main/03-pizza-menu/starter/pizzas/prosciutto.jpg?raw=true",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  const style = { color: "red", fontSize: "50px", textTransform: "upperCase" };
  return (
    <header className="header">
      <h1 style={style}> Fast React Pizza Company Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian Cuisine,6 creative dishes to choose from. All from
            our stone oven,all organic,all delicious
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We are still working on our Menu,please come back later</p>
      )}
    </main>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  // if (hour >= openHour && hour <= closeHour) alert("We are Currently open");
  // else alert("We are closed");

  // if (!isOpen) return <p>Close</p>;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHours={closeHour} openHours={openHour} />
      ) : (
        <p>
          We are you happy to welcome you between {openHour}:00 and {closeHour}
          :00
        </p>
      )}
    </footer>
  );
  // return React.createElement("footer", null, "We are currently open");
  function Order({ closeHours, openHours }) {
    return (
      <div className="order">
        <p>
          We are Open from {openHours} until {closeHours}:00. Come visit us
          online
        </p>
        <button className="btn">Order</button>
      </div>
    );
  }
}
function Pizza({ pizzaObj }) {
  console.log(pizzaObj);

  // if (pizzaObj.soldOut) return null;

  return (
    <li className={'pizza ${pizzaObject.soldout?"sold out":""}'}>
      <img src={pizzaObj.photoName} alt="Pizza" />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

// 1. Get the root DOM element
const container = document.getElementById("root");

// 2. Create the root object
const root = createRoot(container);

// 3. Render the application using the new root object
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
