// @flow 
import React, {useState ,useEffect,useRef} from 'react';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
        counter : {
            display:"flex",
            flexDirection : "row",
            justifyContent : "space-between",
            fontSize: 22,
            position : "relative",
            
            bottom : "250px"

        }
}));
const GeriSayim = () => {

    const classes = useStyles();

    const [date , setDate ] = useState(()=> {
        let ndate = new Date("2021-01-01");
        return ndate;

    });
    const [days , setDays ] = useState("00");
    const [hour , setHour ] = useState("00");
    const [minutes , setMinutes ] = useState("00");
    const [seconds , setSeconds ] = useState("00");

    let interval = useRef();

    useEffect(()=>{
        newYearDate();

        return clearInterval(interval.current);

    },[date])

    const newYearDate = () => {
        interval = setInterval(() =>{
            const now = moment();
            const dateDistance = date - now ;
            const day = moment.duration(dateDistance).days();
            const hour = moment.duration(dateDistance).hours();
            const minute = moment.duration(dateDistance).minutes();
            const second = moment.duration(dateDistance).seconds();

            if(dateDistance<0 )
            {
                clearInterval(interval.current);
            }
            else
            {
                setDays(day);
                setHour(hour);
                setMinutes(minute);
                setSeconds(second);
            }

        },1000)


    }
    
    return (
        <div className={classes.counter}>
          
            <div>
                <h1  style={{marginBottom :-3}}>{days}</h1>
                <span>Days</span>
            </div>
            <div>
                <h1  style={{marginBottom :-3}}>{hour}</h1>
                <span>Hours</span>
            </div>
            <div>
                <h1  style={{marginBottom :-3}}>{minutes}</h1>
                <span>Minutes</span>
            </div>
            <div>
                <h1  style={{marginBottom :-3}}>{seconds}</h1>
                <span>Seconds</span>
            </div>
        </div>
    );
};

export default GeriSayim;

