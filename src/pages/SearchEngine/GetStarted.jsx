import React from "react";

import { ReactComponent as GetStartedImage } from "../../assets/icons/get-started.svg";
import { ReactComponent as MetamaskIcon } from "../../assets/icons/metamask.svg";
import { ReactComponent as WalletIcon } from "../../assets/icons/wallet.svg";

import "../../scss/pages/SearchEngine/getStarted.scss";

const GetStarted = () => {
  return (
    <div className="getStarted">
      <GetStartedImage className="getStarted-image" />
      <div className="getStarted-content">
        <div className="content-wrap">
          <div className="getStarted-content-text">
            <h3>Get Started With Aleno Application</h3>
            <p>Login and get access to additional features</p>
          </div>
          <div className="getStarted-content-checkbox">
            <label className="checkbox-container">
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
            <p>
              By connecting wallet you agree to the{" "}
              <a href="/">Terms of Service</a> and <a href="/">Privacy Policy</a>
            </p>
          </div>
        </div>
        <div className="buttons-wrap">
          <div className="getStarted-content-btn metamask">
            <div className="icon-wrap">
              <MetamaskIcon />
            </div>
            Metamask Connect
          </div>
          <div className="getStarted-content-btn wallet">
            <div className="icon-wrap">
              <WalletIcon />
            </div>
            Wallet Connect
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
