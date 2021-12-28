import * as app from "blocking-proxy";

const port = process.env.PORT || 3000;
const host = '0.0.0.0'
app.listen(port, host, () => {
  connsole.log(`server is running on port ${port}`)
});
