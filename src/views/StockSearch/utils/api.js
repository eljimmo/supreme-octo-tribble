import { formatTwoDecimalPlaces } from "./format";



// https://cloud.iexapis.com/stable/time-series/FUNDAMENTALS/AAPL?limit=1&subattribute=fiscalQuarter|3,fiscalYear|2020&token=sk_09c6971dee1a4d28801956d73a114c5a
// https://cloud.iexapis.com/stable/stock/twtr/chart/dynamic&?token=sk_09c6971dee1a4d28801956d73a114c5a
// https://cloud.iexapis.com/stable/stock/twtr/chart/2y?token=sk_09c6971dee1a4d28801956d73a114c5a
// https://cloud.iexapis.com/stable/stock/twtr/chart/5y?token=sk_09c6971dee1a4d28801956d73a114c5a
// https://api.iex.cloud/v1/data/CORE/CORE_ESTIMATES?last=1&token=sk_09c6971dee1a4d28801956d73a114c5a
// https://cloud.iexapis.com/stable/stock/twtr/chart/max?token=sk_09c6971dee1a4d28801956d73a114c5a



const fetchSymbolData = async (query) => {
  try {
    const response = await fetch(
      `https://cloud.iexapis.com/stable/stock/${query}/batch?types=quote,company,news,intraday-prices&last=1&token=pk_0e682b29c77d48f9804e3dd05453bf0e`,

      );
      const datachart = await fetch(
        `https://cloud.iexapis.com/stable/stock/${query}/chart/1m?token=sk_09c6971dee1a4d28801956d73a114c5a`

        // `https://cloud.iexapis.com/stable/stock/${query}/chart/max?&token=pk_0e682b29c77d48f9804e3dd05453bf0e`,
      );
    
    if (!response.ok) return handleAPIError(response, query);
    if (!datachart.ok) return handleAPIError(datachart, query);

    const data = await response.json();
    const data2 = await datachart.json();
    console.log(data2);

    /* Edge case for IEX API in which the data is not in
     * the database, but the response returned ok
     */
    if (data.quote === null || data.company === null) {
      const customError = { status: 404 };
      return handleAPIError(customError, query);
    }

    return {
      ...data,
      ...data2,
      quote: extractQuoteData(data.quote),
      company: extractCompanyData(data.company),
    };
  } catch (error) {
    const customError = { status: 500 };
    return handleAPIError(customError);

  }
};

export default fetchSymbolData;

/* Helper Functions */
const handleAPIError = (response, query = "") => {
  const errorMessage = setHTTPErrorMessage(response.status, query);
  return {
    error: true,
    status: response.status,
    message: response.statusText || errorMessage,
  };
};

const extractQuoteData = (data) => {
  const filtered_quote = {
    symbol: data.symbol,
    companyName: data.companyName,
    primaryExchange: data.primaryExchange,
    open: formatTwoDecimalPlaces(data.open),
    previousClose: formatTwoDecimalPlaces(data.previousClose),
    high: formatTwoDecimalPlaces(data.high),
    low: formatTwoDecimalPlaces(data.low),
    latestPrice: formatTwoDecimalPlaces(data.latestPrice),
    week52High: formatTwoDecimalPlaces(data.week52High),
    week52Low: formatTwoDecimalPlaces(data.week52Low),
    peRatio: formatTwoDecimalPlaces(data.peRatio),
    marketCap: data.marketCap,
    latestSource: data.latestSource,
    latestUpdate: data.latestUpdate,
    latestVolume: data.latestVolume,
    avgTotalVolume: data.avgTotalVolume,
    volume: data.volume,

    change: formatTwoDecimalPlaces(data.change),
    changePercent: formatTwoDecimalPlaces(data.changePercent * 100),

  };
  return filtered_quote;
};

const extractCompanyData = (data) => {
  const filtered_company = {
    description: data.description,
    CEO: data.CEO,
    employees: data.employees,
    sector: data.sector,
    industry: data.industry,
    city: data.city,
    state: data.state,
    address: data.address,
    website: data.website,
  };
  return filtered_company;
};




const setHTTPErrorMessage = (status, query) => {
  if (status === 400) return `Error: Bad request`;
  if (status === 401) return `Error: Forbidden`;
  if (status === 402) return `Error: FPA1`;
  if (status === 403) return `Error: FPA2`;
  if (status === 404) return `No results found for "${query}"`;
  if (status === 429) return `Error: Too many requests`;
  if (status === 451)
    return `Error: Requested data requires additional permission to access`;
  return `Internal server error`;
};