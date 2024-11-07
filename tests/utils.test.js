import {
  add,
  greet,
  multiply,
  fetchData,
  createProductObject,
  increment,
  reset,
} from "../utils/utils";

describe("Utils functions", () => {
  test("should greet the user with it's name", () => {
    expect(greet("Alice")).toMatch("Hello, Alice");
    expect(greet("Alice")).toBeTruthy();
    expect(greet("Alice")).not.toBeFalsy();
    expect(greet("Alice")).not.toBeNull();
    expect(greet("Alice")).not.toBeUndefined();
  });

  test("should add two numbers corectly", () => {
    expect(add(10, 15)).toBe(25);
    expect(add("10", "15")).toBe(25);
    expect(add(-10, -15)).toBe(25);

    expect(add(-10, -15)).toBeGreaterThan(0);
    expect(add(-10, -15)).toBeGreaterThanOrEqual(25);
    expect(add(-10, -15)).toBeLessThan(30);
    expect(add(-10, -15)).toBeLessThanOrEqual(30);
  });

  test("Should multiply two numbers corectly", () => {
    expect(multiply(2, 3)).toBe(6);
    expect(multiply(2, 0)).toBe(0);
  });

  test("should create a product object", () => {
    const mockProduct = {
      productName: "ciocolata",
      unitPrice: 10,
      totalProducts: 50,
      totalPrice: 500,
    };
    expect(createProductObject("ciocolata", "10", -50, -500)).toEqual(
      mockProduct
    );
  });
});

describe("Custom tests", () => {
  const shoppingList = ["zahar", "faina", "ulei", "alune", "lapte"];

  test("The shopping list has lapte on it", () => {
    expect(shoppingList).toContain("lapte");
  });

  test("fetchData returns data has recieved (using await)", async () => {
    const data = await fetchData();
    expect(data).toBe("Data has recieved");
  });
});

describe("Hooks", () => {
  
    beforeEach(() => {
      // Reset the counter before each test
      reset();
    });
  
    afterEach(() => {
      // Log the counter value after each test (or perform any necessary cleanup)
      console.log(`Counter after test: ${reset()}`);
    });
  
    test("should start counter at 1 after first increment", () => {
      expect(increment()).toBe(1);
    });
  
    test("should increment counter to 2", () => {
      increment(); // counter becomes 1
      expect(increment()).toBe(2); // counter becomes 2
    });
  });
