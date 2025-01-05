import React, { useEffect, useState } from "react";

import "./Modal.scss";

function Modal({ show = false, setShow }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    if (show) document.body.overflow = "hidden";
    else document.body.overflow = "auto";

    return () => {
      document.body.overflow = "auto";
    };
  }, [show]);

  return (
    <div
      className="contact-modal-backdrop"
      style={{ display: show ? "flex" : "none" }}
    >
      <div className="modal-content-wrapper">
        <div className="name-email-container">
          <div>
            <input
              type="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter name"
            />
          </div>
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
            />
          </div>
        </div>
        <div className="details-msg-container">
          <textarea
            name="details-msg"
            id="details-msg"
            placeholder="Why do you want to contant me . . ."
          />
        </div>
        <div className="buttons-container">
          <div className="send-btn">Send</div>
          <div className="discard-btn" onClick={() => setShow(false)}>
            Discard
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;