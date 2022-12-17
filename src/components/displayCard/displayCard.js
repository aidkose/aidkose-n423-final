import React, { useEffect, useState } from "react";
import firebase from "../../utilities/firebase";
import MoodCard from "../moodCard/moodCard";

function DisplayCard() {
  const [cardData, setCardData] = useState();
  useEffect(() => {
    const entryRef = firebase.database().ref("aidkose-n423-final");
    entryRef.on("value", (snapshot) => {
      const cards = snapshot.val();
      const cardData = [];
      for (let id in cards) {
        cardData.push({ id, ...cards[id] });
      }
      setCardData(cardData);
    });
  }, []);
  return (
    <div>
      {cardData
        ? cardData.map((log, index) => <MoodCard log={log} key={index} />)
        : ""}
    </div>
  );
}

export default DisplayCard;
