import { render } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import Title from "../components/atom/Title";

describe("Test if the Title component is working as expected", () => {
    it("<Title /> matches snapshot", () => {
        const component = render(<Title />);
        expect(component.container).toMatchSnapshot();
    });
});