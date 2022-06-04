import React, { useState } from 'react'

import { ReactComponent as AdvancedIcon } from "../../assets/icons/advanced.svg";
import { ReactComponent as PlusIcon } from "../../assets/icons/add-list-plus.svg";
import { ReactComponent as FilterIcon } from "../../assets/icons/filter.svg";
import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg";
import { ReactComponent as ArrowDownIcon } from "../../assets/icons/arrow-down.svg";
import { useClickOutside } from '../../hooks/useClickOutside';

import "../../scss/pages/SearchEngine/investmentStrategy.scss";

const strategiesList = [
    {
        title: "Whale",
        src: require("../../assets/strategies/whale.png"),
        text: "Account with a lot of money, and high volume",
    },
    {
        title: "Bot",
        src: require("../../assets/strategies/bot.png"),
        text: "Bot has high trading frequency",
    },
    {
        title: "Holder",
        src: require("../../assets/strategies/holder.png"),
        text: "Holder invests and waits",
    },
    {
        title: "Trader",
        src: require("../../assets/strategies/trader.png"),
        text: "Someone with a high investment use rate",
    }, {
        title: "Risk prone",
        src: require("../../assets/strategies/risk-prone.png"),
        text: "Someone that takes risk",
    },
    {
        title: "Risk averse",
        src: require("../../assets/strategies/risk-averse.png"),
        text: "Someone that avoids risk",
    },
    {
        title: "Degen",
        src: require("../../assets/strategies/degen.png"),
        text: "Someone that invests in a lots of tokens",
    },
    {
        title: "Single pair focused ",
        src: require("../../assets/strategies/focused.png"),
        text: "Trader who trades only a small number of tokens",
    },
    {
        title: "Arbitrageur ",
        src: require("../../assets/strategies/arbitrageur.png"),
        text: "Someone that performs arbitrage",
    }
]

const dropdownList = [
    { label: "All types" },
    { label: "Low" },
    { label: "Medium" },
    { label: "High" },
]

const addFiltersList = [
    { label: "Benefit P&L" },
    { label: "Investment use rate " },
    { label: "Exposure token count" },
    { label: "Swap count" },
    { label: "Investment" },
    { label: "Balance" },
    { label: "Arbitrage count" },
]

const DropdownFilter = ({ label, placeholder, list }) => {
    const [dropdownActive, setDropdownActive] = useState(false);

    const modalRef = useClickOutside(() => {
        setDropdownActive(false);
    })

    return (
        <div className="dropdown-filter" ref={modalRef}>
            <div className="dropdown-filter-head">
                <p>{label}</p>
                <CloseIcon />
            </div>
            <div className="dropdown-filter-select" onClick={() => setDropdownActive(!dropdownActive)}>
                <p>{placeholder}</p>
                <ArrowDownIcon className={`arrow ${dropdownActive ? "top" : ""}`} />
            </div>
            <div className={`dropdown-filter-dropdown ${dropdownActive ? "active" : ""}`}>
                {
                    list.map((item, id) => {
                        return (
                            <div className="dropdown-filter-dropdown-item" key={id}>
                                <p>{item.label}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

const InvestmentStrategy = () => {
    const [advancedActive, setAdvancedActive] = useState(false);
    const [strategyActiveId, setStrategyActiveId] = useState(null);

    return (
        <div className="strategy">
            <h3>Quickly define your investment strategy</h3>
            <div className="strategy-list">
                {
                    strategiesList.map(({ title, src, text }, id) => {
                        return (
                            <div
                                className={`strategy-list-item ${strategyActiveId !== null ? (strategyActiveId === id ? "active" : "hidden") : ""}`}
                                onClick={() => setStrategyActiveId(id)}
                                key={id}
                            >
                                <div className="strategy-list-item-title">{title}</div>
                                <img className="strategy-list-item-image" src={src} alt="strategy" />
                                <div className="strategy-list-item-text">{text}</div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="strategy-navigation">
                <div className="advanced-wrap">
                    <button
                        className={`advanced-btn ${advancedActive ? "active" : ""}`}
                        onClick={() => setAdvancedActive(!advancedActive)}
                    >
                        <AdvancedIcon />
                        Advanced mode
                    </button>
                </div>
                <div className="nav-wrap">
                    <button
                        className="cancel-btn btn"
                        disabled={strategyActiveId === null}
                        onClick={() => setStrategyActiveId(null)}
                    >
                        Clear All
                    </button>
                    <button className="primary-btn btn">Search</button>
                </div>
                <div className="line"></div>
            </div>

            <div className={`strategy-advanced ${advancedActive ? "active" : ""}`}>
                <div className="strategy-advanced-add">
                    <p>Add a filter</p>
                    <div className="strategy-advanced-add-list">
                        {
                            addFiltersList.concat(addFiltersList).concat(addFiltersList).map(({ label }, id) => {
                                return (
                                    <div className="strategy-advanced-add-list-item" key={id}>
                                        <p>{label}</p>
                                        <PlusIcon className="plus" />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="strategy-advanced-filters">
                    <DropdownFilter label="Asset popularity" placeholder="Choose the popularity" list={dropdownList} />
                    <DropdownFilter label="Asset volatility" placeholder="Choose the volatility" list={dropdownList} />
                    <div className="strategy-advanced-filters-filter">
                        <FilterIcon />
                        <p>Click on a filter to add it</p>
                    </div>
                    <div className="strategy-advanced-filters-filter">
                        <FilterIcon />
                        <p>Click on a filter to add it</p>
                    </div>
                    <div className="strategy-advanced-filters-filter">
                        <FilterIcon />
                        <p>Click on a filter to add it</p>
                    </div>
                    <div className="strategy-advanced-filters-filter">
                        <FilterIcon />
                        <p>Click on a filter to add it</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InvestmentStrategy