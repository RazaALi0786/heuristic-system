const fs = require("fs");
const path = require("path");

const required = [
  "public/favicon-16x16.png",
  "public/favicon-32x32.png",
  "public/favicon-48x48.png",
  "public/favicon-96x96.png",
  "public/apple-touch-icon.png",
  "public/favicon.ico",
  "public/android-chrome-192x192.png",
  "public/android-chrome-512x512.png",
];

const missing = required.filter(
  (p) => !fs.existsSync(path.join(__dirname, "..", p))
);

if (missing.length === 0) {
  console.log("All recommended favicon files are present in public/.");
  process.exit(0);
} else {
  console.log("Missing favicon files:");
  missing.forEach((m) => console.log("- " + m.replace("public\\", "/")));
  process.exit(1);
}
