import "./Request.css";
import React, { useState } from "react";
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
        <Contacts />
      </div>
    </div>
  );
}

const Contacts = () => {
  return (
    <div className="text_wrapper">
      <p>Наша горячая линия</p>
      <h2>8 800 38 23 112</h2>
      <p>Главный офис</p>
      <h3>г. Москва, Садовническая ул., 80</h3>
      <p>Часы работы</p>
      <h3>Пн-Пт с 10:00 до 22:00</h3>
    </div>
  );
};
