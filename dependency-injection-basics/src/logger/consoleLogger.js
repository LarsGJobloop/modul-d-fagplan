function nowUTC() {
  return new Date().toUTCString()
}


/**
 * Logs an info message
 * 
 * @param {string} message
 */
function info(message) {
  const timestamp = nowUTC()
  console.log(`${timestamp}\tINFO\t${message}`)
}

/**
 * Logs an warning message
 * 
 * @param {string} message
 */
function warning(message) {
  const timestamp = nowUTC()
  console.log(`${timestamp}\tWARN\t${message}`)
}

/**
 * Logs an error message
 * 
 * @param {string} message
 */
function error(message) {
  const timestamp = nowUTC()
  console.log(`${timestamp}\tERROR\t${message}`)
}

/**
 * A logger
 */
export const consoleLogger = {
  info,
  warning,
  error,
}