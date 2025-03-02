import { observer } from "mobx-react-lite"
import {calculateStore} from '../../store'
import { OpeningCard } from "../../components"
import type { OpeningType } from "../../types"
export const DoorsList =observer(()=>{
    const store = calculateStore
    return store.doors.map((el:OpeningType)=>{
        return <OpeningCard key={el.id} title='Дверь' el={el}/>
    })
})