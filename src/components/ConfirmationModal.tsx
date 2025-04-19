"use client";

import ModalStyles from "@/styles/ConfirmationModal.module.scss";
import ButtonStyles from "@/styles/Buttons.module.scss";

import { useEffect, useRef } from "react";
import { IoIosClose } from "react-icons/io";


interface ConfirmationModalProps {
    isOpen: boolean;
    title?: string;
    message?: string;
    confirmText?: string;
    onConfirm: () => void;
    cancelText?: string;
    onClose: () => void;
}

export const ConfirmationModal = ({
    isOpen,
    onClose,
    onConfirm,
    title = "Are you sure?",
    message = "This action cannot be undone.",
    confirmText = "Confirm",
    cancelText = "Cancel",
}: ConfirmationModalProps) => {
    const modalRef = useRef<HTMLDivElement>(null);

    // Close modal on outside click
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className={ModalStyles.ConfirmationModalBackgroundLayer}>
            <div ref={modalRef} className={ModalStyles.ConfirmationModal}>
                <div className={ModalStyles.ConfirmationModalHeader}>
                    <h3 className={ModalStyles.ConfirmationTitle}>{title}</h3>
                    <IoIosClose className={ModalStyles.CloseIcon} onClick={onClose} />
                </div>
                <p className={ModalStyles.ConfirmationMessage}>{message}</p>

                <div className={`${ButtonStyles.BtnsContainer} ${ModalStyles.ConfirmationFooter}`}>
                    <button
                        className={ButtonStyles.Cancel}
                        onClick={onClose}
                    >
                        {cancelText}
                    </button>
                    <button
                        className={ButtonStyles.DeleteBtnPrimary}
                        onClick={onConfirm}
                    >
                        {confirmText}
                    </button>
                </div>
            </div>
        </div>
    );
};
