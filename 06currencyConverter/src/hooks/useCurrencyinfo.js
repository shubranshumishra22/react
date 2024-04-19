import {useEffect, useState} from "react"

function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json')
    
    .then((res) => res.json())
    .then((res) => setData(res))
    //using useEffect bc the method gets avoked when component is changed
    },[currency])

    return data
}

//returning the whole method
export default useCurrencyInfo;