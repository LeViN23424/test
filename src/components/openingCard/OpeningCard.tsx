import { observer } from "mobx-react-lite"
import { OpeningLayout,Cross,Input } from "../../components"
import styles from './OpeningCard.module.css'
import {calculateStore} from '../../store'
import { OpeningType } from "../../types"
interface Props {
    el : OpeningType
    title:'Окно'|"Дверь"
}
export const OpeningCard = observer(({el,title}:Props)=>{
    const store = calculateStore
    return <OpeningLayout className={styles.wrapper} key={el.id}>
    <div className={styles.cardHeader}>
        <p className={styles.cardTitle}>{title}</p>
        <button type="button" onClick={()=>{
            if(title==='Окно'){
                store.removeWindow(el.id)
            }else {
                store.removeDoor(el.id)
            }
        }}>
            <Cross/>
        </button>
    </div>
    <div className={styles.inputWrapper}>
         <label className={styles.inputLabel}>
            Высота м
            <Input
                placeholder='0'
                onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
                    if(!isNaN(Number(e.target.value))){
                        if(title==='Окно') {
                            store.setWindowData(el.width,+e.target.value,el.id)
                        }else {
                            store.setDoorData(el.width,+e.target.value,el.id)
                        }
                    }
                    
                }} 
                value={el.height.toString()}
                className ={styles.input}
                style={{width:"70%"}}
            />
        </label>
        <label className={styles.inputLabel}>
            Ширина м 
            <Input 
                placeholder='0'
                onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
                    if(!isNaN(Number(e.target.value))){
                        if(title ==='Окно'){
                            store.setWindowData(+e.target.value,el.height,el.id)
                        }else {
                            store.setDoorData(+e.target.value,el.height,el.id)
                        }
                    }
                }} 
                value={el.width.toString()}
                style={{width:"70%"}}
            />
        </label>
    </div>
</OpeningLayout>
})