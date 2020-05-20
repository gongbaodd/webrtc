import { render } from "@testing-library/svelte";
import Index from "../index.svelte";

describe("index component", () => {
  test("should render component correctly", () => {
    const { container } = render(Index);

    expect(container).toMatchSnapshot();
  });
});
