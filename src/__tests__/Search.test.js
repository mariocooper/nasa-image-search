import React from "react";
import { render, screen } from "@testing-library/react";
import Search from "../components/Search";

describe("Search", () => {
    const { asFragment } = render(<Search />);

    it("renders correctly", () => {
        expect(asFragment()).toMatchSnapshot();
        });

    it("renders a search box", () => {
        render(< Search />);
        expect(screen.getByRole("textbox")).toBeInTheDocument();
        });
});
