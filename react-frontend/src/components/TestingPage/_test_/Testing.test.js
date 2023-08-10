// Import the required libraries and functions for testing
import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { BrowserRouter as Router } from "react-router-dom";

// Import the component to be tested
import Testing from "./testing";

// Import the reducer (replace with your actual reducer if available)
import rootReducer from "./reducers"; // Replace this with the actual path to your reducer file.

// Create a mock store with the necessary middleware
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(rootReducer);

// Test the component
test("renders testing component with example API URLs", () => {
  // Render the component within the mock store and router
  const { getByText } = render(
    <Provider store={store}>
      <Router>
        <Testing />
      </Router>
    </Provider>
  );

  // Test the presence of specific text content
  const apiText = getByText("REST API Ready");
  expect(apiText).toBeInTheDocument();

  // Test the presence of example API URLs
  expect(
    getByText("POST http://localhost:3030/authentication")
  ).toBeInTheDocument();

  expect(
    getByText("GET => GET http://localhost:3030/users/<userId>")
  ).toBeInTheDocument();

  expect(
    getByText(
      'CREATE => POST http://localhost:3030/users { "email": "example2@email.com", "password": "456789" }'
    )
  ).toBeInTheDocument();

  expect(
    getByText(
      'PATCH => PATCH http://localhost:3030/users/<userId> { "name": "Thomas Smith" }'
    )
  ).toBeInTheDocument();

  expect(
    getByText("DELETE => DELETE http://localhost:3030/users/<userId>")
  ).toBeInTheDocument();
});
