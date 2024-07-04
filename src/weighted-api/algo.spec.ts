import { getRankingDistribution } from './algo';
import { exportedForTesting } from './algo';

const { addHandicap, applyVariance, addMin, normalizer, calculateValue } =
  exportedForTesting;

describe('calculateValue', () => {
  test('returns 0 when rank is greater than total', () => {
    expect(calculateValue(11, 10)).toBe(0);
  });

  test('calculates correct value for middle rank', () => {
    const result = calculateValue(5, 10);
    expect(result).toBeCloseTo(0.2763, 4);
  });

  test('calculates correct value for first rank', () => {
    const result = calculateValue(1, 10);
    expect(result).toBeCloseTo(0.9816, 4);
  });

  test('calculates correct value for last rank', () => {
    const result = calculateValue(10, 10);
    expect(result).toBeCloseTo(0, 4);
  });

  test('returns 0 when calculation is negative', () => {
    const result = calculateValue(7, 5);
    expect(result).toBe(0);
  });
});

describe('normalizer', () => {
  test('normalizes an array of numbers', () => {
    const input = [1, 2, 3, 4];
    const expected = [0.1, 0.2, 0.3, 0.4];
    expect(normalizer(input)).toEqual(expected);
  });

  test('normalizes an array of non-integer numbers', () => {
    const input = [2.5, 3.7, 1.2, 8.1, 4.3, 0.8, 5.4, 1.9];
    const expected = [
      0.0896, 0.1326, 0.043, 0.2903, 0.1541, 0.0287, 0.1935, 0.0681,
    ];
    input.forEach((_, index, self) => {
      expect(normalizer(self)[index]).toBeCloseTo(expected[index], 4);
    });
  });

  test('handles array with zero sum', () => {
    const input = [0, 0, 0];
    expect(normalizer(input)).toEqual([NaN, NaN, NaN]);
  });

  test('handles empty array', () => {
    expect(normalizer([])).toEqual([]);
  });
});

describe('addMin', () => {
  test('replaces values below minimum with minimum', () => {
    const input = [0.01, 0.02, 0.03, 0.04];
    const min = 0.025;
    const expected = [0.025, 0.025, 0.03, 0.04];
    expect(addMin(input, min)).toEqual(expected);
  });

  test('does not change values above minimum', () => {
    const input = [0.03, 0.04, 0.05];
    const min = 0.02;
    expect(addMin(input, min)).toEqual(input);
  });

  test('handles empty array', () => {
    expect(addMin([], 0.01)).toEqual([]);
  });
});

describe('applyVariance', () => {
  test('applies variance correctly', () => {
    const result1 = applyVariance(0.1, 1, 10, 2);
    expect(result1).toBeCloseTo(0.0714, 4);

    const result2 = applyVariance(0.6534, 6, 10, 2);
    expect(result2).toBeCloseTo(0.2722, 4);
  });

  test('handles edge cases', () => {
    expect(() => applyVariance(1, 0, 10, 2)).toThrow();
    expect(applyVariance(0, 1, 10, 2)).toBe(0);
  });
});

describe('addHandicap', () => {
  test('applies handicap when length is greater than cutoff', () => {
    const input = [0.1, 0.2, 0.3, 0.4];
    const result = addHandicap(input, 3, 0.5, 3);
    const expected = [0.1167, 0.2333, 0.35, 0];
    expect(result.map((v) => Number(v.toFixed(4)))).toEqual(expected);
  });

  test('does not apply handicap when length is less than or equal to cutoff', () => {
    const input = [0.1, 0.2, 0.3];
    const result = addHandicap(input, 3, 0.5, 3);
    expect(result).toEqual(input);
  });

  test('sets values to 0 after filteredLength', () => {
    const input = [0.1, 0.2, 0.3, 0.4, 0.5];
    const result = addHandicap(input, 3, 0.5, 10);
    expect(result.slice(3)).toEqual([0, 0]);
  });

  test('h = 0 does not change the input', () => {
    const input = [0.1, 0.2, 0.3, 0.4, 0.5];
    const result = addHandicap(input, 5, 0, 3);
    expect(result).toEqual(input);
  });
});

describe('getRankingDistribution', () => {
  test('returns correct number of elements', () => {
    const result = getRankingDistribution(5, 10);
    expect(result).toHaveLength(5);
  });

  test('returns normalized values', () => {
    const result = getRankingDistribution(10, 10);
    const sum = result.reduce((acc, val) => (acc += val), 0);
    expect(sum).toBeCloseTo(1, 6);
  });

  test('returns < 1 values when filtered length is lower than total length and total length < cutoff', () => {
    const result = getRankingDistribution(6, 10);
    const sum = result.reduce((acc, val) => (acc += val), 0);
    expect(sum).toBeLessThan(1);
  });

  test('returns > 1 values when total length > cutoff', () => {
    const result = getRankingDistribution(20, 20);
    const sum = result.reduce((acc, val) => (acc += val), 0);
    expect(sum).toBeGreaterThan(1);
  });

  test('handles case where filteredLength equals totalLength', () => {
    const result = getRankingDistribution(10, 10);
    expect(result).toHaveLength(10);
    expect(result[4]).toBeCloseTo(0.0585);
  });

  test('handles small inputs', () => {
    const result = getRankingDistribution(2, 3);
    expect(result).toHaveLength(2);
    expect(result.every((v) => v >= 0 && v < 1)).toBe(true);
  });

  test('returns empty array when filteredLength is 0', () => {
    const result = getRankingDistribution(0, 5);
    expect(result).toEqual([]);
  });
});
