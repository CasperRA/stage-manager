import React, { useState } from "react";

function callForHelp() {
  window.open("tel:12345");
}

function EmergencyCall() {
  return (
    <div>
      <a className="emergencyButton" href="tel:+4527512522">
        EMERGENCY <br /> CALL
      </a>
    </div>
  );
}

export default EmergencyCall;
