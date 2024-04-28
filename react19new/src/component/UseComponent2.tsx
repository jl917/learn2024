import { use, createContext } from "react";

const ThemeContext = createContext({ color: "red" });

const Child2 = () => {
  return <div>123</div>;
};

function Child1({ children }: any) {
  if (children) {
    const theme = use(ThemeContext);
    return <h1 style={{ color: theme.color }}>{children}</h1>;
  }

  const theme = { color: "green" };
  return <h1 style={{ color: theme.color }}>123</h1>;

  // This would not work with useContext
  // because of the early return.
}

const UseComponent2 = () => {
  return (
    <>
      <Child1 />
      <Child1>
        <Child2 />
      </Child1>
    </>
  );
};

export default UseComponent2;
