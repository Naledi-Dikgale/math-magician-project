import React, { useEffect, useState } from 'react';

const url = 'https://api.api-ninjas.com/v1/quotes?category=happiness';
// const key = process.env.REACT_APP_API_KEY;
const key = '8vgtGjPJ3/jWLwKlMNabtA==TWkGU7kOUsOCdARG';

function Quotes() {
  const [quote, displayQuotes] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url, {
      headers: {
        'X-Api-Key': key,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        displayQuotes(data[0].quote);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading === true) {
    return (
      <div className="quotes">
        {' '}
        <p>Loading...</p>
      </div>
    );
  } if (error) {
    return (
      <div className="quotes">

        <p>
          Error:
          {error.message}
        </p>

      </div>
    );
  }

  return <div className="quotes"><p>{quote}</p></div>;
}

export default Quotes;
