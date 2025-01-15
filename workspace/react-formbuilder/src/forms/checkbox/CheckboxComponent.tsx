import React from 'react'
import styles from './checkbox.module.css';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';

export type CheckboxDefaultProps = {
    label : string;
}



export default function CheckboxComponent({label}: CheckboxDefaultProps) {
  return (
    <div className={styles.box}>
       <FormGroup>
            <FormControlLabel control={<Checkbox />} label= {label} />
       </FormGroup>
    </div>
  )
}
