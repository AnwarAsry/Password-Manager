"use client"

import ButtonStyles from '@styles/Button.module.scss'
import { HiPlus } from 'react-icons/hi'
import { useState } from 'react'
import { AddEntryForm } from '@components/Forms/AddEntryForm'

export const AddEntryBtn = () => {
    const [showForm, setShowForm] = useState(false);

    return (
        <>
            <button className={ButtonStyles.PrimaryBtn} onClick={() => setShowForm(true)}>
                <HiPlus className={ButtonStyles.BtnIcon} />
                Add New Entry
            </button>
            {showForm && <AddEntryForm Cancel={() => setShowForm(false)} />}
            {/* {showForm && <h2 onClick={() => setShowForm(false)}>Hello</h2>} */}
        </>
    )
}