import { useParams } from "react-router-dom" //this is importing a hook
import { useState, useEffect } from "react";

const Price = () => {
    const [coin, setCoin] = useState(null)

    // 2. use the useEffect hook to make an api call
    useEffect(() => {
        getCoin()
    }, [])

    // 1.store the apikey and currency symbol in different variables
    const apiKey = 'E1CD9E05-BC47-42C7-BA62-0FDE5C237B34';
    
     // return an object with the matching URL params
    //storing the apikey and currency symbol in different variables in the price component
    const params = useParams() //this is bringing in the hook

   // 3. interpolate the apikey and symbol in the fetch URL
    const url = `http://rest-sandbox.coinapi.io/v1/exchangerate/${params.symbol}/USD?apikey=${apiKey}`

    //fetching the coin data
    const getCoin = async () => {
        try {
            //making the fetch request
            const res = await fetch(url)
            const data = await res.json()
            // 4. save the resulting data in state and render it
            setCoin(data)
        }   catch (error) {
            console.log(error)
        }
    }

    // 5. ====Rendering Data ====
    // If data is loaded
    const loaded = () => {
        return (
          <div>
            <h1>
              {coin.asset_id_base}/{coin.asset_id_quote}
            </h1>
            <h2>{coin.rate}</h2>
          </div>
        );
      };

    // If data is still loading
    const loading = () => {
        return <h1>Loading...</h1>;
      };

    return(
        <div>
            <h1>Price Page</h1>
            {/* if coin has data, run the loaded function, otherwise, run loading */}
            {coin && coin.rate ? loaded() : loading()}
        </div>
    )
}

export default Price