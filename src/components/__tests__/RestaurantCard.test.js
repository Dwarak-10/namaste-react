import { render, screen } from "@testing-library/react";
import RestaurandCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("Should render RestaurantCard data with props data", () => {
  render(<RestaurandCard resData={MOCK_DATA} />);

  const name = screen.getByText("Pizza Hut");

  expect(name).toBeInTheDocument();
});
it("Should render RestaurantCard comoponent with veg label", () => {});
