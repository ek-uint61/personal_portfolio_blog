import React, { useEffect } from 'react';

type ModalProps = {
  show: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ show, onClose, children }) => {
  useEffect(() => {
    if (show) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [show]);

  if (!show) {
    return null;
  }

  return (
    <>
      <style jsx global>{`
        .modal-open {
          overflow: hidden;
        }

        .modal-open .fixed {
          backdrop-filter: blur(5px);
        }
      `}</style>
      <div className="fixed inset-0 flex items-center justify-center z-50 ">
        <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
        <div className=" rounded-lg shadow-lg z-10 max-w-md w-full">
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
