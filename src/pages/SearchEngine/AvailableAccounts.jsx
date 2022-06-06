import React from 'react'

import { ReactComponent as StarIcon } from "../../assets/icons/star.svg";
import { ReactComponent as ArrowIcon } from "../../assets/icons/arrow-down.svg";

import "../../scss/pages/SearchEngine/availableAccounts.scss";

const tableDataCols = [
    "Address (truncated)",
    "Labels",
    "Transaction count",
    "Volume swapped",
    "P&L",
    "ROI",
    "Investment use rate",
    "Exposure token count",
    "Asset volatility",
    "Asset popularity",
    "Add to Watchlist"
]

const tableDataRows = [
    {
        address: "0x0467sd099db9…",
        labels: [
            require("../../assets/strategies/bot.png"),
            require("../../assets/strategies/degen.png"),
            require("../../assets/strategies/risk-averse.png"),
            require("../../assets/strategies/risk-prone.png"),
            require("../../assets/strategies/trader.png"),
            require("../../assets/strategies/whale.png"),
        ],
        transactions: 3,
        volume: "$1101.64",
        pl: "$168.55",
        roi: {
            type: "green",
            value: "+14.00%"
        },
        investmentUse: 3.23,
        exposure: 8,
        volatility: "High",
        popularity: "High",
        watchlist: false,
    },
    {
        address: "0x0467sd099db9…",
        labels: [
            require("../../assets/strategies/trader.png"),
            require("../../assets/strategies/whale.png"),
        ],
        transactions: 3,
        volume: "$1101.64",
        pl: "$168.55",
        roi: {
            type: "green",
            value: "+14.00%"
        },
        investmentUse: 3.23,
        exposure: 8,
        volatility: "High",
        popularity: "High",
        watchlist: false,
    },
    {
        address: "0x0467sd099db9…",
        labels: [
            require("../../assets/strategies/bot.png"),
            require("../../assets/strategies/focused.png"),
        ],
        transactions: 1,
        volume: "$1101.64",
        pl: "$168.55",
        roi: {
            type: "yellow",
            value: "+2.00%"
        },
        investmentUse: 1.87,
        exposure: 5,
        volatility: "Low",
        popularity: "Low",
        watchlist: false,
    },
    {
        address: "0x0467sd099db9…",
        labels: [
            require("../../assets/strategies/whale.png"),
            require("../../assets/strategies/bot.png"),
            require("../../assets/strategies/focused.png"),
            require("../../assets/strategies/focused.png"),
        ],
        transactions: 2,
        volume: "$5101.64",
        pl: "$268.55",
        roi: {
            type: "green",
            value: "+5.00%"
        },
        investmentUse: 2.87,
        exposure: 3,
        volatility: "Medium",
        popularity: "Medium",
        watchlist: true,
    },

    {
        address: "0x0467sd099db9…",
        labels: [
            require("../../assets/strategies/bot.png"),
            require("../../assets/strategies/focused.png"),
        ],
        transactions: 3,
        volume: "$1101.64",
        pl: "$168.55",
        roi: {
            type: "green",
            value: "+14.00%"
        },
        investmentUse: 3.23,
        exposure: 8,
        volatility: "High",
        popularity: "High",
        watchlist: false,
    },
    {
        address: "0x0467sd099db9…",
        labels: [
            require("../../assets/strategies/risk-averse.png"),
        ],
        transactions: 3,
        volume: "$61.64",
        pl: "$88.55",
        roi: {
            type: "red",
            value: "-1.00%"
        },
        investmentUse: 3.23,
        exposure: 8,
        volatility: "High",
        popularity: "Low",
        watchlist: false,
    },
]

const AvailableAccounts = () => {
    return (
        <div className="availableAccounts">
            <h3>Available accounts</h3>
            <div className="table-wrap">
                <table className="availableAccounts-table" cellspacing="0">
                    <thead>
                        <tr>
                            {
                                tableDataCols.map((col) => {
                                    return (
                                        <th scope="col" className="availableAccounts-table-th">
                                            <div className="wrap">
                                                <p>
                                                    {col}
                                                </p>
                                                <div className="arrows">
                                                    <ArrowIcon className="arrow top" />
                                                    <ArrowIcon className="arrow " />
                                                </div>
                                            </div>
                                        </th>
                                    )
                                })
                            }
                        </tr>
                    </thead>
                    <tbody className="availableAccounts-table-tbody">
                        {
                            tableDataRows.map((item) => {
                                const { address, labels, transactions, volume, pl, roi, investmentUse, exposure, volatility, popularity, watchlist } = item;

                                return (
                                    <tr>
                                        <th scope="row" className="availableAccounts-table-td address">{address}</th>
                                        <td className="availableAccounts-table-td label">
                                            <div className={`label-wrap ${labels.length > 3 ? "hidden" : ""}`}>
                                                {labels.map((label) => {
                                                    return (
                                                        <img src={label} className="img" alt="strategy" />
                                                    )
                                                })}
                                                <div className="arrow-wrap">
                                                    <p>...</p>
                                                    <ArrowIcon className="arrow " />
                                                </div>
                                            </div>
                                        </td>
                                        <td className="availableAccounts-table-td table-text-primary">{transactions}</td>
                                        <td className="availableAccounts-table-td table-text-primary">{volume}</td>
                                        <td className="availableAccounts-table-td table-text-primary">{pl}</td>
                                        <td className={`availableAccounts-table-td roi-${roi.type}`}>{roi.value}</td>
                                        <td className="availableAccounts-table-td table-text-primary">{investmentUse}</td>
                                        <td className="availableAccounts-table-td table-text-primary">{exposure}</td>
                                        <td className="availableAccounts-table-td table-text-primary">{volatility}</td>
                                        <td className="availableAccounts-table-td table-text-primary">{popularity}</td>
                                        <td className="availableAccounts-table-td">
                                            <div className="star-wrap">
                                                <StarIcon className={`star ${watchlist ? "filled" : ""}`} />
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>
            <div className="availableAccounts-pagination">
                <button className="availableAccounts-pagination-arrow primary-btn">
                    <ArrowIcon className="arrow" />
                </button>
                <button className="availableAccounts-pagination-page active">1</button>
                <button className="availableAccounts-pagination-page">2</button>
                <button className="availableAccounts-pagination-page">3</button>
                <button className="availableAccounts-pagination-page">...</button>
                <button className="availableAccounts-pagination-page">127</button>
                <button className="availableAccounts-pagination-arrow primary-btn">
                    <ArrowIcon className="arrow right" />
                </button>
            </div>
        </div>
    )
}

export default AvailableAccounts