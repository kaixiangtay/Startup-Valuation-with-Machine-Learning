import React, { Component } from "react";

import axios from "axios";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "Unnamed": "",
            "funding_rounds": "",
            "funding_total_usd": "",
            "number_of_members": "",
            "number_of_founders": "",
            "mean_funding": "",
            "max_funding": "",
            "crowdfunding": "",
            "post_ipo": "",
            "private_equity": "",
            "venture": "",
            "a": "",
            "angel": "",
            "b": "",
            "c": "",
            "convertible": "",
            "crowd": "",
            "crowd_equity": "",
            "d": "",
            "debt_round": "",
            "e": "",
            "f": "",
            "g": "",
            "grant": "",
            "partial": "",
            "post_ipo_debt": "",
            "post_ipo_equity": "",
            "private_equity_two": "",
            "secondary_market": "",
            "seed": "",
            "unattributed": "",
            "number_of_invested_VCs": "",
            "total_investment_from_VCs": "",
            "year": "",
            "month": "",
            "day": "",

        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    onSubmit(event) {
        event.preventDefault();

        axios
            .post("https://qw16rmz5wa.execute-api.ap-southeast-1.amazonaws.com/api/startupvaluationprediction", {
                data: `${this.state.Unnamed}, ${this.state.funding_rounds},
            ${this.state.funding_total_usd},
            ${this.state.number_of_members},
            ${this.state.number_of_founders},
                    ${this.state.mean_funding},
                    ${this.state.max_funding},
                    ${this.state.crowdfunding},
                    ${this.state.post_ipo},
                    ${this.state.private_equity},
                    ${this.state.venture},
                    ${this.state.a},
                    ${this.state.angel},
                    ${this.state.b},
                    ${this.state.c},
                    ${this.state.convertible},
                    ${this.state.crowd},
                    ${this.state.crowd_equity},
                    ${this.state.d},
                    ${this.state.debt_round},
                    ${this.state.e},
                    ${this.state.f},
                    ${this.state.g},
                    ${this.state.grant},
                    ${this.state.partial},
                    ${this.state.post_ipo_debt},
                    ${this.state.post_ipo_equity},
                    ${this.state.private_equity_two},
                    ${this.state.secondary_market},
                    ${this.state.seed},
                    ${this.state.unattributed},
                    ${this.state.number_of_invested_VCs},
                    ${this.state.total_investment_from_VCs},
                    ${this.state.year},
                    ${this.state.month},
                    ${this.state.day}`})
            .then((res) => {
                this.setState({
                    "Unnamed": "0",
                    "funding_rounds": "",
                    "funding_total_usd": "",
                    "number_of_members": "",
                    "number_of_founders": "",
                    "mean_funding": "",
                    "max_funding": "",
                    "crowdfunding": "",
                    "post_ipo": "",
                    "private_equity": "",
                    "venture": "",
                    "a": "",
                    "angel": "",
                    "b": "",
                    "c": "",
                    "convertible": "",
                    "crowd": "",
                    "crowd_equity": "",
                    "d": "",
                    "debt_round": "",
                    "e": "",
                    "f": "",
                    "g": "",
                    "grant": "",
                    "partial": "",
                    "post_ipo_debt": "",
                    "post_ipo_equity": "",
                    "private_equity_two": "0",
                    "secondary_market": "",
                    "seed": "",
                    "unattributed": "",
                    "number_of_invested_VCs": "",
                    "total_investment_from_VCs": "",
                    "year": "",
                    "month": "",
                    "day": "", });
                console.log(res);
                this.props.setValuation(res.body.split("$")[1]);
            })
            .catch((err) => {
                this.setState({
                    "Unnamed": "",
                    "funding_rounds": "",
                    "funding_total_usd": "",
                    "number_of_members": "",
                    "number_of_founders": "",
                    "mean_funding": "",
                    "max_funding": "",
                    "crowdfunding": "",
                    "post_ipo": "",
                    "private_equity": "",
                    "venture": "",
                    "a": "",
                    "angel": "",
                    "b": "",
                    "c": "",
                    "convertible": "",
                    "crowd": "",
                    "crowd_equity": "",
                    "d": "",
                    "debt_round": "",
                    "e": "",
                    "f": "",
                    "g": "",
                    "grant": "",
                    "partial": "",
                    "post_ipo_debt": "",
                    "post_ipo_equity": "",
                    "private_equity_two": "",
                    "secondary_market": "",
                    "seed": "",
                    "unattributed": "",
                    "number_of_invested_VCs": "",
                    "total_investment_from_VCs": "",
                    "year": "",
                    "month": "",
                    "day": "", });
                console.log(err);
                this.setState({ errors: err });
            });
    }

    render() {
        return (
            <div className="form">
                <h2>Get Your Prediction!</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="input-field">
                        <label className="required">Unnamed: </label>
                        <input
                            className="input"
                            type="number"
                            name="Unnamed"
                            value={this.state.Unnamed}
                            onChange={this.onChange}
                            min={0}
                            required
                        ></input>
                    </div>
                    <div className="input-field">
                        <label>Number of funding rounds:</label>
                        <input
                            className="input"
                            type="number"
                            name="funding_rounds"
                            value={this.state.funding_rounds}
                            onChange={this.onChange}
                            min={0}
                            step={1}
                        ></input>
                    </div>
                    <div>
                        <input type="submit" value="Submit" className="submit-btn"/>
                    </div>
                </form>
            </div>
        );
    }
}

export default Form;