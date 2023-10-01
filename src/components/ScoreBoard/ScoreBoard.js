import styles from './ScoreBoard.module.css'
import { useState, useEffect } from 'react'


const ScoreBoard = () => {
    const [data, setData] = useState(Math.random())

    useEffect(() => {
        const timeId = setTimeout(() => {
            setData(Math.random())
        }, 1000)
    
        return () => clearInterval(timeId)
    }, [data])
    

    return (
        <div className={styles.mainContainer}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <h1 className={styles.stt}>1</h1>
                    <h1 className={styles.name}>Team 1</h1>
                    <span className={styles.score}>200</span>
                </li>
                <li className={styles.item}>
                    <h1 className={styles.stt}>2</h1>
                    <h1 className={styles.name}>Team 2</h1>
                    <span className={styles.score}>300</span>
                </li>
                <li className={styles.item}>
                    <h1 className={styles.stt}>3</h1>
                    <h1 className={styles.name}>Team 3</h1>
                    <span className={styles.score}>400</span>
                </li>
                <li className={styles.item}>
                    <h1 className={styles.stt}>4</h1>
                    <h1 className={styles.name}>Team 4</h1>
                    <span className={styles.score}>500</span>
                </li>
                <li className={styles.item}>
                    <h1 className={styles.stt}>5</h1>
                    <h1 className={styles.name}>Team 5</h1>
                    <span className={styles.score}>600</span>
                </li>
            </ul>
            <h1>{data}</h1>
        </div>
    )
}
export default ScoreBoard