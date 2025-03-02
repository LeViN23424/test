import styles from './RoomInputs.module.css'
import { FieldErrors,UseFormRegister} from 'react-hook-form'
import { Input ,CalculateLayout} from '../../components'
interface Inputs {
    width:string,
    height:string,
    length:string,
}
interface Props {
    errors:FieldErrors<Inputs>,
    register:UseFormRegister<Inputs>
}
export const RoomInputs = ({register,errors}:Props) =>{
    
    return <CalculateLayout  title="Параметры комнаты">
    <div className={styles.inputsWrapper}>
         <label className={styles.label} htmlFor="length">
            <p className={styles.labelParagraph}>Длина м</p>
            <Input defaultValue="6.5" {...register("length", { required: "Введите длину!" , pattern: { 
                value: /^[0-9]+(\.[0-9]+)?$/, 
                message: "Введите корректное число!" 
            }})} placeholder="6.5" name="length"/>
            {errors.length && <span className={styles.error}>{errors.length.message}</span>}
        </label>
        <label className={styles.label}  htmlFor="width">
            <p className={styles.labelParagraph}>Ширина м</p>
            <Input defaultValue="6.5" {...register("width", { required:"Введите ширину!", pattern: { 
                value: /^[0-9]+(\.[0-9]+)?$/, 
                message: "Введите корректное число!" 
            }})} placeholder="6.5" name="width"/>
            {errors.width && <span className={styles.error}>{errors.width.message}</span>}
        </label>
        <label className={styles.label}  htmlFor="height">
            <p className={styles.labelParagraph}>Высота м</p>
            <Input defaultValue="6.5" {...register("height", { required:"Введите высоту!", pattern: { 
                value: /^[0-9]+(\.[0-9]+)?$/, 
                message: "Введите корректное число через точку! " 
            }})} placeholder="6.5" name="width"/>
            {errors.height && <span className={styles.error}>{errors.height.message}</span>}
        </label>
    </div>
</CalculateLayout>
}