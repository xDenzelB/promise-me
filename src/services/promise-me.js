/**
 * TODO: Exercise 1: use `fetch` & async/await to get data from an API
 */

export async function asyncGetQuotes() {
  const res = await fetch('https://futuramaapi.herokuapp.com/api/quotes/1');
  const data = await res.json();
  const quote = data[0];
  const totalResults = data.length;
  return { quote, totalResults };
}

/**
 * TODO: Exercise 2: use `fetch` & `.then` syntax to get the same data from the first exercise.
 */
export function thenGetQuotes() {
  return fetch('https://futuramaapi.herokuapp.com/api/quotes/1')
    .then((res) => res.json())
    .then((result) => ({ quote: result[0], totalResults: results.length }))
    .then(() => console.log('.then fetch complete'));
}

/**
 * TODO: Exercise 3: use `fetch`, async/await, and a try/catch statement to get data from an API and handle errors
 */
export async function asyncTryGetQuotes() {
  try {
    const res = await fetch('https://futuramaapi.herokuapp.com/api/quotes/1');

    const result = await res.json();

    return { quote: result[0], totalResults: result.length };

  } catch (error) {
    console.error('oops an error occurred');
  }
}
/**
 * TODO: Exercise 4: use `fetch`, `.then`, and `.catch` to get the same data from exercise 3 while handling errors
 */

export function thenTryGetQuotes() {
  const result = fetch('https://futuramaapi.herokuapp.com/api/quotes/1')
    .then((res) => res.json())
    .then((result) => ({ quote: result[0], totalResults: result.length }))
    .then(() => console.log(' .then fetch and'))
    .catch((error) => console.log('oops an error occurred'));


  return result
}


/**
 * TODO: Exercise 5: use `fetch`, async/await, and a try/catch/finally statement to get data from an API, handle errors, then console.log('All done!') upon completion
 */
export async function asyncFinallyTryGetQuotes() {
  try {
    const res = await fetch('https://futuramaapi.herokuapp.com/api/quotes/1');

    const result = await res.json();

    return { quote: result[0], totalResults: result.length };

  } catch (error) {
    console.error('oops an error occurred');
  } finally {
    console.log('All done!');
  }
}
/**
 * TODO: Exercise 6: use `fetch`, `.then`, `.catch`. and `.finally` to get the same data from exercise 5 while handling errors and calling console.log('All done!') upon completion
 */
export function thenFinallyGetQuotes() {
  const result = fetch('https://futuramaapi.herokuapp.com/api/quotes/1')
    .then((res) => res.json())
    .then((result) => ({ quote: result[0], totalResults: result.length }))
    .then(() => console.log(' .then fetch and'))
    .catch((error) => console.log('oops an error occurred'))
    .finally(() => console.log('All done!'));

  return result
}

/**
 * TODO: Exercise 7: Call your function from exercise 7 using .then
 */

export function thenAsyncGetQuotes() {
  return thenFinallyGetQuotes().then((result) => console.log('Completed running with result:', result));
}

/**
 * TODO: Exercise 8: Call your function from exercise 6 using async/await
 */

export async function asyncThenGetQuotes() {
  const result = await fetch('https://futuramaapi.herokuaoo.com/api/quotes/1')
    .then((res) => res.json())
    .then((result) => {
      return { quote: result[0], totalResults: result.length };
    })
    .catch((error) => console.error('Whoops an error occurred!'))
    .finally(() => console.log('All done!'));

  return result;
}
