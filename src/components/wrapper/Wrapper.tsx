import {HTMLAttributes, ReactNode} from 'react'
import styles from './Wrapper.module.css'
interface Props extends HTMLAttributes<HTMLDivElement>{
	children : ReactNode
} 
export const Wrapper = ({children,...attributes}:Props)=>{
	return <div className={styles.wrapper} {...attributes}>{children}</div>
}