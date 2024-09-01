#!/usr/bin/env node

import { execSync } from 'child_process'
import chalk from "chalk";

const repoUrl = 'https://github.com/parmarvishal31/backend-template.git';
const projectName = process.argv[2] || 'backend-template';

try {
  console.log(chalk.green(`Cloning the repository from ${repoUrl}...`));
  execSync(`git clone ${repoUrl} ${projectName}`, { stdio: 'inherit' });

  console.log(chalk.green('Installing dependencies...'));
  execSync(`cd ${projectName} && npm install`, { stdio: 'inherit' });

  console.log(chalk.green(`Project setup complete! Navigate to ${projectName} and start developing.`));
} catch (error) {
  console.error(chalk.red('Failed to set up the project:'), error);
  process.exit(1);
}
