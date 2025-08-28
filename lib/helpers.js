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
  const left = [];
  const right = [];
  
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (predicate(element)) {
      left.push(element);
    } else {
      right.push(element);
    }
  }
  
  return [left, right];
}

// Sorts an array of objects by a given key
export function sortBy(array, key) {
  return [...array].sort((a, b) => {
    const aVal = a[key];
    const bVal = b[key];
    return aVal < bVal ? -1 : aVal > bVal ? 1 : 0;
  });
}

// Outputs a JS object containing form values
// TODO: Convert checkboxes to booleans
// TODO: Check handling of selects and radios
export function formValues(form) {
  return Object.fromEntries(new FormData(form).entries());
}
