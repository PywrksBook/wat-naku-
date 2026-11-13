process.loadEnvFile();

const app = require("./app");

const port = process.env.PORT;

if (!port) {
  console.error("ขาดตัวแปร PORT ในไฟล์ .env");
  process.exit(1);
}

app.listen(port, () => {
  console.log(`เซิร์ฟเวอร์ทำงานที่ http://localhost:${port}`);
});

