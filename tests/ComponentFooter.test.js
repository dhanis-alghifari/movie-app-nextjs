import { render } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import Footer from "../components/atom/Footer";

describe("Test if the Footer component is working as expected", () => {
    it("<Copyright /> matches snapshot", () => {
        const component = render(<Footer />);
        expect(component.container).toMatchSnapshot();
    });
});