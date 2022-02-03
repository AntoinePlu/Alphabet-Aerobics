// Returns true when ran in a production environment
export function isProduction() {
  return process.env.NODE_ENV === "production";
}

// Returns true when ran in a development environment
export function isDevelopment() {
  return !isProduction();
}

export function notFoundInProduction(
  innerGetStaticProps = () => ({ props: {} })
) {
  return async (context) => {
    if (isProduction()) {
      return { notFound: true };
    }

    return await innerGetStaticProps(context);
  };
}

// Partitions an array into two other arrays, the first ones containing
// values verifying a predicate and the second one containing values not
// verifying the predicate.
//
// Example: Paritioning even and odd numbers
// partition([1, 2, 3, 4], x => x % 2 === 0)
// #=> [[2, 4], [1, 3]]
export function partition(array, predicate) {
  return array.reduce(
    ([left, right], element) =>
      predicate(element)
        ? [[...left, element], right]
        : [left, [...right, element]],
    [[], []]
  );
}

// Sorts an array of objects by a given key
export function sortBy(array, key) {
  return array
    .concat()
    .sort((a, b) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0));
}
