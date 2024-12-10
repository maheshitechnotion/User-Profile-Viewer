import { renderHook, act } from "@testing-library/react-hooks";
import { useFetchUser } from "../hooks/useFetchUser";

test("should fetch a random user", async () => {
  const { result } = renderHook(() => useFetchUser());

  expect(result.current.loading).toBe(false);

  await act(async () => {
    result.current.getUser();
  });

  expect(result.current.user).not.toBeNull();
  expect(result.current.error).toBeNull();
});
