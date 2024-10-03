import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render Header component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //Querying
  //   const loginBtn = screen.getByRole("button");
  const loginBtn = screen.getByRole("button", { name: "Login" });

  //Assertion
  expect(loginBtn).toBeInTheDocument();
});
it("Should render Header component with a CartItems 0", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //Querying
  const cartItems = screen.getByText("Cart - (0 items)");

  //Assertion
  expect(cartItems).toBeInTheDocument();
});
it("Should render Header component with a Cart", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //Querying
  const cartItems = screen.getByText(/Cart/);

  //Assertion
  expect(cartItems).toBeInTheDocument();
});
it("Should change Login button to Logout onClick", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //Querying
  const loginButton = screen.getByRole("button", { name: "Login" });
  fireEvent.click(loginButton);
  const logoutButton = screen.getByRole("button", { name: "Logout" });

  //Assertion
  expect(logoutButton).toBeInTheDocument();
});
