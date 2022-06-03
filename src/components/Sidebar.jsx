import React, { useContext, useState } from "react";
import { NotificationContext, SidebarContext, ThemeContext } from "../context";
import { useClickOutside } from "../hooks/useClickOutside";
import { CopyToClipboard } from 'react-copy-to-clipboard';

import CreateLabel from "../pages/SearchEngine/CreateLabel";

import { ReactComponent as LogoImage } from "../assets/icons/logo.svg";

import { ReactComponent as CopyIcon } from "../assets/icons/copy.svg";
import { ReactComponent as ReloadIcon } from "../assets/icons/reload.svg";
import { ReactComponent as PencilIcon } from "../assets/icons/pencil.svg";
import { ReactComponent as CloseIcon } from "../assets/icons/notification-close.svg";

import { ReactComponent as SidebarIcon1 } from "../assets/icons/sidebar/sidebar1.svg";
import { ReactComponent as SidebarIcon2 } from "../assets/icons/sidebar/sidebar2.svg";
import { ReactComponent as SidebarIcon3 } from "../assets/icons/sidebar/sidebar3.svg";
import { ReactComponent as SidebarIcon4 } from "../assets/icons/sidebar/sidebar4.svg";
import { ReactComponent as SidebarIcon5 } from "../assets/icons/sidebar/sidebar5.svg";
import { ReactComponent as SidebarIcon6 } from "../assets/icons/sidebar/sidebar6.svg";
import { ReactComponent as SidebarIcon7 } from "../assets/icons/sidebar/sidebar7.svg";

import { ReactComponent as TelegramIcon } from "../assets/icons/sidebar/socials/tg.svg";
import { ReactComponent as TwitterIcon } from "../assets/icons/sidebar/socials/twitter.svg";
import { ReactComponent as LinkedinIcon } from "../assets/icons/sidebar/socials/linkedin.svg";
import { ReactComponent as DiscordIcon } from "../assets/icons/sidebar/socials/discord.svg";
import { ReactComponent as YoutubeIcon } from "../assets/icons/sidebar/socials/youtube.svg";
import { ReactComponent as GreenIcon } from "../assets/icons/sidebar/socials/green.svg";
import { ReactComponent as MailIcon } from "../assets/icons/sidebar/socials/mail.svg";

import "../scss/components/sidebar.scss";

const token = "0x0d49cf1e1c984d7190a8fcf4429ddbb5758b40fd";

const RenderUserPanel = () => {
  return (
    <div className="sidebar-userPanel">
      <p className="sidebar-userPanel-h">User Panel</p>
      <div className="sidebar-userPanel-item active">
        <div className="icon-wrap">
          <SidebarIcon1 />
        </div>
        <p>Aleno Search Engine</p>
      </div>
      <div className="sidebar-userPanel-item">
        <div className="icon-wrap">
          <SidebarIcon2 />
        </div>
        <p>Watchlist</p>
      </div>
      <div className="sidebar-userPanel-item">
        <div className="icon-wrap">
          <SidebarIcon3 />
        </div>
        <p>Swap</p>
      </div>
      <div className="sidebar-userPanel-item">
        <div className="icon-wrap">
          <SidebarIcon4 />
        </div>
        <p>Token Explorer</p>
      </div>
      <div className="sidebar-userPanel-item">
        <div className="icon-wrap">
          <SidebarIcon5 />
        </div>
        <p>Pool Explorer</p>
      </div>
      <div className="sidebar-userPanel-item">
        <div className="icon-wrap">
          <SidebarIcon6 />
        </div>
        <p>Additional information</p>
      </div>
      <div className="sidebar-userPanel-item">
        <div className="icon-wrap">
          <SidebarIcon7 />
        </div>
        <p>Settings</p>
      </div>
    </div>
  );
};

