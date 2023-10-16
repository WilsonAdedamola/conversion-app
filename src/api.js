
// // export const options = {
// //     method: 'GET',
// //     url: 'https://currency-conversion-and-exchange-rates.p.rapidapi.com/latest',
// //     params: {
// //       from: 'USD',
// //       to: 'EUR,GBP'
// //     },
// //     headers: {
// //       'X-RapidAPI-Key': 'ba70985e08mshe4561ea49192398p1534b8jsn7871f9c11a8b',
// //       'X-RapidAPI-Host': 'currency-conversion-and-exchange-rates.p.rapidapi.com'
// //     }
// //   };
  

// import React from 'react'
// import { useEffect, useState } from "react";


// const api = () => {

//     const [state, setState] = useState([]);

//     useEffect(() => {
//       getData();
//     }, []);
  
//     const getData = async () => {
//       // const getData = await axios.get('https://fakestoreapi.com/products')
//       // return getData.data
//       // setState(getData.data)
//       //   console.log(getData.data);
  
//       // try {
//       //   const response = await axios.request(options);
//       //   console.log(response.data);
//       //   setState(response.data)
//       // } catch (error) {
//       //   console.error(error);
//       // }
  
//       // const url =
//       //   "https://currency-conversion-and-exchange-rates.p.rapidapi.com/latest?from=USD&to=EUR%2CGBP";
//       // const options = {
//       //   method: "GET",
//       //   headers: {
//       //     "X-RapidAPI-Key": "ba70985e08mshe4561ea49192398p1534b8jsn7871f9c11a8b",
//       //     "X-RapidAPI-Host":
//       //       "currency-conversion-and-exchange-rates.p.rapidapi.com",
//       //   },
//       // };
  
//       // try {
//       //   const response = await fetch(url, options);
//       //   const result = await response.json();
//       //   // console.log(result.rates);
//       //   // console.log(result.rates.ANG);
//       //   setState(result.rates);
//       //   const item = [state];
//       //   console.log(item);
//       //   console.log(item[0]);
//       // } catch (error) {
//       //   console.error(error);
//       // }
  
//       // const url = 'https://currency-conversion-and-exchange-rates.p.rapidapi.com/symbols';
//       // const options = {
//       //   method: 'GET',
//       //   headers: {
//       //     'X-RapidAPI-Key': 'ba70985e08mshe4561ea49192398p1534b8jsn7871f9c11a8b',
//       //     'X-RapidAPI-Host': 'currency-conversion-and-exchange-rates.p.rapidapi.com'
//       //   }
//       // };
      
//       // try {
//       //   const response = await fetch(url, options);
//       //   const result = await response.json();
//       //   console.log(result);
//       // } catch (error) {
//       //   console.error(error);
//       // }
  
//       const url = 'https://real-time-financial-news-and-sentiments.p.rapidapi.com/news/rapidapi?page=1&limit=8&ticker=C%3AEUR';
//   const options = {
//       method: 'GET',
//       headers: {
//           'X-RapidAPI-Key': 'ba70985e08mshe4561ea49192398p1534b8jsn7871f9c11a8b',
//           'X-RapidAPI-Host': 'real-time-financial-news-and-sentiments.p.rapidapi.com'
//       }
//   };
  
//   try {
//       const response = await fetch(url, options);
//       const result = await response.json();
//       console.log(result);
//     setState(result)
//   } catch (error) {
//       console.error(error);
//   }
  
//     };

//   return (
//     <div>
      
//     </div>
//   )
// }

// export default api

  