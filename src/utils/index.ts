import * as bcrypt from 'bcrypt';

export const generateRandomString = ({
  length,
  uppercase = true,
  lowercase = true,
  numerical = true,
  special = false,
}: {
  length: number;
  uppercase?: boolean;
  lowercase?: boolean;
  numerical?: boolean;
  special?: boolean;
}): string => {
  if (isNaN(length)) {
    throw new TypeError('Length must be a number');
  }
  if (length < 1) {
    throw new RangeError('Length must be at least 1');
  }

  let result = '';
  const lowerCaseAlphabet = 'abcdefghijklmnopqrstuvwxyz';
  const upperCaseAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numberCharacters = '0123456789';
  const specialCharacters = '!@#$%^&*()_-+=';
  let characters = '';
  if (uppercase) {
    characters += upperCaseAlphabet;
  }
  if (lowercase) {
    characters += lowerCaseAlphabet;
  }
  if (numerical) {
    characters += numberCharacters;
  }
  if (special) {
    characters += specialCharacters;
  }

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return result;
};

export const validateData = (
  data: string,
  hashedData: string,
): Promise<boolean> => {
  return bcrypt.compare(data, hashedData);
};

export const hashData = (data: string): Promise<string> => {
  return bcrypt.hash(data, 10);
};

export const getPairwiseCombinations = (ids: number[]) => {
  const combinations: number[][] = [];
  for (let i = 0; i < ids.length; i++) {
    for (let j = i + 1; j < ids.length; j++) {
      combinations.push([ids[i], ids[j]]);
    }
  }
  return combinations;
};

export const sortCombinations = (combinations: number[][], order: number[]) => {
  const getScore = (item: number) => order.findIndex((el) => el === item);

  const sorted = [...combinations];

  sorted.sort((c1, c2) => {
    const c1Score = getScore(c1[0]) + getScore(c1[1]);
    const c2Score = getScore(c2[0]) + getScore(c2[1]);

    return c1Score - c2Score;
  });

  return sorted;
};

export const sortProjectId = (
  project1Id: number,
  project2Id: number,
): [number, number] => {
  return project1Id > project2Id
    ? [project2Id, project1Id]
    : [project1Id, project2Id];
};

export const STAGING_API = 'pairwise.cupofjoy.store';
