import { useState } from "react";

function DisplayForm({ setyearlyData }) {
  let [userInput, setuserInput] = useState({
    "current-savings": "",
    "yearly-contribution": "",
    "expected-return": "",
    'duration': "",
  });

  function handleChange(identifier, value) {
    setuserInput((prevstate) => {
      return {
        ...prevstate,
        [identifier]: value,
      };
    });
  }

  const calculateHandler = (e) => {
    e.preventDefault();
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    const yearlyData = []; // per-year results

    let currentSavings = +userInput["current-savings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    console.log(currentSavings, yearlyContribution, expectedReturn, duration);

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

    setyearlyData(yearlyData);
    // do something with yearlyData ...
  };

  function reset() {
    setyearlyData([]);
  }

  return (
    <form className="form" onSubmit={calculateHandler}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            required
            value={userInput["current-savings"]}
            onChange={(e) => handleChange("current-savings", e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            required
            value={userInput["yearly-contribution"]}
            onChange={(e) =>
              handleChange("yearly-contribution", e.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            required
            value={userInput["expected-return"]}
            onChange={(e) => handleChange("expected-return", e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            required
            value={userInput.duration}
            onChange={(e) => handleChange("duration", e.target.value)}
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt" onClick={reset}>
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
}

export default DisplayForm;
