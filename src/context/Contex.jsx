import { createContext, useState } from "react";
import runChat from "../Config/gemini";

export const Context = createContext()

const ContextProvider = (props)=>{

    const [input , setInput] = useState('');
    const [recentPrompt, setRecentPormpt] = useState('');
    const [prevPrompts, setPrevPrompts] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");

    const onSent = async (prompt ) =>{
        await runChat(input)
    }

    onSent("What is react js?")
    const contextValue = {
        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentPormpt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput
    }
    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;