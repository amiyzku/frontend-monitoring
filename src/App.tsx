import { useState } from 'react';
import Metrics from './Metrics';

const App = () => {
  const [postalCode, setPostalCode] = useState('');
  const [body, setBody] = useState('');

  const clickHandler = async () => {
    setBody('');
    const baseUrl = 'https://zipcloud.ibsnet.co.jp/api/search';
    const url = `${baseUrl}?zipcode=${postalCode}`;
    await fetch(url, { method: 'GET' }).then(async res => {
      let text = await res.text();
      setBody(text);
    });
  };

  return (
    <>
      <div>Search Postal Code</div>
      <input
        value={postalCode}
        onChange={event => setPostalCode(event.target.value)}
      />
      <button onClick={clickHandler}>検索</button>
      <button
        onClick={() => {
          throw new Error('Hello world');
        }}
      >
        Error
      </button>

      <pre>{body}</pre>

      <hr />
      <Metrics />
    </>
  );
};

export default App;
