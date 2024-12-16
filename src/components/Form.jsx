import React from "react";
import "./Form.css";

function Form(props) {
  const { handleChange, handleSubmit, inputs } = props;

  return (
    <div>
      <div>
        <h2>Mortgage Calcultor</h2>
        <p>
          <a href="www.google.com">Clear All</a>
        </p>
      </div>

      {/* Form */}
      <form action="" onSubmit={handleSubmit}>
        <div>
          <p>Mortgage Amount</p>
          <div className="alternative">
            <div className="B_inverse B">
              <p>E</p>
            </div>
            <div className="A">
              <input
                type="numebr"
                name="amount"
                value={inputs.amount}
                placeholder=""
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>
        <div>
          <p>Mortgage Term</p>
          <div className="alternative">
            <div className="A">
              <input
                type="number"
                name="term"
                value={inputs.term}
                onChange={handleChange}
                placeholder=""
                required
              />
            </div>
            <div className="B">
              <p>years</p>
            </div>
          </div>
        </div>

        <div>
          <p>Interest Rate</p>
          <div className="alternative">
            <div className="A">
              <input
                type="text"
                placeholder=""
                step="0.01"
                name="interestRate"
                value={inputs.interestRate}
                onChange={handleChange}
                required
              />
            </div>
            <div className="B">
              <p>%</p>
            </div>
          </div>
        </div>

        <div>
          <p>Mortgage Type</p>
          <label className="Mortage_type_radio">
            <input
              type="radio"
              value="Repayemnt"
              name="type"
              checked={inputs.type === "Repayement"}
              onChange={handleChange}
              id=""
              placeholder="Repayemnt"
            />
            <p>Repayment</p>
          </label>
          <label className="Mortage_type_radio">
            <input
              type="radio"
              name="type"
              value="interestOnly"
              checked={inputs.type === "interestOnly"}
              onChange={handleChange}
              id=""
              placeholder="Repayemnt"
            />
            <p>Interest Only</p>
          </label>
        </div>

        <div>
          <button className="Calculate_Repayment" type="submit">
            <p>Calculate Repayments</p>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;

/* <div>
          <p>mortgage Amount</p>
          <input
            type="text"
            placeholder="E"
            className="form_input_Amount form_input"
          />
        </div> */

/* <div>
          <div>
            <p>Mortgage Term</p>
            <input type="text" placeholder="Years" className="form_input" />
          </div>

          <div>
            <p>Intrest Rate</p>
            <input type="text" placeholder="%" className="form_input" />
          </div>
        </div> */
