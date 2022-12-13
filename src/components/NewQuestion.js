import { useState, useEffect } from "react";

export default function NewQuestion(props) {
    const url = `http://jservice.io/api/random`
    
    const [question, setQuestion] = useState("null");
    
    const [hide, setHide] = useState(false)

    const ShowAnswer = () =>{
        setHide(toggle => !toggle)
    }

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
                <h2>Question: {question[0].question}</h2>
                <h3>Category: {question[0].category.title}</h3>
                <h3>Points: {question[0].value}</h3>
                {hide &&
                    <h3 id="Answer">Answer: {question[0].answer}</h3>}
                <br />
                <button>Show Question</button>
                <button onClick={ShowAnswer}>Show Answer</button>
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