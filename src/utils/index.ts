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
