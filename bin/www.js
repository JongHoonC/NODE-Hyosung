let app = require('../app');
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`${PORT} 로 express 실행`);
});
