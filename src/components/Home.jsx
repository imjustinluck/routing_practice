import React, {useEffect} from "react";

const Home = props => {

    useEffect(() => {
        console.log("Home Rendered")
    },[])

    return(
        <h1>Welcome!</h1>
    )
}

export default Home