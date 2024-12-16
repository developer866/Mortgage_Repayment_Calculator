import React from "react";

function Result(props) {
   const {Result} = props
  return (
    <div>
      <h2>Your Results</h2>
      <p>
        Your results are shown below based on the information you provided. To
        adjust the result, edit the form and click "calculate repayments" again{" "}
      </p>
      <div>
        <p>Your montly Repayments</p>
        <h2>E{Result.monthlyRepaayment}</h2>
        <hr />
        <p>Total you will repay over the term</p>
        <h2>{Result.totalRepayment}</h2>
      </div>
    </div>
  );
}

export default Result;
