import { HTMLAttributes } from "react"
import style from './Input.module.css'
interface Props extends HTMLAttributes<HTMLInputElement> {
    placeholder?:string,
    name?:string,
    value?:string
}
export const Input = ({placeholder,name,value,...attribute}:Props) =>{
    return <input {...attribute} name={name} value={value} placeholder={placeholder} className={style.input}  />
}