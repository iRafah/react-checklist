import React, { useEffect, useRef } from 'react';
import './dialog.style.css';
import { IconClose } from '../icons';

export function Dialog({ isOpen, onClose, children }) {
    // https://react.dev/reference/react/useRef
    const dialogRef = useRef(null)

    // https://react.dev/reference/react/useEffect
    useEffect(() => {
        isOpen ? openDialog() : closeDialog();
    }, [isOpen]);

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
            <dialog ref={dialogRef} className="dialog">
                <div className="btn-close-wrapper">
                    <button
                        autoFocus
                        onClick={onClose}
                        className="btn-close"
                    >
                        <IconClose />
                    </button>
                </div>
                {children}
            </dialog>
        </>
    )
}