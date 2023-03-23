

// import { tsvParse, csvParse } from  "d3-dsv";
// import { timeParse } from "d3-time-format";
// //  create a function that will return the uHigh, uLow, uOpen, uClose, uVolume, uDate for each row

// // https://cloud.iexapis.com/stable/stock/twtr/chart/max?token=sk_09c6971dee1a4d28801956d73a114c5a
// // create a function that will await fetch the link and then parse the data
// export const getData = async () => {
// 	try {
// 		const response = await fetch(
// 			`https://cloud.iexapis.com/stable/stock/twtr/chart/max?token=sk_09c6971dee1a4d28801956d73a114c5a`,
// 			{
// 				headers: {
// 				},
// 			}
// 		);
// 		console.log(data);

// 		if (!response.ok) return handleAPIError(response, query);
// 		const data = await response.json();
// 		return data.map(d => {
// 			return {
// 				high: d.high,
// 				low: d.low,
// 				open: d.open,
// 				close: d.close,
// 				volume: d.volume,
// 				date: d.date
// 				}
// 				}
// 				);
// 		// console log the data
// 	} catch (error) {
// 		const customError = { status: 500 };
// 		return handleAPIError(customError);
// 	}
// };

