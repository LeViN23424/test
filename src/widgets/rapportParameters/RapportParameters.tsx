import { CalculateLayout,Select } from "../../components"
import { calculateStore } from "../../store"
import { observer } from "mobx-react-lite"
export const RapportParameters =observer(()=> {
    const store = calculateStore
    return  <CalculateLayout style={{gap:10}}  title="Раппорт">
        <Select style={{flex:1.5}}
                onClick={()=>store.switchRapportParameter('0')}
                disable={store.rapportParameter!=='0'}
                title='0'/>
        <Select style={{flex:2}}
                onClick={()=>store.switchRapportParameter('0.32м')}
                disable={store.rapportParameter!=='0.32м'}
                title='0.32м'/>
        <Select style={{flex:3}} 
                onClick={()=>store.switchRapportParameter('0.64м')}
                disable={store.rapportParameter!=='0.64м'}
                title='0.64м'/>
    </CalculateLayout>
})