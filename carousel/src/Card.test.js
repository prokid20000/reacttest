import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";

it("renders without crashing", function () {
  // this is a low-value test, but better than nothing
  render(<Card  caption="Photo by Richard Pasquarella on Unsplash"
    src= "image1"
    currNum= "0"
    totalNum= "3" />);
});