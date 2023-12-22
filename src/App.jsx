

import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "Which cricketer is yet to notch up a century beyond the confines of the Asian continent?",
      answers: [
        {
          text: "R Ashwin",
          correct: false,
        },
        {
          text: "MS Dhoni",
          correct: true,
        },
        {
          text: "Staurt Broad",
          correct: false,
        },
        {
          text: "Ajit Agarkar",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "The only player to play for one franchise in IPL?",
      answers: [
        {
          text: "MS Dhoni",
          correct: false,
        },
        {
          text: "Rohit Sharma",
          correct: false,
        },
        {
          text: "Virat Kohli",
          correct: true,
        },
        {
          text: "Suresh Raina",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Which batsman in Test history to hit a six off the first ball of a game",
      answers: [
        {
          text: "Chris Gayle",
          correct: true,
        },
        {
          text: "Virender Sehwag",
          correct: false,
        },
        {
          text: "Travis Head",
          correct: false,
        },
        {
          text: "Rohit Sharma",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question: "Which cricketer to have played Test cricket for both India and England",
      answers: [
        {
          text: "Monty Panesar",
          correct: false,
        },
        {
          text: "Ravi Bopara ",
          correct: false,
        },
        {
          text: "Naseer Hussain",
          correct: false,
        },
        {
          text: "Iftikhar Ali Khan Pataudi",
          correct: true,
        },
      ],
    },
    {
      id: 5,
      question: "Which country to win the 60-Over, 50-Over and 20-Over World Cup?",
      answers: [
        {
          text: "Australia",
          correct: false,
        },
        {
          text: "West Indies",
          correct: false,
        },
        {
          text: "Pakistan",
          correct: false,
        },
        {
          text: "India",
          correct: true,
        },
      ],
    },
    {
      id: 6,
      question: "Which player is given the title of the Flying Sikh?",
      answers: [
        {
          text: "Milkha Singh",
          correct: true,
        },
        {
          text: "Bahadur Singh Chauhan",
          correct: false,
        },
        {
          text: "Kamaljeet Sandhu",
          correct: false,
        },
        {
          text: "Harmandeep Singh",
          correct: false,
        },
      ],
    },
    
    {
      id: 7,
      question: "Which sport's competition is awarded the “Stanley Cup”?",
      answers: [
        {
          text: "Tennis",
          correct: false,
        },
        {
          text: "Baseball",
          correct: false,
        },
        {
          text: "Hockey",
          correct: true,
        },
        {
          text: "Football",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "Which sport's competition was known as the “AFC Challenge Cup”?",
      answers: [
        {
          text: "Cricket",
          correct: false,
        },
        {
          text: "Volleyball",
          correct: false,
        },
        {
          text: "Football",
          correct: true,
        },
        {
          text: "Hockey",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "The Largest Number of Vegetarians in the World?",
      answers: [
        {
          text: "Sri Lanka",
          correct: false,
        },
        {
          text: "Nepal",
          correct: false,
        },
        {
          text: "India",
          correct: true,
        },
        {
          text: "Myanmar",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "Which cricket world cup is known as the “Wills World Cup”?",
      answers: [
        {
          text: "1992 Cricket World Cup",
          correct: false,
        },
        {
          text: "1996 Cricket World Cup",
          correct: true,
        },
        {
          text: "1999 Cricket World Cup",
          correct: false,
        },
        {
          text: "2003 Cricket World Cup",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "Which FIFA Football World Cup was the venue of the event “Maracanazo”?",
      answers: [
        {
          text: "1950 FIFA World Cup",
          correct: true,
        },
        {
          text: "1954 FIFA World Cup",
          correct: false,
        },
        {
          text: "1958 FIFA World Cup",
          correct: false,
        },
        {
          text: "1962 FIFA World Cup",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "The largest asteroid in our solar system?",
      answers: [
        {
          text: "Vesta",
          correct: false,
        },
        {
          text: "99942 Apophis",
          correct: false,
        },
        {
          text: "Ceres",
          correct: true,
        },
        {
          text: "2309 Mr. Spock",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "The hottest planet in our solar system?",
      answers: [
        {
          text: "Venus",
          correct: true,
        },
        {
          text: "Mercury",
          correct: false,
        },
        {
          text: "Mars",
          correct: false,
        },
        {
          text: "Jupiter",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "Biggest star of our Solar System?",
      answers: [
        {
          text: "AH Scorpii",
          correct: false,
        },
        {
          text: " UY Scuti",
          correct: true,
        },
        {
          text: "AS Cephei",
          correct: false,
        },
        {
          text: "IRC -10414",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "Which Indian state recorded the highest Tiger deaths in 2021?",
      answers: [
        {
          text: "Karnataka",
          correct: false,
        },
        {
          text: "Madhya Pradesh",
          correct: true,
        },
        {
          text: "Maharashtra",
          correct: false,
        },
        {
          text: "Gujarat",
          correct: false,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "₹ 1,000" },
        { id: 2, amount: "₹ 2,000" },
        { id: 3, amount: "₹ 3,000" },
        { id: 4, amount: "₹ 5,000" },
        { id: 5, amount: "₹ 10,000" },
        { id: 6, amount: "₹ 20,000" },
        { id: 7, amount: "₹ 40,000" },
        { id: 8, amount: "₹ 80,000" },
        { id: 9, amount: "₹ 1,60,000" },
        { id: 10, amount: "₹ 3,20,000" },
        { id: 11, amount: "₹ 6,40,000" },
        { id: 12, amount: "₹ 12,50,000" },
        { id: 13, amount: "₹ 25,50,000" },
        { id: 14, amount: "₹ 50,00,000" },
        { id: 15, amount: "₹ 1 Crore" },

      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;