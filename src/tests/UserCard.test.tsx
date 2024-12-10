import { render, screen } from "@testing-library/react";
import UserCard from "../components/UserCard";

test("renders user card with correct information", () => {
  render(
    <UserCard
      name="John Doe"
      email="john.doe@example.com"
      picture="https://via.placeholder.com/150"
    />
  );

  expect(screen.getByText("John Doe")).toBeInTheDocument();
  expect(screen.getByText("john.doe@example.com")).toBeInTheDocument();
  expect(screen.getByAltText("John Doe")).toBeInTheDocument();
});
