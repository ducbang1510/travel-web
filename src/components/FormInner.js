import React from "react";

export default class FormInner extends React.Component {
    render() {
        return (
            <>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Where to?"
                        value={this.props.fieldWhere}
                        onChange={this.props.change}
                    />
                </div>
                <div className="form-group input-date">
                    <i className="fas fa-angle-down" />
                    <input
                        type="text"
                        placeholder="When?"
                        value={this.props.fieldDate}
                        id="datepicker"
                    />
                </div>
                <div className="form-group">
                    <i className="fas fa-angle-down" />
                    <div className="select-box">
                        <select className="wide">
                            <option data-display="Travel Type">Travel Type</option>
                            <option value={1}>Adventure Tours</option>
                            <option value={2}>City Tours</option>
                            <option value={3}>Couple Tours</option>
                            <option value={4}>Group Tours</option>
                        </select>
                    </div>
                </div>
                <div className="message-btn">
                    <button type="submit" className="theme-btn">
                        <i className="fas fa-search" />
                        Find Now
                    </button>
                </div>
            </>
        )
    }
}