import { useEffect, useState } from 'react'
import styles from './QueryScreen.module.css'
import requestQuery from './requestQuery'
const QueryScreen = () => {
    const [numQuery, setNumQuery] = useState(1)
    const [query, setQuery] = useState('aaaaaaaa')
    const [time, setTime] = useState(0)
    const [vtime, setVtime] = useState(240)
    useEffect(()=>{
        const intervTime = setInterval(()=>{
          if (vtime>0)
          setVtime(prevTime => prevTime - 1)
        },1000)
        return ()=>{
          clearInterval(intervTime)
        }
    },[])
    useEffect(() => {
        const interval = setInterval(() => {
          setTime(prevTime => prevTime + 30);
        }, 30000);
        
        return () => {
          clearInterval(interval);
        };
      }, [])
    useEffect(()=>{
        if (time < 240)
        {
            requestQuery(numQuery,setQuery)
        }
        else
        {
            if (time<300){
              setQuery('1 phút bắt đầu câu tiếp theo')
            }
            else {
              setTime(0)
              setVtime(240)
              setNumQuery(pre=>pre+1)
            }
        }
        
    },[time])
    return (
        <div className={styles.mainContainer}>
           <div className={styles.title}>Query {numQuery}</div>
           <div className={styles.vtime}>Remain: {vtime}s</div>
           <div className={styles.query}>{query}</div>
        </div>
    )
}
export default QueryScreen