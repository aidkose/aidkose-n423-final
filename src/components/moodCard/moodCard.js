import React, { useState } from "react";
import firebase from "../../utilities/firebase";
import styles from "./moodCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";

function MoodCard({ log }) {
  const bookmarkLog = () => {
    const entryRef = firebase
      .database()
      .ref("aidkose-n423-final")
      .child(log.id);

    entryRef.update({
      bookmark: !log.bookmark,
    });
  };

  const deleteLog = () => {
    const entryRef = firebase
      .database()
      .ref("aidkose-n423-final")
      .child(log.id);

    entryRef.remove();
  };

  return (
    <div className="mood-card">
      <h2>{log.date}</h2>
      <p>
        <span>Mood: </span> {log.mood}
      </p>
      <p>
        <span>Subject: </span> {log.subj}
      </p>
      <p className="entry-box-display">
        <span>Journal Entry: </span>
        {log.entry}
      </p>
      <FontAwesomeIcon
        onClick={bookmarkLog}
        id="bookmark"
        icon={faBookmark}
        className={log.bookmark ? "hide-button" : ""}
      />
      <FontAwesomeIcon
        onClick={bookmarkLog}
        id="bookmarked"
        className={log.bookmark ? "" : "hide-button"}
        icon={faBookmark}
      />
      <FontAwesomeIcon
        onClick={deleteLog}
        id="delete-icon"
        icon={faDeleteLeft}
      />
    </div>
  );
}

export default MoodCard;
