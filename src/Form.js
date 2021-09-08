import React from "react";
import {
  useHistory
} from "react-router-dom";

const Form = () => {
  let history = useHistory();

  function handleChange(e) {
    history.push(e.target.value);
  }

  return (
    <form autocomplete="off">
      <select onChange={handleChange} autocomplete="off">
        <option>-- Select a topic --</option>
        <option value="science-enquiry">Science Enquiry</option>
        <option value="science-skills-1">Science Skills 1</option>
        <option value="science-skills-2">Science Skills 2</option>
        <option value="lab-safety">Lab Safety</option>
      </select>
      <style jsx>{`
        select {
          font-size: 1.1rem;
          padding: 0.5rem 1rem;
        }
      `}</style>
    </form>
  )
}

export default Form;