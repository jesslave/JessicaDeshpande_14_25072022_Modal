import "./Modal.css";
import React from "react";

const Modal = ({ show, close, children }) => {
  return (
      <div
        className={`modalContainer ${show ? "show" : ""} `}
        onClick={() => close()}
      >
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <header className="modal_header">
            <button className="close" onClick={() => close()}>
                x
            </button>
          </header>
          <main className="modal_content">{children}</main>
        </div>
      </div>
      
  )
};

export default Modal;