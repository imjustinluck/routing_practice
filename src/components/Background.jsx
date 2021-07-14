import React, {useEffect} from "react";

const Background = props => {

    const {word, color, bgColor} = props;

    let isWord = isNaN(word)
    console.log(isWord)
    console.log(color)
    console.log(bgColor)

    useEffect(() => {
        console.log("Background Rendered")
    },[])

    return(
        <div>
            {
                (isWord)
                ?
                <h1 style={{
                    color:`${color}`,
                    backgroundColor:`${bgColor}`}}>This is your word! {word}</h1>
                :
                <h1 style={{
                    color:`${color}`,
                    backgroundColor:`${bgColor}`}}>This is your number! {word}</h1>
            }
        </div>
    )
}

export default Background