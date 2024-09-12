#!/usr/bin/env node

const debounce = require("lodash.debounce");
const chokidar = require("chokidar");
const program = require("caporal");
const fs = require('fs');
const { spawn } = require('child_process');

program
  .version("0.0.1")
  .argument("[filename]", "Name of a file to execute")
  .action(async ({ filename }) => {
    const name = filename || 'index.js';

    try {
      await fs.promises.access(name);
    } catch (err) {
      throw new Error(`Could not find the file ${name}`);
    }

    const start = debounce(() => {
      const child = spawn('node', [name], { stdio: 'inherit' });
      child.on('error', (error) => {
        console.error(`Error executing file: ${error.message}`);
      });
    }, 100);

    chokidar
      .watch(".")
      .on("add", start)
      .on("change", start)
      .on("unlink", start);
  });

program.parse(process.argv);
