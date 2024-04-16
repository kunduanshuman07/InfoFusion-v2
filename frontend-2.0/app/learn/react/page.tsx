import ReactCodeBlock from "@/app/components/ReactCodeBlock"

const ReactJS = () => {
    return (
        <div className="p-2 flex flex-col">
            <div className="flex flex-col mt-2">
                <h1 className="text-sm font-bold text-gray-600">Components</h1>
                <p className="text-xs text-cyan-800 mt-2">
                    {`React is all about building UIs using components. Components are reusable, self-contained pieces of UI. They can be as small as a button or as complex as an entire form. Here's a basic example of a functional component:`}
                </p>
                <div className="rounded-lg shadow-md mt-4">
                    <ReactCodeBlock code={`import React from 'react';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

export default Welcome;
`} showLineNumbers={true} />


                </div>
                <h1 className="text-xs text-cyan-800 mt-2">{`In this example, Welcome is a simple functional component that takes props as input and returns JSX (a syntax extension for JavaScript that looks similar to HTML).`}</h1>
            </div>
            <div className="flex flex-col mt-2">
                <h1 className="text-sm font-bold text-gray-600">JSX</h1>
                <p className="text-xs text-cyan-800 mt-2">
                    {`JSX allows you to write HTML-like code in your JavaScript. It's not HTML, but a syntax extension that allows you to write HTML structures in your JavaScript code. React uses JSX to describe what the UI should look like. Here's an example:`}
                </p>
                <div className="rounded-lg shadow-md mt-4">
                    <ReactCodeBlock code={`function App() {
  return (
    <div>
      <h1>Hello, React!</h1>
      <p>This is a paragraph.</p>
    </div>
  );
}
`} showLineNumbers={true} />


                </div>
            </div>
            <div className="flex flex-col mt-2">
                <h1 className="text-sm font-bold text-gray-600">Props</h1>
                <p className="text-xs text-cyan-800 mt-2">
                    {`Props (short for properties) are how you pass data from parent to child components in React. They are immutable and help you create dynamic and reusable components. Here's an example:`}
                </p>
                <div className="rounded-lg shadow-md mt-4">
                    <ReactCodeBlock code={`function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return <Welcome name="Alice" />;
}
`} showLineNumbers={true} />


                </div>
                <h1 className="text-xs text-cyan-800 mt-2">{`In this example, the Welcome component receives the name prop and displays it.`}</h1>
            </div>
            <div className="flex flex-col mt-2">
                <h1 className="text-sm font-bold text-gray-600">State</h1>
                <p className="text-xs text-cyan-800 mt-2">
                    {`State in React represents the mutable data that affects the rendering of components. Unlike props, which are passed in, state is managed within the component itself. To add state to a component, you use the useState hook:`}
                </p>
                <div className="rounded-lg shadow-md mt-4">
                    <ReactCodeBlock code={`import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
`} showLineNumbers={true} />


                </div>
                <h1 className="text-xs text-cyan-800 mt-2">{`In this example, count is the state variable, and setCount is the function to update it.`}</h1>
            </div>
            <div className="flex flex-col mt-2">
                <h1 className="text-sm font-bold text-gray-600">Lifecycle Methods</h1>
                <p className="text-xs text-cyan-800 mt-2">
                    {`In the past, React used class components that had lifecycle methods. With the introduction of hooks, class components are less common, but knowing lifecycle methods is still valuable for understanding older codebases or integrating with older libraries.`}
                </p>
                <div className="rounded-lg shadow-md mt-4">
                    <ReactCodeBlock code={`componentDidMount(): Invoked immediately after a component is mounted.
componentWillUnmount(): Invoked immediately before a component is unmounted and destroyed.
`} showLineNumbers={true} />


                </div>
                <h1 className="text-xs text-cyan-800 mt-2">{`In this example, count is the state variable, and setCount is the function to update it.`}</h1>
            </div>
            <div className="flex flex-col mt-2">
                <h1 className="text-sm font-bold text-gray-600">Hooks</h1>
                <p className="text-xs text-cyan-800 mt-2">
                    {` Introduced in React 16.8, hooks allow you to use state and other React features without writing a class. They let you use state, context, refs, and other features in functional components. Some common hooks are:`}
                </p>
                <div className="rounded-lg shadow-md mt-4">
                    <ReactCodeBlock code={`useState
useEffect
useContext
useReducer
useRef
`} showLineNumbers={true} />


                </div>
                <h1 className="text-xs text-cyan-800 mt-2">{`Hooks make it easier to reuse logic between components and manage complex stateful logic more effectively.`}</h1>
            </div>
            <div className="flex flex-col mt-2">
                <h1 className="text-sm font-bold text-gray-600">Cotext API</h1>
                <p className="text-xs text-cyan-800 mt-2">
                    {` Context provides a way to pass data through the component tree without having to pass props down manually at every level. It's useful for sharing common data, such as themes or user authentication, across many components.

Here's a basic example of using Context:`}
                </p>
                <div className="rounded-lg shadow-md mt-4">
                    <ReactCodeBlock code={`const ThemeContext = React.createContext('light');

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const theme = React.useContext(ThemeContext);
  return <button>{theme}</button>;
}
`} showLineNumbers={true} />


                </div>
            </div>
            <div className="flex flex-col mt-2">
                <h1 className="text-sm font-bold text-gray-600">Error Boundaries</h1>
                <p className="text-xs text-cyan-800 mt-2">
                    {` Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of crashing the entire app. Here's an example of an error boundary:`}
                </p>
                <div className="rounded-lg shadow-md mt-4">
                    <ReactCodeBlock code={`class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}
`} showLineNumbers={true} />


                </div>
                <h1 className="text-xs text-cyan-800 mt-2">{`You can wrap components with this ErrorBoundary to catch errors.`}</h1>
            </div>
            
        </div>
    )
}

export default ReactJS