import React, {useEffect} from "react";

const Word = props => {

    const {word} = props;

    let isWord = isNaN(word)
    console.log(isWord)

    useEffect(() => {
        console.log("Word Rendered")
    },[])

    return(

        <div>
            {
                (isWord)
                ?
                <h1>This is your word! {word}</h1>
                :
                <h1>This is your number! {word}</h1>
            }
        </div>
    )
}

export default Word