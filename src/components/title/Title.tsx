import { HTMLAttributes, JSX,forwardRef } from 'react';
import styles from './Title.module.css'
interface Props extends HTMLAttributes<HTMLHeadingElement> {
  label: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6; 
}

export const Title =forwardRef<HTMLHeadingElement,Props>( ({ label, level = 1, ...attributes },ref) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements; // Динамический выбор тега
  //@ts-ignore
  return <Tag ref={ref} className={styles.title} {...attributes}>{label}</Tag>;
})