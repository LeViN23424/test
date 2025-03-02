import {ReactNode, HTMLAttributes} from 'react'
import styles from './OpeningLayout.module.css'
interface Props extends HTMLAttributes<HTMLDivElement>{
    children : ReactNode,
    additionalClassName?:string
}
export const OpeningLayout = ({children,additionalClassName,...attributes}:Props) =>{
    return <div  {...attributes} className={`${styles.wrapper} ${additionalClassName}`}>
         {children}
    </div>
}