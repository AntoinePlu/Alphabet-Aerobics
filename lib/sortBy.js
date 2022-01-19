export default function sortBy(array, key) {
  return array
    .concat()
    .sort((a, b) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0));
}
