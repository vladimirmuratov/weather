import React from "react";
import styles from "./form.module.css";

interface Props {
    city: string,
    onSubmit: (e: React.FormEvent) => void,
    onChange: (str: string) => void
}

export const Form: React.FC<Props> = ({city, onChange, onSubmit}): JSX.Element => (
    <form className={styles.mineBlock_form} onSubmit={onSubmit}>
        <input
            className={styles.mineBlock_input}
            name="search"
            value={city}
            onChange={(e) => onChange(e.target.value)}
        />
        <button type="submit" className={styles.mineBlock_button}>Search</button>
    </form>
)