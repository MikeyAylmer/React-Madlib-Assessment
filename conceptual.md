### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
```React is a front-end framework/library used to make front-end coding simpliar``

- What is Babel?
```Babel is a JavaScript compiler that allows you to write code using the latest ECMAScript (JavaScript) features and syntax, and then compiles or transpiles that code into older versions of JavaScript that are compatible with a wide range of browsers and environments. ``

- What is JSX?
```JavaScript Syntax Extension is a extension that allows us to use Babel to transpile our HTML syntax in our js file.``

- How is a Component created in React?
```A component allows us to construct specific parts of our app and then out them together to build a React app.``

- What are some difference between state and props?
```State is a mechanism for managing and storing data within a component. It represents the internal, mutable data of a component. Props (short for "properties") are the data that a parent component passes to its child components. Props are not immutable and provide a way to communicate data from parent to child``

- What does "downward data flow" refer to in React?
```"Downward data flow" is a fundamental principle in React that refers to the one-way flow of data and props from parent components to child components in a component hierarchy. It emphasizes that data should be passed from higher-level or parent components to lower-level or child components, creating a clear and predictable data flow within the application.``

- What is a controlled component?
```A controlled component is a concept in React that refers to a form element (such as an input, textarea, or select) whose value is controlled by the component's state. In a controlled component, the component's state serves as the single source of truth for the value of the form element, and any changes to the element's value are managed through React's state management mechanisms.``

- What is an uncontrolled component?
```An uncontrolled component is a form element in React that does not have its value controlled by React's state management. In an uncontrolled component, the element's value is managed and accessed directly by the DOM, typically through a ref or another DOM manipulation method. Uncontrolled components are not associated with React's state or data flow mechanisms, making them different from controlled components.``

- What is the purpose of the `key` prop when rendering a list of components?
```The key prop serves a crucial role when rendering a list of components in React. Its primary purpose is to help React identify and keep track of individual elements within a list, facilitating efficient updates and rendering of lists. The key prop is typically used when mapping over an array of data to generate a list of components or elements, such as a list of items in a todo list or a collection of cards.``

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
```Array indices are not stable and can change when items are added, removed, or reordered within the list. If the order of items in the array changes, the indices will be reassigned. This can lead to unpredictable and undesirable behavior in your application.`

- Describe useEffect.  What use cases is it used for in React components?
```useEffect is a React Hook that allows you to perform side effects in functional components. It's a critical part of managing side effects, such as data fetching, DOM manipulation, and subscriptions, in React components. ``

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
```useRef is a React Hook that serves multiple purposes, but its primary use is for accessing and interacting with the DOM and for persisting values between renders without causing the component to re-render when the ref value changes. It provides a way to reference DOM elements directly, store mutable values that won't trigger re-renders, and interact with components in certain cases.`

- When would you use a ref? When wouldn't you use one?
```Typically you would use ref in a situation where if you need to interact with or manipulate a DOM element directly, such as setting focus, reading element properties, or measuring dimensions, you would use a ref. Refs provide a way to reference and access DOM elements in an imperative manner. You wouldnt use it when data needs to be passed between parent and child components, props are the primary means of communication. Data should be passed as props to child components, and changes should be communicated through callback functions.``

- What is a custom hook in React? When would you want to write one?
```A custom hook in React is a JavaScript function that encapsulates reusable logic and state in a way that can be shared across multiple components. Custom hooks are a powerful and flexible way to abstract and manage complex functionality in a modular and reusable manner. Custom hooks follow a specific naming convention by starting with the word "use" ``
