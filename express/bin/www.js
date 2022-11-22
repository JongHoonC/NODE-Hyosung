let app = require("../app");
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`${port} 로 express 실행`);
});
