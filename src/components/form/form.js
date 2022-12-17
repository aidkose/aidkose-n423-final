import React, { useState } from "react";
import firebase from "../../utilities/firebase";
import styles from "./form.css";

function Form() {
  const [mood, setMood] = useState("");
  const [date, setDate] = useState("");
  const [subj, setSubj] = useState("");
  const [entry, setEntry] = useState("");

  const moodOnChange = (e) => {
    setMood(e.target.value);
  };
  const dateOnChange = (e) => {
    setDate(e.target.value);
  };
  const subjOnChange = (e) => {
    setSubj(e.target.value);
  };
  const entryOnChange = (e) => {
    setEntry(e.target.value);
  };

  const logMood = (e) => {
    const entryRef = firebase.database().ref("aidkose-n423-final");
    const log = {
      mood,
      date,
      subj,
      entry,
    };
    document.getElementById("mood-select").value = "";
    document.getElementById("date").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("entry").value = "";
    entryRef.push(log);
  };
  return (
    <div className="form-wrapper">
      <h1>Moodi</h1>
      <span>Your daily mood tracker</span>
      <select id="mood-select" onChange={moodOnChange}>
        <option value="" disabled selected hidden>
          How are you feeling?
        </option>
        <option value="Awful">Awful</option>
        <option value="Bad">Bad</option>
        <option value="Ok">Ok</option>
        <option value="Good">Good</option>
        <option value="Great">Great</option>
      </select>
      <input id="date" type="date" onChange={dateOnChange} />
      <label for="subject">Subject: </label>
      <input id="subject" type="text" onChange={subjOnChange} value={subj} />
      <label className="entry-label" for="entry">
        Journal Entry:{" "}
      </label>
      <textarea
        id="entry"
        type="text"
        className="entry-box"
        onChange={entryOnChange}
        value={entry}
      ></textarea>
      <button className="submit" onClick={logMood}>
        Submit Entry
      </button>
    </div>
  );
}

export default Form;
