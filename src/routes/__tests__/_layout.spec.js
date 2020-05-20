import { render } from "@testing-library/svelte";
import Layout from "../_layout.svelte";

describe("Layout component", () => {
  test("should render component correctly", () => {
    const { container } = render(Layout, {
      segment: "home",
      posts: ["aaa", "bbb"],
    });

    expect(container).toMatchSnapshot();
  });
});
