# Part 2 questions

1. What is the difference between Component and PureComponent? give an example where it might break my app.
   `For me they are the same things, but the PureComponent will do a comparison between state and props when it changes but, you have to call forceUpdate to update those values.`

2. Context + ShouldComponentUpdate might be dangerous. Can think of why is that?
   `No idea why, please share with me that information will be nice to learn more about.`

3. Describe 3 ways to pass information from a component to its PARENT.
   `1. Receiving a function as prop from the parent`
   `2. The child component calls the function and pass the data as an argument`

4. Give 2 ways to prevent components from re-rendering.
   `You can use useCallback for hooks and use useMemo for memorizing the data of the app`

5. What is a fragment and why do we need it? Give an example where it might break my app.
   `React supports only one single element by node, so if you want to return more use a React.Fragment or just a empty tag like <><div></div><div></div></>. The app will break if you return more the one node.`

6. Give 3 examples of the HOC pattern.

7. what's the difference in handling exceptions in promises, callbacks and async...await.
   `The big difference is when you receive something from the promise or wait for an answer from the promise. For example promises, you can use .then() to get the data from the promise or put await before the name of the promise and the following line that will be resolved, but the parent function must be an async function and then() you don't need to have a parent with async. Oh in traditional promises we can handle error calling catch() after the then() function. Something like this promise.then(data => console.log(data)).catch(error => console.log(error))`

8. How many arguments does setState take and why is it async.
   `It can accept two arguments, but I usually use one, and it's async because it will work like a promise. When it finishes, the component will re-render with the new value changed. Calling the value in the following line after changing something with setState will return the old value.`

9. List the steps needed to migrate a Class to Function Component.
   `1. First, you have to transform the class into an arrow function.`
   `2. Check you you have states and create those using the useState hook.`
   `3. Instead of using the render function, you can use just a return.`

10. List a few ways styles can be used with components.
    `You can use CSS files for it and use the className`
    `You can use SCSS files for it and use the className`
    `You can use styled components to define styles or create a wrapper with styles for the whole block`
    `Or you can but, I don't recommend to use inline styles`

11. How to render an HTML string coming from the server.
    `I like to use a lib called react-html-parser for that or dangerouslySetInnerHTML`
