import fs from 'fs'
/**
 * @typedef {import('fs').PathLike} FilePath
 */

function writeLog(logFile, message) {
  fs.appendFile(logFile, `${message}\n`, {encoding: "utf-8"},
    (error) => {
      if(error !== null) throw new Error("Failed writing to logFile");
  })
}

function timeNow() {
  return new Date().toISOString()
}

function info(logFile, message) {
  const timestamp = timeNow()
  writeLog(logFile, `INFO\t${timestamp}\t${message}`)
}

function warning(logFile, message) {
  const timestamp = timeNow()
  writeLog(logFile, `WARN\t${timestamp}\t${message}`)
}

function error(logFile, message) {
  const timestamp = timeNow()
  writeLog(logFile, `ERROR\t${timestamp}\t${message}`)
}

/**
 * Creates a new logger
 * 
 * @param {FilePath} logPath 
 */
export function createFileLogger(logPath) {
  info(logPath, "Started Logging")

  /**
   * Here we are decorating the functions with a specific path
   * this allows the caller to specify the logfile once
   * rather than everytime we want to create a new log.
   * 
   * You could do more fancy stuff..
   * But try to keep it simple.
   * 
   * Decorater Pattern:
   * @link https://en.wikipedia.org/wiki/Decorator_pattern
   */
  return {
    /**
     * Logs an info message
     * 
     * @param {string} message
     */
    info: (message) => {info(logPath, message)},
    /**
     * Logs an warning message
     * 
     * @param {string} message
     */
    warning: (message) => {warning(logPath, message)},
    /**
     * Logs an error message
     * 
     * @param {string} message
     */
    error: (message) => {error(logPath, message)},
  }
}