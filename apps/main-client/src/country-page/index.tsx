import React, { useEffect, useState } from "react"
import axios from "axios"
// import CountryCard from "../country-card";
const baseUrl = "http://localhost:4000/countries";

export default function CountryPage() {
    const initState: Array<any> = [];
    const [countries, setCountries] = useState<Array<any>>(initState)
    const [counter, setCounter] = useState(1)
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        const getCountries = async () => {
            try {
                setIsLoading(true)
                const result = await axios.get(baseUrl)
                const { data } = result;
                const countries = data?.result?.result
                if (Array.isArray(countries)) {
                    setCountries(countries)
                } else {
                    throw new Error()
                }

            } catch (error) {
                alert("Something went wrong")
            } finally {
                setIsLoading(false)
            }
        }
        getCountries()
        return () => {
            // when this function will run?
            console.log("Component clean up is running - eqv to angular on destroy")
        }
    }, [counter])

    return <div>
        <h1> Countries <ButtonCounter /> </h1>
        <div style={{ width: "200px", margin: "auto auto " }}>
            <CoolSpinner showLoader={isLoading} />
        </div>
        <div>
            <CountriesList showLoader={isLoading} countries={countries} />
        </div>
    </div>

    function ButtonCounter() {
        return (<button onClick={() => {
            setCounter(counter + 1)
        }}> get {counter}</button>)
    }
}

function CoolSpinner(props: { showLoader: boolean }) {
    return props.showLoader ? <div className="loader"> </div> : null
}
function CountriesList(props: { countries: Array<any>, showLoader: boolean }) {
    return <div>
        {
            !props.showLoader && props.countries.map((c, index) => {
                // return <CountryCard key={index} flag={c?.flags?.svg} name={c?.name?.common} region={c.region} />
            })
        }
    </div>
}