import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
  test("status from props should be in the state ", () => {
    const component = create(<ProfileStatus status="shut the fuck up" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("shut the fuck up");
  });
  test("input should not be displayed", () => {
    const component = create(<ProfileStatus status="shut the fuck up" />);
    const root = component.root;
    expect(() => {
      const input = root.findByType("input");
    }).toThrow();
  });
  test("input should not be displayed", () => {
    const component = create(<ProfileStatus status="shut the fuck up" />);
    const root = component.root;
    const span = root.findByType("span");
    expect(span.children[0]).toBe("shut the fuck up");
  });
  test("callback should be called", () => {
    const mockCallback = jest.fn();
    const component = create(
      <ProfileStatus status="shut the fuck up" updateStatus={mockCallback} />
    );
    const instance = component.getInstance();
    instance.deactivateEditMode();
    expect(mockCallback.mock.calls.length).toBe(1);
  });
});
