import {Wrapper} from '../../components'
import { Popup } from '../../widgets'
import styles from './Greeting.module.css'

export const Greeting = () =>{

	return <Wrapper style={{padding:0}}>
		<div className={styles.popupWrapper}>
			<Popup 
				title='Калькулятор обоев'
				description='Онлайн-калькулятор расчета обоев по поможет вам 
				определить число рулонов, требуемых для оклеивания, с учетом окон 
				и дверей. Чтобы получить точные результаты, просто укажите параметр
				помещения и размеры в специальной таблице. Наша программа также 
				берет в учет повторение рисунка (раппорт), что позволяет оптимизировать
				расходы на материалы и клей.'
			/>
		</div>
	</Wrapper>
}