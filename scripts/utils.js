import fs from "fs";
import path from "path";

export const writeJsonFile = (targetPath, data) => {
  const targetDir = path.dirname(targetPath);

  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  fs.writeFileSync(targetPath, JSON.stringify(data, null, 2));
};
