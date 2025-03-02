import { HTMLAttributes } from 'react'
import styles from './Select.module.css'
interface Props extends HTMLAttributes<HTMLButtonElement>{
    title:string,
    disable:boolean
}
export const Select = ({title,disable,...attributes}:Props)=>{
    return <button type='button' className={`${styles.select} ${disable?styles.selectDisable:styles.selectWork}`} {...attributes}>
        {title}
    </button>
}