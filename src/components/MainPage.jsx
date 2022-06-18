import React from "react";
import yellowBlog from "../Images/blobs.png";
import blueBlob from "../Images/blueblob.png";

const MainPage = (props) => {
    return (
        <div className="mainPage">
            <img src={yellowBlog} alt="Yellow Blog" className="yellowBlob"/>
            <h1 className="mainPageTitle">Quizzical</h1>
            <p className="mainPageDescription">Some Description if needed</p>

            <button className="mainPageButton" onClick={props.startQuiz}>Start quiz</button>

            <img src={blueBlob} alt="Blue Blob" className="blueBlob"/>
        </div>
    );
}

export default MainPage;