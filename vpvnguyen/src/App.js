import React from "react";
import "./App.css";

// https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const InputText = ({ name }) => {
  return (
    <div className="border">
      <label htmlFor={name}>{name}</label>
      <input placeholder={name} type="text" name={name} id={name} />
    </div>
  );
};

function App() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="border">
        <label htmlFor="text">text</label>
        <input placeholder="text" type="text" name="text" id="text" />
      </div>
      <div className="border">
        <label htmlFor="checkbox">checkbox</label>
        <input
          placeholder="checkbox"
          type="checkbox"
          name="checkbox"
          id="checkbox"
        />
      </div>
      <div className="border">
        <label htmlFor="color">color</label>
        <input placeholder="color" type="color" name="color" id="color" />
      </div>
      <div className="border">
        <label htmlFor="date">date</label>
        <input placeholder="date" type="date" name="date" id="date" />
      </div>
      <div className="border">
        <label htmlFor="email">email</label>
        <input placeholder="email" type="email" name="email" id="email" />
      </div>
      <div className="border">
        <label htmlFor="file">file</label>
        <input placeholder="file" type="file" name="file" id="file" />
      </div>
      <div className="border">
        <label htmlFor="image">image</label>
        <input placeholder="image" type="image" src="./logo.svg" alt="logo" />
      </div>
      <div className="border">
        <label htmlFor="month">month</label>
        <input placeholder="month" type="month" name="month" id="month" />
      </div>
      <div className="border">
        <label htmlFor="number">number</label>
        <input placeholder="number" type="number" name="number" id="number" />
      </div>
      <div className="border">
        <label htmlFor="password">password</label>
        <input
          placeholder="password"
          type="password"
          name="password"
          id="password"
        />
      </div>
      <div className="border">
        <label htmlFor="radio">radio</label>
        <input placeholder="radio" type="radio" name="radio" id="radio" />
      </div>
      <div className="border">
        <label htmlFor="range">range</label>
        <input placeholder="range" type="range" name="range" id="range" />
      </div>
      <div className="border">
        <label htmlFor="reset">reset</label>
        <input placeholder="reset" type="reset" value="reset" />
      </div>
      <div className="border">
        <label htmlFor="tel">tel</label>
        <input placeholder="tel" type="tel" name="tel" id="tel" />
      </div>
      <div className="border">
        <label htmlFor="time">time</label>
        <input placeholder="time" type="time" name="time" id="time" />
      </div>
      <div className="border">
        <label htmlFor="url">url</label>
        <input placeholder="url" type="url" name="url" id="url" />
      </div>
      <div className="border">
        <label htmlFor="week">week</label>
        <input placeholder="week" type="week" name="week" id="week" />
      </div>
      {arr.map((item, index) => (
        <InputText name={`text-${index}`} />
      ))}
    </div>
  );
}

export default App;
