import { createClient } from "altogic";

let envUrl = "https://c3-na.altogic.com/e:6416373f55a2eb270e3bac4e";
let clientKey = "a53c51915d104e2b9185ca9bfe933417";

// let options = {
//   apiKey:
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbnZJZCI6IjYzMTVhMmQ0N2ZlNzZmZmE2MzVkYzZmOSIsImtleUlkIjoiNjMxNWEyZDU3ZmU3NmZmYTYzNWRjNzBhIiwiaWF0IjoxNjYyMzYyMzI1LCJleHAiOjI1MjYzNjIzMjV9.c8Sr2eeZTD4riPUDwwp0qt_iXhRCyexbQRKhVLXUvXk",
// };

const altogic = createClient(envUrl, clientKey);

export { altogic };
