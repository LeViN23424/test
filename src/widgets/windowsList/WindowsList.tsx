import { observer } from "mobx-react-lite"
import {calculateStore} from '../../store/'
import { OpeningCard } from "../../components"
import type { OpeningType } from "../../types"
export const WindowsList =observer(()=>{
    const store = calculateStore
    return store.windows.map((el:OpeningType)=>{
        return <OpeningCard key={el.id}  title='Окно' el={el}/>
    })
})