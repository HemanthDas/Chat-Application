import React, { useState } from 'react';

const Tweet = () => {
  const [tweet, setTweet] = useState('');

  const handleInputChange = (e) => {
    setTweet(e.target.value);
  };

  const handleTweetSubmit = () => {
    console.log(tweet);
  };

  return (
    <div>
      <input type="text" value={tweet} onChange={handleInputChange} />
      <button onClick={handleTweetSubmit}>Tweet</button>
    </div>
  );
};

export default Tweet;
