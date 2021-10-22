import React from "react";

const isPrime = (n) => {
  let count = 0;
  if (n === 0) {
    return false;
  }

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      count++;
    }
  }
  if (count === 2) {
    return true;
  } else {
    return false;
  }
};

const getNthPrimeNo = (n) => {
  console.log(n);
  let count = 0;
  let i = 0;
  while (count < n) {
    i++;
    let res = isPrime(i);
    if (res) {
      count++;
    }
  }
  return i;
};

const GetPrime = ({ value, label, next }) => {
  //3rd way to optimize using React.memo..here if value changes then only function inside React.usememo will get executed..
  //wrapping the function inside React.memo..
  //generally used to prevent some heavy task...
  // const val = React.useMemo(() => getNthPrimeNo(value), [value]);

  const val = getNthPrimeNo(value);

  return (
    <div>
      <h3>
        The {value} th Prime Number id {val}
      </h3>
      <button onClick={next}>Next</button>
    </div>
  );
};

//1st way - using higher order function and comparator...
// const updatedGetPrime = React.memo(GetPrime, (prevProps, nextProps) => {
//   return prevProps.value === nextProps.value;
// });
// export default updatedGetPrime;

//2nd way - using higher order function and useCallback...
//just wrap the component inside React.memo without any comparator...and make sure that reference of function passed as props doesn't change..
//to make the reference of the props functions same on every re-render..we will wrap it in React.useCallback and pass a dependency array to it.....Now the reference will only change when parameters inside dependency arrays changes...
// const updatedGetPrime2 = React.memo(GetPrime);
// export default updatedGetPrime2;

export default GetPrime;
