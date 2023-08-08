import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchInp from "./SearchInp";

describe("SearchInp", () => {
  test("renders the search input field", () => {
    render(<SearchInp />);
    const searchInput = screen.getByLabelText("Search Products");
    expect(searchInput).toBeInTheDocument();
  });

  test("filters products based on search input", () => {
    render(<SearchInp />);
    const searchInput = screen.getByLabelText("Search Products");

    fireEvent.change(searchInput, { target: { value: "Apple" } });
    expect(searchInput.value).toBe('Apple');

    fireEvent.change(searchInput, { target: { value: "banana" } });
    const noFilteredProduct = screen.queryByText("Apple");
    expect(noFilteredProduct).toBeNull();
  });

  test("calculates and displays the total revenue", () => {
    render(<SearchInp />);
    const totalRevenue = screen.getByText("Total Revenue:");
    expect(totalRevenue).toBeInTheDocument();
  });
});
