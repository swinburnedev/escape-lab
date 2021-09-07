import { useEffect, useState } from 'react';

const Passcode = ({secret}) => {
  const [code, setCode] = useState();
  const [correct, setCorrect] = useState();
  const checkCode = (e) => {
    e.preventDefault();
    setCorrect(code === secret)
  }

  const handleChange = e => {
    const userCode = parseInt(e.target.value);
    setCode(userCode);
  }

  const showMessage = () => {
    if (correct === undefined) return null; 
    return correct ? <p>Congratulations, you escpaed the lab!</p> : <p>Incorrect, please try again.</p>
  }
    
  return (
    <>
      <form onSubmit={checkCode}>
        <label htmlFor="passcode">Enter code:</label>
        <input
          id="passcode"
          type="text"
          name="passcode"
          placeholder="******"
          onChange={handleChange}
          maxLength="6"
        />
        <button type="submit">Submit</button>
        { showMessage() }
        <style jsx>{`
          label {
            margin-right: 0.25rem;
          }
          input {
            display: block;
            letter-spacing: 8px;
            width: 100px;
          }
          input, button {
            margin: 0.5rem auto;
            padding: 0.5rem 1rem;
          }
          button {
            background-color: #61DAFB;
            border: none;
            color: #282c34;
            curson: pointer;
            font-size: 1rem;
            font-weight: 700;
          }
          p {
            font-size: 1.2rem;
            font-weight: 700;
          }
      `}</style>
      </form>
    </>
  )
}
export default Passcode;