import { get, remove, set } from "./index";
describe("LocalStorage functions", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  describe("get()", () => {
    test("returns null when the key is not found", () => {
      const item = get("non-existent-key");
      expect(item).toBeNull();
    });

    test("returns the correct item when the key is found", () => {
      const key = "test-key";
      const value = { foo: "bar" };
      set(key, value);

      const item = get(key);
      expect(item).toEqual(value);
    });

    test("parses JSON strings correctly", () => {
      const key = "test-key";
      const value = { foo: "bar" };
      window.localStorage.setItem(key, JSON.stringify(value));

      const item = get(key);
      expect(item).toEqual(value);
    });
  });

  describe("set()", () => {
    test("sets the correct value for a given key", () => {
      const key = "test-key";
      const value = { foo: "bar" };
      set(key, value);

      const item = window.localStorage.getItem(key);
      expect(item).toEqual(JSON.stringify(value));
    });
  });

  describe("remove()", () => {
    test("removes the correct item for a given key", () => {
      const key = "test-key";
      const value = { foo: "bar" };
      set(key, value);

      remove(key);

      const item = window.localStorage.getItem(key);
      expect(item).toBeNull();
    });
  });
});
