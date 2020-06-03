import React from 'react';
import App from './App';
import { mount } from './react-testing-library-adapter';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe("The React App", () => {
  let _component, _header;

  beforeEach(() => {
    _component = mount(<App />);
    _header = _component.find(".App-header");
  });

  it("has a header", () => {
    expect(_header).toBeDefined();
  });

  describe('the header', () => {
    let image;
    
    beforeEach(() => {
      image = _header.find("img");
    });

    it('has an image', () => {
      expect(image.length).toEqual(1);
    });

    it("has a paragraph of instructional text", () => {
      let _text = _header.find("p").text();
      expect(_text).toEqual("Edit src/App.js and save to reload.Learn React");
    });
  });
});

