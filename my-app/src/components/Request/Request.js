import "./Request.css";
import React, { useState, useEffect } from "react";
import RequestFormikContainer from "./RequestFormikContainer";
import SentRequest from "./SentRequest";

export default function Request() {
  let [requestIsSent, setRequestIsSent] = useState(false);

  const goToRequestIsSent = () => {
    setRequestIsSent(true);
  };

  return (
    <div className="request_wrapper">
      <div className="request_content_wrapper">
        <div className="form_wrapper">
          {requestIsSent ? (
            <SentRequest />
          ) : (
            <RequestFormikContainer goToRequestIsSent={goToRequestIsSent} />
          )}
        </div>

        <Contacts requestIsSent={requestIsSent} />
      </div>
    </div>
  );
}

const Contacts = ({ requestIsSent }) => {
  return (
    <div className={requestIsSent ? "text_wrapper_req_sent" : "text_wrapper"}>
      <div className="text_block">
        <p>Наша горячая линия</p>

        <h2>
          <h2>8 800 38 23 112</h2>
        </h2>
      </div>
      <div className="text_block">
        <p>Главный офис</p>

        <h3>г. Москва, Садовническая ул., 80</h3>
      </div>
      <div className="text_block">
        <p>Часы работы</p>

        <h3>Пн-Пт с 10:00 до 22:00</h3>
      </div>
    </div>
  );
};
