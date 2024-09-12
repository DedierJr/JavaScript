#!/usr/bin/env node

import fs from "fs/promises";
import { lstat } from "fs/promises";
import path from 'path';
import chalk from 'chalk';

(async () => {  
  const targetDir = process.argv[2] || process.cwd();

  try {
    const filenames = await fs.readdir(targetDir);
    const statPromises = filenames.map(filename => lstat(path.join(targetDir, filename)));
    const allStats = await Promise.all(statPromises);

    allStats.forEach((stats, index) => {
      if (stats.isFile()) {
        console.log(filenames[index]);
      } else {
        console.log(chalk.bold(filenames[index]));
      }
    });
  } catch (err) {
    console.error(err);
  }
})();
