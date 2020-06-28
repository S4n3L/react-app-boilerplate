/* eslint-disable */
const _ = require("lodash")
const chalk = require("chalk")
const DotenvWebpack = require("dotenv-webpack")
const fs = require("fs")
const path = require("path")
const Dotenv = require("dotenv")
/* eslint-enable */

function verbConsole(chalkMessage, verbMode) {
  if (verbMode) {
    console.log(chalkMessage)   // eslint-disable-line
  }
}

function checkRequiredVars(verbMode = false) {
  verbConsole(chalk.green("[webpack - base] Loading .env file"), verbMode)
  const configResult = Dotenv.config()
  if (configResult.error) {
    verbConsole(chalk.red("[webpack - base] .env file doesn't exists => App cannot be compiled."), verbMode)
    process.exit(-1)
  }

  verbConsole(chalk.green("[webpack - base] Checking variables."), verbMode)
  if (!process.env.NODE_ENV) {
    verbConsole(chalk.red("[webpack - base] NODE_ENV variable doesn't set => App cannot be compiled."), verbMode)
    process.exit(-1)
  }

  if (!fs.existsSync(".env.example")) {
    verbConsole(chalk.red("[webpack - base] .env.example file doesn't exists, cannot validate env. variables => App cannot be compiled."), verbMode)
    process.exit(-1)
  }

  const envExampleVariables = new DotenvWebpack({ path: path.resolve(__dirname, "../.env.example")})

  Object.keys(envExampleVariables["definitions"]).forEach((variable) => {
    if (!_.get(process.env, variable.split(/[\s.]+/)[2])) {
      verbConsole(chalk.red("[webpack - base] - [", variable, "] is not found."), verbMode)
      process.exit(-1)
    }
    verbConsole(chalk.green("[webpack - base] - [", variable, "] has found, value: ", _.get(process.env, variable.split(/[\s.]+/)[2])), verbMode)
  })
}

module.exports = checkRequiredVars
