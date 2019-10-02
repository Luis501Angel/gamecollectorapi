'use strict';

////////////////////////////////////////////////////////////////////////////////
// CONSTANTS
////////////////////////////////////////////////////////////////////////////////

const TITLE_ERROR = 'error';
const TITLE_MESSAGE = 'message';

////////////////////////////////////////////////////////////////////////////////
// PRIVATE FUNCTIONS
////////////////////////////////////////////////////////////////////////////////

function buildGenericMessage(nameMessage, textMessage) {

  var jsonMessageResult = {};
  jsonMessageResult[nameMessage] = textMessage;
  return jsonMessageResult;
}

////////////////////////////////////////////////////////////////////////////////
// PUBLIC FUNCTIONS
////////////////////////////////////////////////////////////////////////////////

function buildErrorMessage(text) {

  var jsonErrorMessage = buildGenericMessage(TITLE_ERROR, text)
  return jsonErrorMessage;
}

function buildMessage(text) {

  var jsonErrorMessage = buildGenericMessage(TITLE_MESSAGE, text)
  return jsonErrorMessage;
}

module.exports = {
  buildErrorMessage,
  buildMessage,
  //For testing
  buildGenericMessage
}
