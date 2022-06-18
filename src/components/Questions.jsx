import React from "react";
import yellowBlob from "../Images/blobs.png";
import blueBlob from "../Images/blueblob.png";
import Question from "./Question";
import '../App.css';

const Questions = (props) => {

    console.log(props.allQuestions)
    return (
        <div className="questions">
            <img src={yellowBlob} alt="Yellow Blog" className="yellowBlob"/>
            {props.allQuestions.map((question) => {
                return <Question question={question.question} answer={question.answer} options={question.options} printOption={props.printOption}/>
            })}
            <button>See Results</button>
            <img src={blueBlob} alt="Blue Blob" className="blueBlob"/>
        </div>
    );
}

export default Questions;