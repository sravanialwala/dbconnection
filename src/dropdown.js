import React, { Component } from "react";

class DropDown extends Component {
  state = {
    selectedValue: "noPaymentMethod"
  };

  handleSelectValue = event => {
    this.setState({
      selectedValue: event.target.value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    console.log("You have submitted:", this.state.selectedValue);
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 mt-5 mb-5">
            <h2 className="mb-4">Payment</h2>
            <form onSubmit={this.handleFormSubmit}>
              <div className="form-group">
                <label htmlFor="paymentMethod">Payment method</label>
                <select
                  value={this.state.selectedValue}
                  onChange={this.handleSelectValue}
                  className="form-control"
                  id="paymentMethod"
                >
                  <option value="noPaymentMethod">Select payment method</option>
                  <option value="creditCard">Credit Card</option>
                  <option value="debitCard">Debit Card</option>
                  <option value="bankTransfer">Bank Transfer</option>
                </select>
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={this.state.selectedValue === "noPaymentMethod"}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default DropDown;
