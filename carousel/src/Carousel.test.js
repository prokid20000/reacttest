import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";

it("works when you click on the right arrow", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
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

  //move backward in the carousel
  const leftArrow = container.querySelector(".fa-chevron-circle-left");
  fireEvent.click(leftArrow);

  //expect the first image to show, but not the third
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 3"]')
  ).not.toBeInTheDocument();
});


it("renders without crashing", function () {
  // this is a low-value test, but better than nothing
  render(<Carousel photos= {[{
    src: "https://ac-p.namu.la/20211130s1/31564bce9a769354f0f0131198b7217549092d464ae5b117aa26935d55dec7fe.png?type=orig",
    caption: "Photo by Richard Pasquarella on Unsplash"
  }]} title= "paimon" />);
});

