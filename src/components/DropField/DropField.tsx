import styles from './DropField.module.css'

export interface DropFieldProps {
	placeholder?: string
	label?: string
	children?: React.ReactNode
}

export const DropField = ({ label, placeholder, children }: DropFieldProps) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.label}>{label}</div>
			<div className={styles.field}>{children || placeholder}</div>
		</div>
	)
}
