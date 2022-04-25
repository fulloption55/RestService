'use strict'
class NotSuccessfulResponseError extends Error {
  constructor(response) {
    super(getMessage(response.body.message))
    this.isOperational = true
    this.body = response.body
    this.statusCode = response.statusCode
  }
}

let getMessage = function(res) {
  if (res.body && res.body.message){
    return res.body.message
  }
  return ""
}

module.exports = NotSuccessfulResponseError
