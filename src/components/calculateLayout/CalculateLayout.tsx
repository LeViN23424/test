import { Title } from "../../components"
import {ReactNode, HTMLAttributes} from 'react'
import styles from './CalculateLayout.module.css'
interface Props extends HTMLAttributes<HTMLDivElement>{
    children : ReactNode,
    title : string
}
export const CalculateLayout = ({children,title,...attributes}:Props) =>{
    return <div className={styles.wrapper}>
         <Title label={title} level={2}/>
         <div className={styles.childrenWrapper}  {...attributes}>
            {children}
         </div>
    </div>
}