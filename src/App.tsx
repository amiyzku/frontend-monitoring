import { useState } from 'react';

const App = () => {
  const [postalCode, setPostalCode] = useState('');
  const [result, setResult] = useState('');

  const clickHandler = async () => {
    setResult('');
    const baseUrl = 'https://zipcloud.ibsnet.co.jp/api/search';
    const url = `${baseUrl}?zipcode=${postalCode}`;
    await fetch(url, { method: 'GET' }).then(async res => {
      let text = await res.text();
      setResult(text);
    });
  };

  const throwError = () => {
    console.error('throwError()');
    throw new Error('throwError()');
  };

  return (
    <>
      <div>Search Postal Code</div>
      <input
        value={postalCode}
        onChange={event => setPostalCode(event.target.value)}
      />
      <button onClick={clickHandler}>検索</button>
      <button onClick={throwError}>raise Error</button>

      <pre>{result}</pre>
    </>
  );
};

export default App;
