import { observer } from "mobx-react-lite"
import { calculateStore } from "../../store"
import styles from './Result.module.css'
import { Title } from "../../components"
import { Link } from "react-router"
import { forwardRef } from "react"
export const Result =observer( forwardRef<HTMLDivElement>((_,ref)=>{
    const store = calculateStore
    return <div ref={ref} className={styles.wrapper}>
        <div className={styles.resultsWrapper}>
            <Title level={1} label="Результаты" style={{color:'white'}}/>
            <div className={styles.resultsInfo}>
                <div className={styles.result}>
                    <p className={styles.resulTitle}>{store.rollQuantity}</p>
                    <p className={styles.resultDescription}>Кол-во рулонов</p>
                </div>
                <div className={styles.result}>
                    <p className={styles.resulTitle}>{store.wallpaperSquare} м2</p>
                    <p className={styles.resultDescription}>Кол-во m2 обоев</p>
                </div>
                <div className={styles.result}>
                    <p className={styles.resulTitle}>{store.areaPasting} м2</p>
                    <p className={styles.resultDescription}>Площадь оклейки</p>
                </div>
            </div>
            <div className={styles.buttonWrapper}>
                <button className={`${styles.button} ${styles.buttonPurple}`} onClick={()=>store.resetCalculateResult()}> Сбросить параметры</button>
                <Link to='/' className={`${styles.button}  ${styles.buttonGreen}`}>Перейти в каталог</Link>
            </div>
        </div>
    </div>
}))