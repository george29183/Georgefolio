import React, { useState, useEffect } from 'react'

export default function Custom(){
  const [dummyData, setDummyData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products?limit=0');
        if (response.ok) {
          const data = await response.json();
          setDummyData(data);
        } else {
          console.error('Failed to fetch dummy data');
        }
      } catch (error) {
        console.error('Error fetching dummy data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once, equivalent to componentDidMount

  return (
    <div>
      <h1>Dummy JSON Example</h1>
      {dummyData ? (
        <pre>{JSON.stringify(dummyData, null, 2)}</pre>
      ) : (
        <p>Loading dummy data...</p>
      )}
    </div>
  );
}

