import styles from './LabelElement.module.css'

export interface ListElementProps {
	type: string
	label: string
}

export const LabelElement = ({ type, label }: ListElementProps) => {
	return <div className={styles.labelElement}>{label}</div>
}
