import React from "react";
import Form from "./form";

function Prediction(props) {

    return (
        <main>
            <h1>
                Startup Valuation Prediction
            </h1>
            <div className = "insights">
                <div className = "prediction">
                    <span className="material-icons-sharp">
                        query_stats
                    </span>
                    <div className="middle">
                        <div className="left">
                            <h3>Startup Valuation Prediction</h3>
                            <h1>{"$" + props.valuation}</h1>
                        </div>
                    </div>
                </div>
            </div>
            <Form setValuation = {props.setValuation}/>
        </main>
    );
}

//continue from 28:52

export default Prediction;