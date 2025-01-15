import React from 'react'
import styles from './input.module.css';
import { TextField } from '@mui/material';

export type InputDefaultProps = {
    label : string;
}



export default function InputDefaultComponent({label}: InputDefaultProps) {
  return (
    <div className={styles.box}>
        <TextField
            label={label}
            variant='standard'
            fullWidth />
    </div>
  )
}
