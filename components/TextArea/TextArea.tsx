import { useRef, useState } from "react";
import styles from './TextArea.module.css'
import { useEffect } from "react";

export type TextAreaProps = {
    maxLength: number;
    text: string;
}

const autosizeTextArea = (
    textArea: HTMLTextAreaElement | null,
    value: string
  ) => {
    useEffect(() => {
      if (textArea) {
        textArea.style.height = "0px";
        const scrollHeight = textArea.scrollHeight;
        textArea.style.height = scrollHeight + "px";
      }
    }, [textArea, value]);
  };

export function TextArea({ maxLength = 250 , text = ""}: TextAreaProps) {
    const [value, setValue] = useState(text);
    const textArea = useRef<HTMLTextAreaElement>(null);

    autosizeTextArea(textArea.current, value);

    const sizeChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
        const val = evt.target?.value;
        setValue(val);
    };
    return (
        <div className={styles.textArea}>
            <textarea 
            className={styles.typeArea} 
            maxLength={maxLength}
            onChange={sizeChange}
            ref={textArea}
            rows={1}
            value={value}
            spellCheck={false}
            />
            <span className={styles.characterCounter}>{maxLength - value.length}</span>
        </div>
    )
}