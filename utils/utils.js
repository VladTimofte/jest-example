export function add(a, b) {
    return Math.abs(a) + Math.abs(b);
}

export function multiply(a, b) {
    return Math.abs(a) * Math.abs(b)
}

export function greet(name) {
    return `Hello, ${name}`
}

export function updateLocalStorage(data) {
    localStorage.setItem("products", JSON.stringify(data))
}

export function createProductObject(
    productName,
    unitPrice,
    totalProducts,
    totalPrice
) {
    return {
    productName: productName,
    unitPrice: Math.abs(unitPrice),
    totalProducts: Math.abs(totalProducts),
    totalPrice: Math.abs(totalPrice)
    }
}

export function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Data has recieved')
        }, 3000)
    })
}


let counter = 0;

export function increment() {
  counter++;
  return counter;
}

export function reset() {
  counter = 0;
  return counter;
}