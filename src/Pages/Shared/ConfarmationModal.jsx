import React from "react";

const ConfarmationModal = ({title,message,closeModal,successAction,modalData}) => {
  return (
    <div>
      <input type="checkbox" id="confarmation-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            {title}
          </h3>
          <p className="py-4">
           {message}
          </p>
          <div className="modal-action">
            <button onClick={closeModal} className="btn btn-outline b">Cancel</button>
            <label onClick={()=> successAction(modalData)} htmlFor="confarmation-modal" className="btn">
              Delete
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfarmationModal;
