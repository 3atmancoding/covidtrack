## Covid Tracker app

Basic webapp created to understand working of
`useState` `useEffect` `useRef` & `useCallback`

The flow of the app

- We declare `useState` and `useRef`

```js
const [isLoading, setLoading] = useState(true);
const [isError, setError] = useState(false);
const [error, renderError] = useState('');
const [data, setData] = useState([]);
```

```js
const getInputValue = useRef();
```

What is `useState`?

## Syntax

```js
const [state, setState] = useState(initialState);
```

We have a destructure array state which is equal to the intialState passed in useSate
setState updates the previous state every time we pass a value inside it.

What is `useRef`?

## Syntax

```js
const refContainer = useRef(initialValue);
```

- useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue)
- You might be familiar with refs primarily as a way to access the DOM. If you pass a ref object to React with <div ref={myRef} />, React will set its .current property to the corresponding DOM node whenever that node changes.
- Mutating the .current property doesn’t cause a re-render

In the code we use ref to get value that has been selected in the option. We need that value so that we can pass the value to url

What is `useEffect`?

## Syntax

```js
useEffect(didUpdate);
```

- All the network calls and any side effects like mutations, subscriptions, timers, logging can be performed in useEffect Hook

What is `useCallback`?

## Syntax

```js
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
```

- useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed
- So we wrap our ajax call in useCallback so that we need not to render every time we load the same option in select

### Check the Network tab you can see that 200 call is cached. Our values are cached.
