export const makeApiUrl = (path: string): string =>
  `${process.env.API_URL}${path}?api_key=${process.env.API_KEY}`
