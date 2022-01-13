import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";
import { Priority, observable } from "../Api";

test("renders learn react link", () => {
  const comp = render(<App />);
  expect(comp).toBeTruthy();
});

test("message priority should be defined", () => {
  const message = {
    message: "something",
    priority: Priority.Error,
  };

  expect(message.priority).toBeDefined();
});

test("priority error Should Be 0", () => {
  const message = {
    message: "something",
    priority: Priority.Error,
  };

  expect(message.priority).toBe(0);
});

test("priority warning Should Be 1", () => {
  const message = {
    message: "something",
    priority: Priority.Warn,
  };

  expect(message.priority).toBe(1);
});

test("Observable should be defined", () => {
  expect(observable).toBeTruthy();
});