const Sidebar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { notification, setNotification } = useContext(NotificationContext);
  const { sidebarActive, setSidebarActive } = useContext(SidebarContext);

  const formattedToken = token.slice(0, 6).concat("...").concat(token.slice(-4));

  const [labelInput, setLabelInput] = useState('');
  const [label, setLabel] = useState("Ethereum");
  const [createLabelActive, setCreateLabelActive] = useState(false);
  const modalRef = useClickOutside(() => {
    setCreateLabelActive(false);
  })

  const handleActionClick = (action) => {
    if (notification.length === 0) {
      setNotification(action);

      const timeout = setTimeout(() => {
        setNotification("");
        return () => clearTimeout(timeout);
      }, 2500)
    }
  }

  const handleAddLabelClick = () => {
    if (labelInput.length > 0) {
      setLabel(labelInput);
      setCreateLabelActive(false);
      setLabelInput("");
    }
  }

  const handleCancelClick = () => {
    setCreateLabelActive(false);
    setLabelInput("");
  }

  return (
    <div className={`sidebar ${sidebarActive ? "active" : ""}`}>
      <div className="sidebar-logo">
        <div className="logo">
          <LogoImage />
          Aleno
        </div>
        <div className="close" onClick={() => setSidebarActive(false)}>
          <CloseIcon />
        </div>
      </div>
      <div className="sidebar-userbar">
        <div className="sidebar-userbar-user">
          <img
            className="sidebar-userbar-user-image"
            src={require("../assets/user.png")}
            alt="user-image"
          />
          <div className="sidebar-userbar-user-info">
            <div className="token">{formattedToken}</div>
            <div className="label">{label}</div>
          </div>
        </div>
        <div className="sidebar-userbar-actions">
          <CopyToClipboard text={token}>
            <div className="action" onClick={() => handleActionClick("copy")}>
              <CopyIcon />
            </div>
          </CopyToClipboard>

          <div className="action" onClick={() => setCreateLabelActive(true)}>
            <PencilIcon />
          </div>
          <div className="action" onClick={() => handleActionClick("refresh")}>
            <ReloadIcon />
          </div>
        </div>
      </div>

      <CreateLabel
        visible={createLabelActive}
        modalRef={modalRef}
        handleInput={(e) => setLabelInput(e.target.value)}
        inputValue={labelInput}
        handleAddLabelClick={handleAddLabelClick}
        handleCancelClick={handleCancelClick}
      />

      <RenderUserPanel />
      <div className="sidebar-more">
        <p className="sidebar-userPanel-h">... More</p>
        <a href="/" className="sidebar-more-item">Data Disclaimer</a>
        <a href="/" className="sidebar-more-item">API</a>
        <a href="/" className="sidebar-more-item">Terms & Conditions</a>
        <a href="/" className="sidebar-more-item">Legal notice</a>
        <a href="/" className="sidebar-more-item">Help Center</a>
      </div>
      <div className="sidebar-theme">
        Light/Dark Theme
        <div
          className={`sidebar-theme-btn ${theme ? "active" : ""}`}
          onClick={() => setTheme(!theme)}
        >
          <div className="point"></div>
        </div>
      </div>
      <div className="sidebar-contact">
        <div className="sidebar-contact-socials">
          <a href="https://telegram.org" className="social">
            <TelegramIcon />
          </a>
          <a href="https://twitter.com" className="social">
            <TwitterIcon />
          </a>
          <a href="https://linkedin.com" className="social">
            <LinkedinIcon />
          </a>
          <a href="https://youtube.com" className="social">
            <YoutubeIcon />
          </a>
          <a href="https://discord.com" className="social">
            <DiscordIcon />
          </a>
          <a href="https://green.com" className="social">
            <GreenIcon />
          </a>
          <a href="mailto:hello@aleno.ai" className="social">
            <MailIcon />
          </a>
        </div>
        <button className="sidebar-contact-btn">Contact Us</button>
      </div>
      <div className="sidebar-copyright">
        Copyright © 2022 Aleno.ai All Rights Reserved.
      </div>
    </div>
  );
};

export default Sidebar;
