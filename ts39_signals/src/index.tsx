import { startTransition, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { Signal } from "./polyfill";

const root = createRoot(document.getElementById("root") as HTMLElement);

const App = () => {
  return <div>123</div>;
};

startTransition(() => {
  root.render(<App />);
});

const counter = new Signal.State(0);
const isEven = new Signal.Computed(() => counter.get() % 2 === 0);

console.log(counter.get(), isEven.get());
counter.set(1);
console.log(counter.get(), isEven.get());
setTimeout(() => {
  counter.set(50)
  console.log(counter.get(), isEven.get());
}, 3000)