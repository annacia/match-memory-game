import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

const Timer = (props) => {
    const { stop, actionOnStop } = props

    const [time, setTime] = useState("00:00:00")
    const [second, setSecond] = useState(0)
    const [minute, setMinute] = useState(0)
    const [hour, setHour] = useState(0)
    const [saved, setSaved] = useState(false)

    const [delay, setDelay] = useState(1000)

    useEffect(() => {
        if (stop && !saved) {
            setDelay(null)
            actionOnStop(time)
            setSaved(true)
        }
    }, [stop, saved, actionOnStop, time])

    const numberFormat = (number) => {
        let numberString = number + ""

        if (numberString.length < 2) {
            return "0"+numberString
        }

        return numberString
    } 

    useInterval(() => {
        let hours = hour
        let minutes = minute
        let seconds = second + 1
        setSecond(seconds)
        
        if (seconds >= 60) {
            minutes++
            seconds = 0
            
            setSecond(0)
            setMinute(minutes)
        }
        
        if (minutes >= 60) {
            hours++
            minutes = 0
            seconds = 0
            
            setSecond(0)
            setMinute(0)
            setHour(hours)
        }
        
        let timeString = numberFormat(hours) + ":" + numberFormat(minutes) + ":" + numberFormat(seconds)
        setTime(timeString)    
    }, delay);

    return (<>{time}</>) 
}

function useInterval (callback, delay) {
    const savedCallback = useRef();
  
    useEffect(() => {
        savedCallback.current = callback;
    });
  
    useEffect(() => {
        function tick() {
            savedCallback.current();
        }

        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}

Timer.propTypes = {
    stop: PropTypes.bool,
    actionOnStop: PropTypes.func.isRequired
}

export default Timer