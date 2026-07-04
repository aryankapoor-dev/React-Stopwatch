import React, { useRef, useState } from "react";
import ReactDOM from "react-dom/client"

function Stopwatch(){
    const [second, setSecond] = useState(0)
    const [minute, setMinute] = useState(0)
    const [hour, setHour] = useState(0)
    const secondRef = useRef(null)
    const minuteRef = useRef(null)
    const hourRef = useRef(null)
    function Start(){
        secondRef.current = setInterval(()=>{
            
            setSecond((prevSecond)=>{
                if(prevSecond==59){
                    prevSecond=-1
                }
                return prevSecond+1})
        },1000)
        minuteRef.current = setInterval(()=>{
            
            setMinute((prevMinute)=>{
                if(prevMinute==59){
                    prevMinute=-1
                }
                return prevMinute+1})
        },60000)
        hourRef.current = setInterval(()=>{
            
            setHour((prevHour)=>{
                if(prevHour==23){
                    prevHour=-1
                }
                return prevHour+1})
        },3600000)
    }
    function Stop(){
        clearInterval(secondRef.current)
        secondRef.current = null
        clearInterval(minuteRef.current)
        minuteRef.current = null
        clearInterval(hourRef.current)
        hourRef.current = null
    }
    function Reset(){
        setSecond(0)
        setMinute(0)
        setHour(0)
    }
    function formatTime(value){
        if(value<10){
            return `0${value}`;
        }
        return value;
    }
    return (
        <>
            <h1>Stop Watch</h1>
            <h2>{formatTime(hour)}:{formatTime(minute)}:{formatTime(second)}</h2>
            <div>
                <button onClick={Start}>Start</button>
                <button onClick={Stop}>Stop</button>
                <button onClick={Reset}>Reset</button>
            </div>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Stopwatch/>)