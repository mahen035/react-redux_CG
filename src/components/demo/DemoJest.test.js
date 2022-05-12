import { render, screen } from "@testing-library/react";
import React from "react";
import DemoJest from "./DemoJest";

test.skip('render h1 element', ()=>{
    render(<DemoJest/>)
    screen.debug();
    expect(screen.getByTestId('demo1')).toBeInTheDocument();
});