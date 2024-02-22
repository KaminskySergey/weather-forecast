
'use client'
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { IoCloseSharp } from "react-icons/io5";

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}
import styles from './modal.module.css'


const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.code === `Escape`) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  const handleClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div className={styles.backdrop}>
      <div style={{transform: 'translate(-50% -50%)'}} className={styles.modalContainer}>
          <IoCloseSharp className={styles.iconClose} onClick={onClose}/>
        {children}
        </div>
    </div>,
    document.querySelector("body")!
  );
};

export default Modal;