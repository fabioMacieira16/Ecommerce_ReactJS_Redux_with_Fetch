import React from "react";
import styled from "styled-components";

const Modal = ({ IsOpen, setShowModal}) => {
    return (
        <>
            { IsOpen ? (
                <div classname="modal">
                <div classname="modal-dialog">
                  <div classname="modal-content">
                    <div classname="modal-header">
                      <h5 classname="modal-title">Modal title</h5>
                      <button type="button" classname="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div classname="modal-body">
                      <p>Modal body text goes here.</p>
                    </div>
                    <div classname="modal-footer">
                      <button type="button" classname="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="button" classname="btn btn-primary">Save changes</button>
                    </div>
                  </div>
                </div>
              </div>

            ) : null }
            
        </>
    );
}

export default Modal;