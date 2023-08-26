import { customAlphabet } from 'nanoid';

// https://planetscale.com/blog/why-we-chose-nanoids-for-planetscales-api
export function generatePublicId() {
  const alphabet = '0123456789abcdefghijklmnopqrstuvwxyz';
  const length = 14;

  const nanoid = customAlphabet(alphabet, length);

  return nanoid();
}
