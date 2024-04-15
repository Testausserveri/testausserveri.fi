import { PropsWithChildren, forwardRef } from 'react'
import styles from './InputText.module.css'
import { MunicipalityList } from './MunicipalityList'

export type InputTextProps = PropsWithChildren<{
    className?: string
    label: string
    autoComplete?: string
    autoCompleteLabel?: string
    autoFocus?: boolean
    municipalityList?: boolean
    update?: Function
}>

export const InputText = forwardRef<HTMLInputElement, InputTextProps>((props, ref) => (
    <div className={props.className ? `${styles.inputtext} ${props.className}` : styles.inputtext}>
        <label>{props.label} {props.autoCompleteLabel ? <span style={{opacity: 0}}>({props.autoCompleteLabel})</span> : null}</label>
        <input 
            type="text" 
            spellCheck="false" 
            autoComplete={props.autoComplete} 
            autoFocus={props.autoFocus} 
            ref={ref} 
            list={props.municipalityList ? "municipalities" : null}
            onChange={(e) => {
            if (props.update) {
                props.update(e.target.value);
            }
            }}/>
        { props.municipalityList ? <MunicipalityList /> : null }
    </div>
))
