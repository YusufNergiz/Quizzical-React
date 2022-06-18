import React from "react";
import '../App.css';
import { Markup } from 'interweave';

const Question = (props) => {

    return (
        <div className="questions_div">
            <h4 className="question"><Markup content={props.question}/></h4>
            {props.options.map((option) => {
                return <button className="question_button" onClick={() => props.printOption(option.optionId)} style={{backgroundColor: option.isHeld ? "green" : "white"}}><Markup content={option.option}/></button>
            })}
        </div>
    );
}

export default Question;