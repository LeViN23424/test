import { Button ,Title} from "../../components"
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import styles from './Popup.module.css'
import {Link} from 'react-router'
import { useRef } from "react";
interface Props {
    title:string,
    description:string
}
gsap.registerPlugin(useGSAP);
export const Popup =  ({title,description}:Props) =>{
    const containerRef = useRef<HTMLDivElement>(null)
    const titleRef = useRef<HTMLHeadingElement>(null)
    const descriptionRef = useRef<HTMLParagraphElement>(null)
    const linkRef = useRef<HTMLAnchorElement>(null)
    useGSAP(() => {
        gsap.timeline()
            .fromTo(containerRef.current,{y:'100%'}, { y:0})
            .fromTo(titleRef.current,{opacity:0,y:-20},{opacity:1,y:0})
            .fromTo(descriptionRef.current,{opacity:0,y:-20},{opacity:1,y:0})
            .fromTo(linkRef.current,{opacity:0,y:-10},{opacity:1,y:0})
    });

    return <div ref={containerRef} className={styles.popup}>
        <div className={styles.textWrapper}>
            <Title ref={titleRef} label={title}  level={2}/>
            <p ref={descriptionRef} className={styles.description}>
                {description}
            </p>
        </div>
        <Link ref={linkRef} to='calculate'>
            <Button label='Начать расчет материалов'/>
        </Link>
    </div>
}