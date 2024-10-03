import { render, screen } from "@testing-library/react";
import ContactUs from "../ContactUs";
import "@testing-library/jest-dom";

describe("Contact us page Test Cases", () => {
  // beforeAll(() => {
  //   console.log("Before All");
  // });

  // beforeEach(() => {
  //   console.log("Before Each");
  // });
  // afterAll(() => {
  //   console.log("After All");
  // });

  // afterEach(() => {
  //   console.log("After Each");
  // });

  test("Should load contact us component", () => {
    render(<ContactUs />);

    const heading = screen.getByRole("heading");

    // Assertion
    expect(heading).toBeInTheDocument();
  });

  test("Should load button inside contact us component", () => {
    render(<ContactUs />);

    const button = screen.getByText("Submit");
    // Assertion
    expect(button).toBeInTheDocument();
  });

  test("Should load input inside contact us component", () => {
    render(<ContactUs />);

    const inputName = screen.getByPlaceholderText("name");
    // Assertion
    expect(inputName).toBeInTheDocument();
  });

  it("Should load 2 input boxes on the contact us component", () => {
    render(<ContactUs />);

    //Querying
    const inputBoxes = screen.getAllByRole("textbox");
    // console.log(inputBoxes);
    //Assertion
    expect(inputBoxes.length).toBe(2);
  });
});
