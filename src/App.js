import React, { useState, useEffect } from 'react';
import './App.css';

const useLove = (initialLove) => {
  const [isLove, setIsLove] = useState(initialLove);
  const changeLove = () => {
    setIsLove(!isLove);
  };
  return {
    isLove,
    changeLove
  }
};
function App() {
  const [date, setDate] = useState(0);
  const { isLove, changeLove } = useLove(false);

  const increaseDate = () => {
    setDate(date + 1);
  };



  useEffect(() => {
    const interval = setInterval(changeLove, 1000);
    return () => {
      clearInterval(interval);
    }
  },[changeLove]);

  useEffect(() => {
    window.document.title = `${date} ngày crush em`;
  }, [date]);

  return (
    <div id="app">
      <section className="countdown">
        <div  className="timer">
          <div className="box">
            <div className="spacer"/>
            <p className="value">{date} ngày</p>
            <button className="label" onClick={increaseDate}>Đếm Ngày Crush</button>
          </div>
          <p className="text">{isLove ? "Yêu :D" : "Không Yêu :("}!</p>
        </div>
      </section>
    </div>
  );
}

export default App;
