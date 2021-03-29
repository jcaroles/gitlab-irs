import React from "react";
import { mount } from "enzyme";
import moxios from "moxios";

import Root from '../Root'
import App from '../components/App'

//to make an integration test, put test everything in 1 go

beforeEach(() => {
  moxios.install(); //1. turn off any request from axios
  moxios.stubRequest("https://gitlab.com/api/v4/projects/25491376", {
    status: 200,
    response: [{ message: "fetch1", id: "123"}],
  }); 
});

afterEach(() => {
  moxios.uninstall(); 
});

it("fetch a list and display them", (done) => {
  //attempt to render the entire app
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );

  
  wrapped.find(".fetch-request").simulate("keypress", {key: 'Enter'});

  
  moxios.wait(() => {
    wrapped.update();
    expect(wrapped.find(".content")).toBeTruthy(); 
    done();
    wrapped.unmount();
  });
});
