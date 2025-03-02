import { useForm, SubmitHandler } from "react-hook-form"
import { CalculateLayout,Cross,OpeningLayout ,File,Button} from "../../components"
import { Wrapper } from "../../components"
import { useRef } from "react"
import styles from './Calculator.module.css'
import { RapportParameters, RollParameters ,WindowsList,DoorsList,Result, RoomInputs} from "../../widgets"
import { Link } from "react-router"
import { calculateStore } from "../../store"
import {observer} from 'mobx-react-lite'
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
gsap.registerPlugin(useGSAP)
interface Inputs {
    width:string,
    height:string,
    length:string,
}
export const Calculator = observer( ()=>{
    const wrapperRef = useRef<HTMLDivElement>(null)
    const submitBtnRef = useRef<HTMLDivElement>(null)
    const resultRef = useRef<HTMLDivElement>(null)
    useGSAP(() => {
        gsap.timeline()
            .fromTo(wrapperRef.current,{y:'100%'}, { y:0,duration:1},)
    });
    const store = calculateStore
    
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<Inputs>()
      const onSubmit:SubmitHandler<Inputs> = (data) => {
        const results= {...data,doors:store.doors,windows:store.windows,roll:store.rollParameter,rapport:store.rapportParameter}
        store.calculateResult(results)
      }
    
    return <Wrapper >
        <div ref={wrapperRef} className={styles.wrapper}>
           
            <div className={styles.inputs}>
                <div className={styles.arrow}>
                    <Link to="/"><Cross/></Link>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <RoomInputs register={register} errors={errors}/>
                    <div className={styles.rollParamWrapper}>
                        <RollParameters/>
                        <RapportParameters/>
                    </div>
                    <CalculateLayout style={{flexWrap:'wrap'}}  title="Параметры окон">
                            <WindowsList/>
                            <OpeningLayout  additionalClassName={styles.addButtonWrapper} onClick={()=>store.addWindowSample()} >
                                <div className={styles.addButton}>
                                    <File/>
                                    <p className={styles.windowAddTitle}>Добавить окно</p>
                                </div>
                            </OpeningLayout>
                    </CalculateLayout>
                    <CalculateLayout style={{flexWrap:'wrap'}} title="Параметры дверей">
                            <DoorsList/>
                            <OpeningLayout additionalClassName={styles.addButtonWrapper} onClick={()=>store.addDoorSample()} >
                                <div className={styles.addButton}>
                                    <File/>
                                    <p className={styles.windowAddTitle}>Добавить дверь</p>
                                </div>
                            </OpeningLayout>
                    </CalculateLayout>
                    {
                        store.resultCalculated?
                        <Result ref={resultRef}/>
                        :
                        <div className={styles.submitBtn} ref={submitBtnRef}>
                        <Button label='Рассчитать материалы' type="submit"/>
                        </div>
                    }
                </form>
            </div>
        </div>
    </Wrapper>
})