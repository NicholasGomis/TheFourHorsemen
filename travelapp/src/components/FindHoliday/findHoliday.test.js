import { render, screen, fireEvent } from "@testing-library/react";
import FindHoliday from "./findHoliday.js";


describe("X", () => {
    //  TODO: Need to figure out how to pass a handleClick into component at render
    it("should change text when button is pressed", () => {
        render(<FindHoliday />);
        const buttonElement = screen.getByRole("button");
        fireEvent.click(buttonElement);
        const buttonElementAfter = screen.getByRole("button");
        console.log(buttonElementAfter);
    });
});
