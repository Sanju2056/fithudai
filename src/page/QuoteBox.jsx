import { useEffect, useState } from "react";
import quotes from  "../../static/index" // make sure your quotes array is exported from this file

const QuoteBox = () => {
  const [currentQuote, setCurrentQuote] = useState("");

  useEffect(() => {
    // function to get random quote
    const getRandomQuote = () => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      return quotes[randomIndex];
    };

    // set initial quote
    setCurrentQuote(getRandomQuote());

    // change quote every 60 seconds
    const interval = setInterval(() => {
      setCurrentQuote(getRandomQuote());
    }, 60000);

    // cleanup
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" rounded-2xl text-center max-w-md mx-auto">
      <p className="font-medium leading-relaxed">
        "{currentQuote}"
      </p>
    </div>
  );
};

export default QuoteBox;