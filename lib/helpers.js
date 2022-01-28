export function isProduction() {
  return process.env.NODE_ENV === "production";
}

export function isDevelopment() {
  return !isProduction();
}

export function sortBy(array, key) {
  return array
    .concat()
    .sort((a, b) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0));
}
