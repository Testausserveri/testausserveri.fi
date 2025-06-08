"use client";

import { useState } from 'react';
import styles from './Editable.module.scss';
import { FaPencilAlt } from 'react-icons/fa';
import { MunicipalityList } from '../InputText/MunicipalityList';

interface EditableProps {
    value: string;
    onChange: (value: string) => void;
    onFinishEditing?: () => void;
    children?: React.ReactNode;
    municipalityList?: boolean;
    type?: 'text' | 'email';
}

export function Editable({ value, onChange, onFinishEditing, children, municipalityList, type = 'text' }: EditableProps) {
    const [isEditing, setIsEditing] = useState(false);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            setIsEditing(false);
            onFinishEditing?.();
        } else if (e.key === 'Escape') {
            e.preventDefault();
            setIsEditing(false);
        }
    };

    const handleBlur = () => {
        setIsEditing(false);
        onFinishEditing?.();
    };

    return (
        <span className={styles.editable}>
            {!isEditing ? (
                <span 
                    className={styles.content} 
                    onClick={() => setIsEditing(true)}
                >
                    <span className={styles.text}>{children || value}</span>
                    <FaPencilAlt className={styles.icon} onClick={() => setIsEditing(true)} />
                </span>
            ) : (
                <span className={`${styles.content} ${styles.editing}`}>
                    <input
                        type={type}
                        className={styles.input}
                        value={value}
                        onBlur={handleBlur}
                        onChange={(e) => onChange(e.target.value)}
                        onKeyDown={handleKeyDown}
                        list={municipalityList ? "municipalities" : undefined}
                        autoFocus
                    />
                    <FaPencilAlt className={`${styles.icon} ${styles.iconHidden}`} />
                    {municipalityList && <MunicipalityList />}
                </span>
            )}
        </span>
    );
}
