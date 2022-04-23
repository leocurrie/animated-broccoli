import { groupArrayElements } from '../src/elementGrouper';

// Tagged template tables are used here to define all the test inputs
// because each test is doing exactly the same thing, just with different data

describe('elementGrouper', () => {
  /**
   * Input validation tests -
   * Expect an error to be thrown for the following input values
   */
  describe.each`
    description                       | sourceArray  | numGroups
    ${'source array is null'}         | ${null}      | ${1}
    ${'source array is not an array'} | ${'foo'}     | ${10}
    ${'group size == 0'}              | ${[1, 2, 3]} | ${0}
    ${'group size < 0'}               | ${[1, 2, 3]} | ${-2}
    ${'group size is not an integer'} | ${[1, 2, 3]} | ${3.14}
  `('Input validation', ({ description, sourceArray, numGroups }) => {
    it(`Throws error when ${description}`, () => {
      expect(() => {
        groupArrayElements(sourceArray, numGroups);
      }).toThrowError();
    });
  });

  /**
   * Logic tests
   */
  describe.each`
    description                            | sourceArray        | numGroups | expected
    ${'Source array splits evenly'}        | ${[1, 2, 3, 4]}    | ${2}      | ${[[1, 2], [3, 4]]}
    ${"Source array doesn't split evenly"} | ${[1, 2, 3, 4, 5]} | ${3}      | ${[[1, 2], [3, 4], [5]]}
    ${'Group size == 1'}                   | ${[1, 2, 3, 4, 5]} | ${1}      | ${[[1, 2, 3, 4, 5]]}
    ${'Group size > source array length'}  | ${[1, 2, 3]}       | ${4}      | ${[[1], [2], [3], []]}
    ${'Empty source array'}                | ${[]}              | ${3}      | ${[[], [], []]}
  `('Logic', ({ description, sourceArray, numGroups, expected }) => {
    it(description, () => {
      expect(groupArrayElements(sourceArray, numGroups)).toEqual(expected);
    });
  });
});
