import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Testing to see components being displayed", () => {
    it("renders learn react link", () => {
        render(<App />);
        // screen.debug();
        // const linkElement = screen.getByText(/learn react/i);
        // expect(linkElement).toBeInTheDocument();
    });
});
