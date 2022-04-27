import { asyncGetQuotes, thenGetQuotes, asyncTryGetQuotes, thenTryGetQuotes, thenFinallyGetQuotes, thenAsyncGetQuotes, asyncThenGetQuotes, asyncFinallyTryGetQuotes } from "./services/promise-me";

export default function App() {
  const handleClick = (callback) => {
    const result = callback();
    console.log(result);
  }


  return <>
    <button onClick={() => handleClick(asyncGetQuotes)}>Async Get Quotes</button>
    <button onClick={() => handleClick(thenGetQuotes)}>.then Get Quotes</button>
    <button onClick={() => handleClick(asyncTryGetQuotes)}>Async Try Get Quotes</button>
    <button onClick={() => handleClick(thenTryGetQuotes)}>.then try Get Quotes</button>
    <button onClick={() => handleClick(asyncFinallyTryGetQuotes)}>.then try Get Quotes</button>
    <button onClick={() => handleClick(thenFinallyGetQuotes)}>.then finally Get Quotes</button>
    <button onClick={() => handleClick(thenAsyncGetQuotes)}>.then async Get Quotes</button>
    <button onClick={() => handleClick(asyncThenGetQuotes)}> async then Get Quotes</button>
  </>;
}
