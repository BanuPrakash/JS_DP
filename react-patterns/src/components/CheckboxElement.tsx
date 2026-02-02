import styles from './checkbox.module.css'

export interface CheckboxElementProps {
    label:string
}

export default function CheckboxElement({label}:CheckboxElementProps) {
  return (
    <div className={styles.box}>
        {label} <input type="checkbox" />
    </div>
  )
}
