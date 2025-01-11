
const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

export default function ShoppingList() {
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}
  


function darkMode() {
    const darkModeButton = document.getElementById("dark-mode");
    document.body.classList.toggle("dark-mode");

    if (darkModeButton.innerText === "🌞") {
        darkModeButton.innerText = "🌛";
    } else if (darkModeButton.innerText === "🌛") {
        darkModeButton.innerText = "🌞";
    }
}

window.onload = function() {
    const darkModeButton = document.getElementById("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        darkModeButton.innerText = "🌛";
    } else {
        darkModeButton.innerText = "🌞";
    }
};






