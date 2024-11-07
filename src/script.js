import { add, greet, multiply, createProductObject, updateLocalStorage } from "../utils/utils.js";

function loadGreet(name) {
  const doomGreet = document.getElementById("greeting");
  doomGreet.innerHTML = greet(name);
}

loadGreet("Vlad");

function clearAllProducts() {
    localStorage.removeItem("products");
    updateProductTable();
}

function addProduct(event) {
    event.preventDefault();

    const productName = document.getElementById("productName").value;
    const unitPrice = document.getElementById("unitPrice").value;
    const totalProducts = document.getElementById("totalProducts").value;

    const totalPrice = multiply(unitPrice, totalProducts);

    const product = createProductObject(
      productName,
      unitPrice,
      totalProducts,
      totalPrice
    );

    let lsProducts = JSON.parse(localStorage.getItem("products")) || [];
    lsProducts.push(product);
    updateLocalStorage(lsProducts)

    updateProductTable()

    document.getElementById("productForm").reset();
  }

  function updateProductTable() {
    const productTableBody = document.querySelector('#productTable tbody')
    productTableBody.innerHTML = "";

    const products = JSON.parse(localStorage.getItem("products")) || []

    products.forEach((product) => {
        const row = document.createElement('tr')

        Object.values(product).forEach((value) => {
            const cell = document.createElement('td')
            cell.textContent = value
            row.appendChild(cell)
        })

        productTableBody.appendChild(row)
    })
    calculateTotalPriceOfProducts()
  }

  function calculateTotalPriceOfProducts() {
    const products = JSON.parse(localStorage.getItem("products")) || [];
    const domTotalPriceProducts = document.querySelector(
      ".total-price-of-products-wrapper .price"
    );
    let totalPrice = 0;
    for (let i = 0; i < products.length; i++) {
      totalPrice = add(totalPrice, products[i].totalPrice)
    }
    domTotalPriceProducts.innerHTML = totalPrice;
  }

document.getElementById("clearAll").addEventListener("click", clearAllProducts);
document.getElementById("productForm").addEventListener("submit", addProduct);

updateProductTable();
