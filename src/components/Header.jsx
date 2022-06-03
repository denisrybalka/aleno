import React, { useContext } from 'react'
import { SidebarContext } from '../context';
import { useClickOutside } from "../hooks/useClickOutside";

import { ReactComponent as LogoImage } from "../assets/icons/logo.svg";
import { ReactComponent as CloseIcon } from "../assets/icons/notification-close.svg";

import { ReactComponent as SearchIcon } from "../assets/icons/search.svg";
import { ReactComponent as BellIcon } from "../assets/icons/bell.svg";
import { ReactComponent as MenuIcon } from "../assets/icons/menu.svg";

import { ReactComponent as BtcIcon } from "../assets/icons/btc.svg";
import { ReactComponent as EthIcon } from "../assets/icons/eth.svg";
import { ReactComponent as BusdIcon } from "../assets/icons/busd.svg";

import "../scss/components/header.scss";

const items = [
  { label: "BTC", Image: BtcIcon },
  { label: "Ethereum", Image: EthIcon },
  { label: "BUSD", Image: BusdIcon },
]
const searchList = new Array(35).fill(0).map(() => items[Math.floor(Math.random() * 3)]);

const RenderItems = ({ list }) => {
  return (
    <>
      {
        list.length > 0 ?
          (
            <div className="items-list">
              {
                list.map((item, i) => {
                  const { Image, label } = item;
                  return (
                    <div className="item" key={i}>
                      <div className="icon-wrap">
                        <Image />
                      </div>
                      {label}
                    </div>
                  )
                })
              }
            </div>
          ) :
          <p>No symbols match your cryteria</p>
      }
    </>
  )
}

const RenderSearchResults = ({ visible, searchList, modalRef }) => {
  return (
    <div className={`header-input-results ${visible ? "visible" : ""}`} ref={modalRef}>
      <p>Tokens</p>
      <RenderItems list={searchList}/>
    </div>
  );
};

const RenderMobileResults = ({ searchList, setInputValue, inputValue, setSearchOpened, visible }) => {
  return (
    <div className={`header-mobile-results ${visible ? "visible" : ""}`}>
      <div className="header-mobile-results-input">
        <SearchIcon className="search" />
        <input
          className="input"
          placeholder="Search address, pair by symbol, name, contract or token"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <CloseIcon className="close" onClick={() => setSearchOpened(false)} />
      </div>
      <RenderItems list={searchList}/>
    </div>
  )
}

const Header = () => {
  const { sidebarActive, setSidebarActive } = useContext(SidebarContext);

  const [inputValue, setInputValue] = React.useState("");
  const [filteredSearchList, setFilteredSearchList] = React.useState(searchList);
  const [searchOpened, setSearchOpened] = React.useState(false);

  const modalRef = useClickOutside(() => {
    window.innerWidth > 1024 && setSearchOpened(false);
  })

  React.useEffect(() => {
    if (inputValue.length > 0) {
      const filteredItems = searchList.filter(({ label }) => label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);
      setFilteredSearchList(filteredItems);
      setSearchOpened(true);
    } else {
      setFilteredSearchList(searchList);
    }
  }, [inputValue])

  return (
    <div className="header">
      <h2>Aleno Search Engine</h2>
      <div className="header-mobile-logo">
        <LogoImage />
        Aleno
      </div>
      <div className="header-input">
        <SearchIcon className="search" onClick={() => window.innerWidth < 1024 ? setSearchOpened(true) : null} />
        <input
          className="input"
          placeholder="Search address, pair by symbol, name, contract or token"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onFocus={(e) => setSearchOpened(true)}
        />
        <RenderSearchResults modalRef={modalRef} visible={searchOpened} searchList={filteredSearchList} />
      </div>
      <div className="header-btn bell">
        <BellIcon/>
        <div className="notifications-count">10</div>
      </div>
      <div className="header-btn menu" onClick={() => setSidebarActive(true)}>
        <MenuIcon />
      </div>
      <RenderMobileResults searchList={filteredSearchList} inputValue={inputValue} setInputValue={setInputValue} setSearchOpened={setSearchOpened} visible={searchOpened} />
    </div>
  )
}

export default Header