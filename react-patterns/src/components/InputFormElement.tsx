import styles from './input.module.css'

export interface InputFormElementProps {
    label:string,
    // onClick: Function
}

export default function InputFormElement({label}:InputFormElementProps) {
  return (
    <div className={styles.box}>
        {label} <input type="text" />
    </div>
  )
}
