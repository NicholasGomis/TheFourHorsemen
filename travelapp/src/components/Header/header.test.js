import { getByText, render, screen } from "@testing-library/react";
import Header from "./header.js";

describe("Testing the Header component", () => {
    // render(<Header />);
    // const titleElement = screen.getByText("Help! Find Me A Holiday");
    // console.log(titleElement);

    it("should have an h1 tag", () => {
        render(<Header />);
        const titleElement = screen.getByRole(
            "heading",
            "Help! Find Me A Holiday"
        );
        expect(titleElement.tagName).toEqual("H1");
    });

    it("should have 'Help! Find Me A Holiday' as the title", () => {
        render(<Header />);
        const titleElement = screen.getByText("Help! Find Me A Holiday");
        expect(titleElement).toBeInTheDocument();
    });
    
    it("should have F4 in teamIcon", () => {
        render(<Header />);
        const titleElement = screen.getByText("F4");
        expect(titleElement).toBeInTheDocument();
    });
});
