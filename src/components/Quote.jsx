import { useState } from "react";

function Quote() {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const getQuote = async () => {
    try {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      setData(data);
    } catch (error) {
      setError(error);
    }
  };

  const handleSubmit = () => {
    getQuote();
  };

  const handleReset = () => {
    setError("");
    setData(null);
  };
  return (
    <div className="container">
      <h1>Quote Generator</h1>
      {error && <p>{error}</p>}
      {data && <div className="quote-msg">
        <p className="quote">{data.content}</p>
        <p className="author">{data.author}</p>
        </div>}
      <input type="submit" value="Get Quote" onClick={handleSubmit} />
      <input type="reset" value="Clear" onClick={handleReset} />
    </div>
  );
}

export default Quote;
