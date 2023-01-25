import React, {Component} from "react";

import axios from "axios";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
        const startup_string = ""
            + this.state.Unnamed
            + ","
            + this.state.funding_rounds
            + ","
            + this.state.funding_total_usd
            + ","
            + this.state.number_of_members
            + ","
            + this.state.number_of_founders
            + ","
            + this.state.mean_funding
            + ","
            + this.state.max_funding
            + ","
            + this.state.crowdfunding
            + ","
            + this.state.post_ipo
            + ","
            + this.state.private_equity
            + ","
            + this.state.venture
            + ","
            + this.state.a
            + ","
            + this.state.angel
            + ","
            + this.state.b
            + ","
            + this.state.c
            + ","
            + this.state.convertible
            + ","
            + this.state.crowd
            + ","
            + this.state.crowd_equity
            + ","
            + this.state.d
            + ","
            + this.state.debt_round
            + ","
            + this.state.e
            + ","
            + this.state.f
            + ","
            + this.state.g
            + ","
            + this.state.grant
            + ","
            + this.state.partial
            + ","
            + this.state.post_ipo_debt
            + ","
            + this.state.post_ipo_equity
            + ","
            + this.state.private_equity_two
            + ","
            + this.state.secondary_market
            + ","
            + this.state.seed
            + ","
            + this.state.unattributed
            + ","
            + this.state.number_of_invested_VCs
            + ","
            + this.state.total_investment_from_VCs
            + ","
            + this.state.year
            + ","
            + this.state.month
            + ","
            + this.state.day;
        console.log(startup_string);
        axios
            .post("https://qw16rmz5wa.execute-api.ap-southeast-1.amazonaws.com/api/startupvaluationprediction", {
                startup: startup_string
            })
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
                    "day": "",
                });
                console.log(res);
                this.props.setValuation(res.body.split("$")[1]);
            })
            .catch((err) => {
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
                    "day": "",
                });
                console.log(err);
                this.setState({errors: err});
            });
    }

    render() {
        return (
            <div className="form">
                <h2>Get Your Prediction!</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="input-field">
                        <label>Number of funding rounds</label>
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
                    <div className="input-field">
                        <label>Total funding received</label>
                        <input
                            className="input"
                            type="number"
                            name="funding_total_usd"
                            value={this.state.funding_total_usd}
                            onChange={this.onChange}
                            min={0}
                        ></input>
                    </div>
                    <div className="input-field">
                        <label>Number of members</label>
                        <input
                            className="input"
                            type="number"
                            name="number_of_members"
                            value={this.state.number_of_members}
                            onChange={this.onChange}
                            min={0}
                            step={1}
                        ></input>
                    </div>
                    <div className="input-field">
                        <label>Number of founders</label>
                        <input
                            className="input"
                            type="number"
                            name="number_of_founders"
                            value={this.state.number_of_founders}
                            onChange={this.onChange}
                            min={0}
                            step={1}
                        ></input>
                    </div>
                    <div className="input-field">
                        <label>Mean funding</label>
                        <input
                            className="input"
                            type="number"
                            name="mean_funding"
                            value={this.state.mean_funding}
                            onChange={this.onChange}
                            min={0}
                        ></input>
                    </div>
                    <div className="input-field">
                        <label>Max funding</label>
                        <input
                            className="input"
                            type="number"
                            name="max_funding"
                            value={this.state.max_funding}
                            onChange={this.onChange}
                            min={0}
                        ></input>
                    </div>
                    <div className="input-field">
                        <label>Crowdfunding received</label>
                        <input
                            className="input"
                            type="number"
                            name="crowdfunding"
                            value={this.state.crowdfunding}
                            onChange={this.onChange}
                            min={0}
                        ></input>
                    </div>
                    <div className="input-field">
                        <label>Post IPO funding</label>
                        <input
                            className="input"
                            type="number"
                            name="post_ipo"
                            value={this.state.post_ipo}
                            onChange={this.onChange}
                            min={0}
                        ></input>
                    </div>
                    <div className="input-field">
                        <label>Private equity</label>
                        <input
                            className="input"
                            type="number"
                            name="private_equity"
                            value={this.state.private_equity}
                            onChange={this.onChange}
                            min={0}
                        ></input>
                    </div>
                    <div className="input-field">
                        <label>Funding received through VCs</label>
                        <input
                            className="input"
                            type="number"
                            name="venture"
                            value={this.state.venture}
                            onChange={this.onChange}
                            min={0}
                        ></input>
                    </div>
                    <div className="input-field">
                        <label>Series A funding</label>
                        <input
                            className="input"
                            type="number"
                            name="a"
                            value={this.state.a}
                            onChange={this.onChange}
                            min={0}
                        ></input>
                    </div>
                    <div className="input-field">
                        <label>Series B funding</label>
                        <input
                            className="input"
                            type="number"
                            name="b"
                            value={this.state.b}
                            onChange={this.onChange}
                            min={0}
                        ></input>
                    </div>
                    <div className="input-field">
                        <label>Series C funding</label>
                        <input
                            className="input"
                            type="number"
                            name="c"
                            value={this.state.c}
                            onChange={this.onChange}
                            min={0}
                        ></input>
                    </div>
                    <div className="input-field">
                        <label>Series D funding</label>
                        <input
                            className="input"
                            type="number"
                            name="d"
                            value={this.state.d}
                            onChange={this.onChange}
                            min={0}
                        ></input>
                    </div>
                    <div className="input-field">
                        <label>Series E funding</label>
                        <input
                            className="input"
                            type="number"
                            name="e"
                            value={this.state.e}
                            onChange={this.onChange}
                            min={0}
                        ></input>
                    </div>
                    <div className="input-field">
                        <label>Series F funding</label>
                        <input
                            className="input"
                            type="number"
                            name="f"
                            value={this.state.f}
                            onChange={this.onChange}
                            min={0}
                        ></input>
                    </div>
                    <div className="input-field">
                        <label>Series G funding</label>
                        <input
                            className="input"
                            type="number"
                            name="g"
                            value={this.state.g}
                            onChange={this.onChange}
                            min={0}
                        ></input>
                    </div>
                    <div className="input-field">
                        <label>Funding received through angel investors</label>
                        <input
                            className="input"
                            type="number"
                            name="angel"
                            value={this.state.angel}
                            onChange={this.onChange}
                            min={0}
                        ></input>
                    </div>
                    <div className="input-field">
                        <label>Convertible</label>
                        <input
                            className="input"
                            type="number"
                            name="convertible"
                            value={this.state.convertible}
                            onChange={this.onChange}
                            min={0}
                        ></input>
                    </div>
                    <div className="input-field">
                        <label>Crowd</label>
                        <input
                            className="input"
                            type="number"
                            name="crowd"
                            value={this.state.crowd}
                            onChange={this.onChange}
                            min={0}
                        ></input>
                    </div>
                    <div className="input-field">
                        <label>Crowd equity</label>
                        <input
                            className="input"
                            type="number"
                            name="crowd_equity"
                            value={this.state.crowd_equity}
                            onChange={this.onChange}
                            min={0}
                        ></input>
                    </div>
                    <div className="input-field">
                        <label>Debt round funding</label>
                        <input
                            className="input"
                            type="number"
                            name="debt_round"
                            value={this.state.debt_round}
                            onChange={this.onChange}
                            min={0}
                        ></input>
                    </div>
                    <div className="input-field">
                        <label>Grant</label>
                        <input
                            className="input"
                            type="number"
                            name="grant"
                            value={this.state.grant}
                            onChange={this.onChange}
                            min={0}
                        ></input>
                    </div>
                    <div className="input-field">
                        <label>Partial</label>
                        <input
                            className="input"
                            type="number"
                            name="partial"
                            value={this.state.partial}
                            onChange={this.onChange}
                            min={0}
                        ></input>
                    </div>
                    <div className="input-field">
                        <label>Post IPO debt</label>
                        <input
                            className="input"
                            type="number"
                            name="post_ipo_debt"
                            value={this.state.post_ipo_debt}
                            onChange={this.onChange}
                            min={0}
                        ></input>
                    </div>
                    <div className="input-field">
                        <label>Post IPO equity</label>
                        <input
                            className="input"
                            type="number"
                            name="post_ipo_equity"
                            value={this.state.post_ipo_equity}
                            onChange={this.onChange}
                            min={0}
                        ></input>
                    </div>
                    <div className="input-field">
                        <label>Funding received through secondary market</label>
                        <input
                            className="input"
                            type="number"
                            name="secondary_market"
                            value={this.state.secondary_market}
                            onChange={this.onChange}
                            min={0}
                        ></input>
                    </div>
                    <div className="input-field">
                        <label>Seed funding</label>
                        <input
                            className="input"
                            type="number"
                            name="seed"
                            value={this.state.seed}
                            onChange={this.onChange}
                            min={0}
                        ></input>
                    </div>
                    <div className="input-field">
                        <label>Funding from unattributed sources</label>
                        <input
                            className="input"
                            type="number"
                            name="unattributed"
                            value={this.state.unattributed}
                            onChange={this.onChange}
                            min={0}
                        ></input>
                    </div>
                    <div className="input-field">
                        <label>Number of invested VCs</label>
                        <input
                            className="input"
                            type="number"
                            name="number_of_invested_VCs"
                            value={this.state.number_of_invested_VCs}
                            onChange={this.onChange}
                            min={0}
                        ></input>
                    </div>
                    <div className="input-field">
                        <label>Total investment from VCs</label>
                        <input
                            className="input"
                            type="number"
                            name="total_investment_from_VCs"
                            value={this.state.total_investment_from_VCs}
                            onChange={this.onChange}
                            min={0}
                        ></input>
                    </div>
                    <div className="input-field">
                        <label>Year</label>
                        <input
                            className="input"
                            type="number"
                            name="year"
                            value={this.state.year}
                            onChange={this.onChange}
                            min={0}
                        ></input>
                    </div>
                    <div className="input-field">
                        <label>Month</label>
                        <input
                            className="input"
                            type="number"
                            name="month"
                            value={this.state.month}
                            onChange={this.onChange}
                            min={0}
                        ></input>
                    </div>
                    <div className="input-field">
                        <label>Day</label>
                        <input
                            className="input"
                            type="number"
                            name="day"
                            value={this.state.day}
                            onChange={this.onChange}
                            min={0}
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