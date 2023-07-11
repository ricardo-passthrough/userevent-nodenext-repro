import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

test("user event", async () => {
  // @ts-expect-error
  const user: ReturnType<typeof userEvent.default.setup> = userEvent.setup();

  const handleClick = jest.fn();
  render(<button onClick={handleClick}>Click me!</button>);
  await user.click(screen.getByRole("button"));

  expect(handleClick).toBeCalled();
});
