import React, { useRef } from 'react';
import './dialog.style.css';

export function Dialog() {

    // https://react.dev/reference/react/useRef
    const dialogRef = useRef(null)

    // Show the dialog when the show button is clicked.
    const openDialog = () => {
        dialogRef.current.showModal();
    }

    // Close the dialog when the close button is clicked.
    const closeDialog = () => {
        dialogRef.current.close();
    }

    return (
        <>
            <dialog ref={dialogRef}>
                <button autoFocus onClick={closeDialog}>Close</button>
                <p>This modal</p>
            </dialog>
            <button onClick={openDialog}>Show the dialog</button>
        </>
    )
}