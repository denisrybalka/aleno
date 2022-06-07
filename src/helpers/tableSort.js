const sortTextLabels = (data, sortBy) => {
    return data.filter((a) => a[sortBy] == "Low").concat(data.filter((a) => a[sortBy] == "Medium")).concat(data.filter((a) => a[sortBy] == "High"));
}

const sortNumbers = (data, sortBy) => {
    return data.sort((a, b) => a[sortBy] - b[sortBy]);
}

const tableSort = (data, colId, direction) => {
    let sorted = [...data];

    switch (colId) {
        case 0: {
            sorted = data.sort((a, b) => a.address - b.address);
            break;
        }
        case 1: {
            sorted = data.sort((a, b) => a.labels.length - b.labels.length);
            break;
        }
        case 2: {
            sorted = sortNumbers(data, "transactions");
            break;
        }
        case 3: {
            sorted = sortNumbers(data, "volume");
            break;
        }
        case 4: {
            sorted = sortNumbers(data, "pl");
            break;
        }
        case 5: {
            sorted = data.sort((a, b) => a.roi.value - b.roi.value);
            break;
        }
        case 6: {
            sorted = sortNumbers(data, "investmentUse");
            break;
        }
        case 7: {
            sorted = sortNumbers(data, "exposure");
            break;
        }
        case 8: {
            sorted = sortTextLabels(data, "volatility");
            break;
        }
        case 9: {
            sorted = sortTextLabels(data, "popularity");
            break;
        }
        case 10: {
            sorted = data.sort((a, b) => a.watchlist - b.watchlist);
            break;
        }
    }

    return direction ? [...sorted.reverse()] : sorted;

}

export default tableSort;