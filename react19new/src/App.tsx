import { useRef, useState } from "react";

import "./App.scss";
import FormOld from "./component/Form.old";
import FormR18 from "./component/Form.r18";
import FormR19 from "./component/Form.r19";
import UseComponent from "./component/UseComponent";
import UseComponent2 from "./component/UseComponent2";

function App() {
  const [count, setCount] = useState(0);
  const valueRef = useRef<number>(null);

  return (
    <>
      <div>
        <p className="fs-3">Form</p>
        <div
          className="d-flex justify-content-between"
          style={{ width: "100vw" }}
        >
          <div className="p-2">
            <p className="fs-3">old</p>
            <FormOld />
          </div>
          <div className="p-2">
            <p className="fs-3">r18</p>
            <FormR18 />
          </div>
          <div className="p-2">
            <p className="fs-3">r19</p>
            <FormR19 />
          </div>
        </div>
      </div>

      <div>
        <p className="fs-3">Use</p>
        <div
          className="d-flex justify-content-between"
          style={{ width: "100vw" }}
        >
          <div className="p-2">
            <p className="fs-3">use promise</p>
            <UseComponent />
          </div>
          <div className="p-2">
            <p className="fs-3">use context</p>
            <UseComponent2 />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
