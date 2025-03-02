import { CalculateLayout,Select } from "../../components"
import { observer } from "mobx-react-lite"
import { calculateStore } from "../../store"
export const RollParameters =observer( ()=> {
    const store = calculateStore
    
    return  <CalculateLayout style={{gap:10}}  title="Параметры рулона">
        <Select style={{flex:1.5}}
                onClick={()=>store.switchRollParameter('1.06 x 10м')}
                disable={store.rollParameter !=='1.06 x 10м'}
                title='1.06 x 10м'
        />
        <Select style={{flex:2}}
                onClick={()=>store.switchRollParameter('1.06 x 25м')}
                disable={store.rollParameter!=='1.06 x 25м'}
                title='1.06 x 25м'
        />
    </CalculateLayout>
})