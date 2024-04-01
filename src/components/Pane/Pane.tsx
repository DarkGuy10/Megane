import styles from './Pane.module.css'

export const Pane = ({ children }: { children: React.ReactNode }) => {
	return <div className={styles.pane}>{children}</div>
}
