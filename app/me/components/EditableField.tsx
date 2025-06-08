"use client";

import { useState, useRef, useEffect } from 'react';
import { Editable } from '@/components/Editable/Editable';
import styles from './EditableField.module.scss';

interface EditableFieldProps {
    value: string; 
    onUpdate: (value: string) => Promise<void>; 
    type?: 'text' | 'email';
    municipalityList?: boolean;
    children?: React.ReactNode;
}

export function EditableField({ value, onUpdate, type = 'text', municipalityList, children }: EditableFieldProps) {
    const [isLoading, setIsLoading] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showError, setShowError] = useState(false);
    const [currentValue, setCurrentValue] = useState(value);
    const lastSavedValue = useRef(value);

    useEffect(() => {
        lastSavedValue.current = value;
        setCurrentValue(value);
    }, [value]);

    const handleChange = (newValue: string) => {
        setCurrentValue(newValue);
    };

    const handleFinishEditing = async () => {
        if (currentValue.trim() === lastSavedValue.current.trim()) {
            return;
        }

        setIsLoading(true);
        setShowError(false);
        try {
            await onUpdate(currentValue);
            lastSavedValue.current = currentValue;
            setShowSuccess(true);
            setTimeout(() => setShowSuccess(false), 2000);
        } catch (error) {
            console.error('Failed to update:', error);
            setCurrentValue(lastSavedValue.current);
            setShowError(true);
            setTimeout(() => setShowError(false), 4000);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <span className={styles.container}>
            <Editable
                value={currentValue}
                onChange={handleChange}
                onFinishEditing={handleFinishEditing}
                type={type}
                municipalityList={municipalityList}
            >
                {children}
            </Editable>
            {isLoading && <span className={styles.loading}>Päivitetään…</span>}
            {!isLoading && showSuccess && <span className={styles.updated}>Päivitetty</span>}
            {!isLoading && showError && <span className={styles.error}>Päivitys epäonnistui</span>}
        </span>
    );
} 