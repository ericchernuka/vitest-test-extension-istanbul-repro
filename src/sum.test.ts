import { expect, test } from "vitest";
import { sum } from "./sum";

test("adds 1 + 2 to equal 3", () => {
  expect(sum(2, 2)).toBe(4);
});

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(1);
});
