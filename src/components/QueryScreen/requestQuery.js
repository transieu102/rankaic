const requestQuery = async (numQuery, setQuery) => {
    try {
      const response = await fetch('http://127.0.0.1:8000/query', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ numQuery }),
      });
      const data = await response.json();
      setQuery(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };
export default requestQuery