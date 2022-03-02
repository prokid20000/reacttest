import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";


//smoke test
it("renders without crashing", function () {
  // this is a low-value test, but better than nothing
  render(<Carousel photos= {[{
    src: "www.google.com",
    caption: "Photo by Richard Pasquarella on Unsplash"
  }]} title= "paimon" />);
});

//testing on left arrow
it("works when you click on the right arrow", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );

  //snapshot
  expect(container).toMatchSnapshot();

  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".fa-chevron-circle-right");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();

});

//testing on right arrow
it("works when you click on the left arrow", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );

  const rightArrow = container.querySelector(".fa-chevron-circle-right");
  // move forward in the carousel
  fireEvent.click(rightArrow);

  const leftArrow = container.querySelector(".fa-chevron-circle-left");
  //move backward in the carousel
  fireEvent.click(leftArrow);

  //expect the first image to show, but not the third
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 3"]')
  ).not.toBeInTheDocument();
});

it("hide left arrow when on the first image", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );

  const rightArrow = container.querySelector(".fa-chevron-circle-right");

  const leftArrow = container.querySelector(".fa-chevron-circle-left");

  expect(leftArrow).toHaveClass("hidden");
  expect(rightArrow).not.toHaveClass("hidden");
});

it("hide right arrow when on the last image", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );

  const rightArrow = container.querySelector(".fa-chevron-circle-right");

  const leftArrow = container.querySelector(".fa-chevron-circle-left");

  // move forward in the carousel
  fireEvent.click(rightArrow);
  fireEvent.click(rightArrow);

  expect(leftArrow).not.toHaveClass("hidden");
  expect(rightArrow).toHaveClass("hidden");
});

