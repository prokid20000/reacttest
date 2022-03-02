import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";

//smoke test
it("renders without crashing", function () {
  // this is a low-value test, but better than nothing
  render(<Card  caption="Photo by Richard Pasquarella on Unsplash"
    src= "image1"
    currNum= "0"
    totalNum= "3" />);
});

it("snaptest for Card", function() {
  const { container } = render(
    <Card 
      caption="Photo by Richard Pasquarella on Unsplash"
      src= "image1"
      currNum= "0"
      totalNum= "3"
    />
  );

  //snapshot
  expect(container).toMatchSnapshot();
});