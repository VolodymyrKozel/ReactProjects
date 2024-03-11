import { useState } from "react";
import { data } from "./data";
import "./Accordian.css";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultSelect, setEnableMultSelect] = useState(false);
  const [multiple, setMultiply] = useState([]);

  function handleSingleSelection(id) {
    setSelected(id === selected ? null : id);
  }
  function handleMultiSelection(id) {
    let cpyMultiple = [...multiple];
    const findIndexOfCurrentId = cpyMultiple.indexOf(id);

    if (findIndexOfCurrentId === -1) cpyMultiple.push(id);
    else cpyMultiple.splice(findIndexOfCurrentId, 1);
    setMultiply(cpyMultiple);
  }
  return (
    <div className="wrapper">
      <button
        type="button"
        onClick={() => setEnableMultSelect(!enableMultSelect)}>
        Enable multiply selection
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((item) => (
            <div className="item" key={item.id}>
              <div
                onClick={
                  enableMultSelect
                    ? () => handleMultiSelection(item.id)
                    : () => handleSingleSelection(item.id)
                }
                className="title">
                <h3>{item.title}</h3>
                <span>+</span>
              </div>
              {enableMultSelect
                ? multiple.indexOf(item.id) !== -1 && (
                    <div className="content">
                      <a href={item.url}>{item.title}</a>
                    </div>
                  )
                : selected === item.id && (
                    <div className="content">
                      <a href={item.url}>{item.title}</a>{" "}
                    </div>
                  )}
            </div>
          ))
        ) : (
          <div className="info">No data found!</div>
        )}
      </div>
    </div>
  );
}
