import React, { useContext } from "react";
import { ThemeContext } from "../context";

import { ReactComponent as LogoImage } from "../assets/icons/logo.svg";

import { ReactComponent as CopyIcon } from "../assets/icons/copy.svg";
import { ReactComponent as ReloadIcon } from "../assets/icons/reload.svg";
import { ReactComponent as PencilIcon } from "../assets/icons/pencil.svg";

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

  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <LogoImage />
        Aleno
      </div>
      <div className="sidebar-userbar">
        <div className="sidebar-userbar-user">
          <img
            className="sidebar-userbar-user-image"
            src={require("../assets/user.png")}
            alt="user-image"
          />
          <div className="sidebar-userbar-user-info">
            <div className="token">0x0d49…40fd</div>
            <div className="label">Ethereum</div>
          </div>
        </div>
        <div className="sidebar-userbar-actions">
          <div className="action">
            <CopyIcon />
          </div>
          <div className="action">
            <PencilIcon />
          </div>
          <div className="action">
            <ReloadIcon />
          </div>
        </div>
      </div>
      <RenderUserPanel />
      <div className="sidebar-more">
        <p className="sidebar-userPanel-h">... More</p>
        <div className="sidebar-more-item">Data Disclaimer</div>
        <div className="sidebar-more-item">API</div>
        <div className="sidebar-more-item">Terms & Conditions</div>
        <div className="sidebar-more-item">Legal notice</div>
        <div className="sidebar-more-item">Help Center</div>
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
          <div className="social">
            <TelegramIcon />
          </div>
          <div className="social">
            <TwitterIcon />
          </div>
          <div className="social">
            <LinkedinIcon />
          </div>
          <div className="social">
            <YoutubeIcon />
          </div>
          <div className="social">
            <DiscordIcon />
          </div>
          <div className="social">
            <GreenIcon />
          </div>
          <div className="social">
            <MailIcon />
          </div>
        </div>
        <div className="sidebar-contact-btn">Contact Us</div>
      </div>
      <div className="sidebar-copyright">
        Copyright © 2022 Aleno.ai All Rights Reserved.
      </div>
    </div>
  );
};

export default Sidebar;
