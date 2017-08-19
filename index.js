      var request = require('request')
      var async = require('asyncawait/async');
	var await = require('asyncawait/await');

    var x = 1
var OktaAPI = require('okta-node');
var okta = new OktaAPI("00SNxSET3JsBRYocvEvlcK5sxh-TONEODxsDt80OPe", "vanbeektech");



 var auth = "eyJhbGciOiJSUzI1NiIsImtpZCI6Im1TWjNVSmwwQ3ZLM3VHdEtFWXdnYVpsU1pSR09RLVVIYnB1MlgzY1RNOHMifQ.eyJ2ZXIiOjEsImp0aSI6IkFULnh0ckZaVjhFZ2lzWDdUTlFfaU5va1o2SzFKajBNTVJjTWh2WTdvMk9EbUEuUE1zd2VIM0xaSGZyVlBDdVB3Y2hKRkVLVWJrUTBPSGhrVk9JeW5KbUgrbz0iLCJpc3MiOiJodHRwczovL3ZhbmJlZWt0ZWNoLm9rdGEuY29tIiwiYXVkIjoiaHR0cHM6Ly92YW5iZWVrdGVjaC5va3RhLmNvbSIsInN1YiI6ImFuZHJldy52YW5iZWVrQHZhbmJlZWt0ZWNoLmNvbSIsImlhdCI6MTUwMjkwNDUzMCwiZXhwIjoxNTAyOTA4MTMwLCJjaWQiOiIwb2EzZm1hZGl6eFN4WWR4QzF0NyIsInVpZCI6IjAwdTFyNWtud29TcE11YlRDMXQ3Iiwic2NwIjpbIm9mZmxpbmVfYWNjZXNzIiwicHJvZmlsZSIsImVtYWlsIiwib3BlbmlkIl19.Za4XNeiu7EoulGg7IbjmBT0FBW_X7VFKhCR4tOGXjQKP7xsxj595K1amqlBBikNpPpQK18RY6fEWRI6FJ7fi-rXHN2dXiJlRf6tokonw6D7lSLx6DXEQk4EN1tNmvD65FA8bufYnyCEKB9bEp9Qy8tM6UAUGLrGBj1VOSehE2nLpez0YKUyBx6lbBqoO2ejSahsDA2i2K_d_fXf3OPINDm3mq5ZvFH1e3BDYrvXCrh4E6Eg7Cbx35SAEpy5tt_CsWzc2EjhNbnBjGXdnD4eKc_wTZ1O4ueNWEmQSplVaNk_Oca6-cSqaoLlxV86OqKMyihmn2Dpa4ZGuUH2JudlDOA"












'use strict';

var goTime = function() {
 

}




// Route the incoming request based on type (LaunchRequest, IntentRequest,
// etc.) The JSON body of the request is provided in the event parameter.
exports.handler = function (event, context) {

  okta.users.updatePartial("00u2pf2nf1lcnOuTP1t7", {accessTokenAlexa: "signin"}, null, function(d){});
    try {


        if (event.session.new) {
            onSessionStarted({requestId: event.request.requestId}, event.session);
        }

        if (event.request.type === "LaunchRequest") {
            onLaunch(event.request,
                event.session,
                function callback(sessionAttributes, speechletResponse) {
                    context.succeed(buildResponse(sessionAttributes, speechletResponse));
                });
        } else if (event.request.type === "IntentRequest") {
            onIntent(event.request,
                event.session,
                function callback(sessionAttributes, speechletResponse) {
                    context.succeed(buildResponse(sessionAttributes, speechletResponse));
                });
        } else if (event.request.type === "SessionEndedRequest") {
            onSessionEnded(event.request, event.session);
            context.succeed();
        }
    } catch (e) {
        context.fail("Exception: " + e);
    }
};


function onSessionStarted(sessionStartedRequest, session) {
    console.log("onSessionStarted requestId=" + sessionStartedRequest.requestId
        + ", sessionId=" + session.sessionId);

    // add any session init logic here
}

/**
 * Called when the user invokes the skill without specifying what they want.
 */
function onLaunch(launchRequest, session, callback) {
    console.log("onLaunch requestId=" + launchRequest.requestId
        + ", sessionId=" + session.sessionId);

    var cardTitle = "Hello, World!"
    var speechOutput = "You can tell Hello, World! to say Hello, World!"
    callback(session.attributes,
        buildSpeechletResponse(cardTitle, speechOutput, "", true));
}

/**
 * Called when the user specifies an intent for this skill.
 */
function onIntent(intentRequest, session, callback) {
    console.log("onIntent requestId=" + intentRequest.requestId
        + ", sessionId=" + session.sessionId);
    console.log(session.user.accessToken)
    var intent = intentRequest.intent,
        intentName = intentRequest.intent.name;

    // dispatch custom intents to handlers here
    if (intentName == 'TestIntent') {
        handleTestRequest(intent, session, callback);
    } else {
        throw "Invalid intent";
    }
}

/**
 * Called when the user ends the session.
 * Is not called when the skill returns shouldEndSession=true.
 */
function onSessionEnded(sessionEndedRequest, session) {
    console.log("onSessionEnded requestId=" + sessionEndedRequest.requestId
        + ", sessionId=" + session.sessionId);

    // Add any cleanup logic here
}



function handleTestRequest(intent, session, callback) {



   

    auth = (session.user.accessToken)

var getQuote = function() {
  var quote;
 
  return new Promise(function(resolve, reject) {
    
    
      request.post('https://vanbeektech.okta.com/oauth2/v1/userinfo', {'auth': {'bearer': auth}}, function(error, response, body){
      	quote = JSON.parse(body)
           

 
      resolve(quote);

      });
     
  });
}




var resultA = "yakaaaa"
 
var foo = async (function() {

    resultA = await (getQuote());
    console.log(resultA.email)
    console.log(resultA)
    
       callback(session.attributes,
        buildSpeechletResponseWithoutCard(resultA.email + "!!!!!!!!", "", "true"));
  
});
 foo()

}

// ------- Helper functions to build responses -------

function buildSpeechletResponse(title, output, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type: "PlainText",
            text: output
        },
        card: {
            type: "Simple",
            title: title,
            content: output
        },
        reprompt: {
            outputSpeech: {
                type: "PlainText",
                text: repromptText
            }
        },
        shouldEndSession: shouldEndSession
    };
}

function buildSpeechletResponseWithoutCard(output, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type: "PlainText",
            text: output
        },
        reprompt: {
            outputSpeech: {
                type: "PlainText",
                text: repromptText
            }
        },
        shouldEndSession: shouldEndSession
    };
}

function buildResponse(sessionAttributes, speechletResponse) {
    return {
        version: "1.0",
        sessionAttributes: sessionAttributes,
        response: speechletResponse
    };
}