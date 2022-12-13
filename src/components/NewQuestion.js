import { useState, useEffect } from "react";

export default function NewQuestion(props) {
    const url = `http://jservice.io/api/random`

    const [question, setQuestion] = useState("null");

    const getQ = async () => {
        try {
            const response = await fetch(url)
            const data = await response.json()
            setQuestion(data)
        } catch (err) {
            console.error(err)
        }
    }

    const handleClick = (evt) => {
        evt.preventDefault()
        getQ()
    }

    useEffect(() => {
        getQ()
    }, [])

    const loaded = () => {
        return (
            <div>
                <button onClick={handleClick}>New Question</button>
                <h3>Category: {console.log(question[0])}</h3>
                <h3>Points: {question[0].value}</h3>
                <h3>Answer: {question[0].answer}</h3>
                <br />
                <button>Show Question</button>
            </div>
        )
    }

    const loading = () => {
        return (
            <h1>Loading.....</h1>
        )
    }
    return (
        question ? loaded() : loading()
    )
}