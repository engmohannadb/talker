// core function
function mhndbubbles(container, self, options) {
  // options
  options = typeof options !== "undefined" ? options : {}
  animationTime = options.animationTime || 200 // how long it takes to animate chat mhndbubble, also set in CSS
  typeSpeed = options.typeSpeed || 5 // delay per character, to simulate the machine "typing"
  widerBy = options.widerBy || 2 // add a little extra width to mhndbubbles to make sure they don't break
  sidePadding = options.sidePadding || 6 // padding on both sides of chat mhndbubbles
  recallInteractions = options.recallInteractions || 0 // number of interactions to be remembered and brought back upon restart
  inputCallbackFn = options.inputCallbackFn || false // should we display an input field?

  var standingAnswer = "ice" // remember where to restart convo if interrupted

  var _convo = {} // local memory for conversation JSON object
  //--> NOTE that this object is only assigned once, per session and does not change for this
  // 		constructor name during open session.

  // local storage for recalling conversations upon restart
  var localStorageCheck = function() {
    var test = "chat-mhndbubble-storage-test"
    try {
      localStorage.setItem(test, test)
      localStorage.removeItem(test)
      return true
    } catch (error) {
      console.error(
        "Your server does not allow storing data locally. Most likely it's because you've opened this page from your hard-drive. For testing you can disable your browser's security or start a localhost environment."
      )
      return false
    }
  }
  var localStorageAvailable = localStorageCheck() && recallInteractions > 0
  var interactionsLS = "chat-mhndbubble-interactions"
  var interactionsHistory =
    (localStorageAvailable &&
      JSON.parse(localStorage.getItem(interactionsLS))) ||
    []

  // prepare next save point
  interactionsSave = function(say, reply) {
    if (!localStorageAvailable) return
    // limit number of saves
    if (interactionsHistory.length > recallInteractions)
      interactionsHistory.shift() // removes the oldest (first) save to make space

    // do not memorize buttons; only user input gets memorized:
    if (
      // `mhndbubble-button` class name signals that it's a button
      say.includes("mhndbubble-button") &&
      // if it is not of a type of textual reply
      reply !== "reply reply-freeform" &&
      // if it is not of a type of textual reply or memorized user choice
      reply !== "reply reply-pick"
    )
      // ...it shan't be memorized
      return

    // save to memory
    interactionsHistory.push({ say: say, reply: reply })
  }

  // commit save to localStorage
  interactionsSaveCommit = function() {
    if (!localStorageAvailable) return
    localStorage.setItem(interactionsLS, JSON.stringify(interactionsHistory))
  }

  // set up the stage
  container.classList.add("mhndbubble-container")
  var mhndbubbleWrap = document.createElement("div")
  mhndbubbleWrap.className = "mhndbubble-wrap"
  container.appendChild(mhndbubbleWrap)

  // install user input textfield
  this.typeInput = function(callbackFn) {
    var inputWrap = document.createElement("div")
    inputWrap.className = "input-wrap"
    var inputText = document.createElement("textarea")
    inputText.setAttribute("placeholder", "Ask me anything...")
    inputWrap.appendChild(inputText)
    inputText.addEventListener("keypress", function(e) {
      // register user input
      if (e.keyCode == 13) {
        e.preventDefault()
        typeof mhndbubbleQueue !== false ? clearTimeout(mhndbubbleQueue) : false // allow user to interrupt the bot
        var lastmhndbubble = document.querySelectorAll(".mhndbubble.say")
        lastmhndbubble = lastmhndbubble[lastmhndbubble.length - 1]
        lastmhndbubble.classList.contains("reply") &&
        !lastmhndbubble.classList.contains("reply-freeform")
          ? lastmhndbubble.classList.add("mhndbubble-hidden")
          : false
        addmhndbubble(
          '<span class="mhndbubble-button mhndbubble-pick">' + this.value + "</span>",
          function() {},
          "reply reply-freeform"
        )
        // callback
        typeof callbackFn === "function"
          ? callbackFn({
              input: this.value,
              convo: _convo,
              standingAnswer: standingAnswer
            })
          : false
        this.value = ""
      }
    })
    container.appendChild(inputWrap)
    mhndbubbleWrap.style.paddingBottom = "100px"
    inputText.focus()
  }
  inputCallbackFn ? this.typeInput(inputCallbackFn) : false

  // init typing mhndbubble
  var mhndbubbleTyping = document.createElement("div")
  mhndbubbleTyping.className = "mhndbubble-typing imagine"
  for (dots = 0; dots < 3; dots++) {
    var dot = document.createElement("div")
    dot.className = "dot_" + dots + " dot"
    mhndbubbleTyping.appendChild(dot)
  }
  mhndbubbleWrap.appendChild(mhndbubbleTyping)

  // accept JSON & create mhndbubbles
  this.talk = function(convo, here) {
    // all further .talk() calls will append the conversation with additional blocks defined in convo parameter
    _convo = Object.assign(_convo, convo) // POLYFILL REQUIRED FOR OLDER BROWSERS

    this.reply(_convo[here])
    here ? (standingAnswer = here) : false
  }

  var iceBreaker = false // this variable holds answer to whether this is the initative bot interaction or not
  this.reply = function(turn) {
    iceBreaker = typeof turn === "undefined"
    turn = !iceBreaker ? turn : _convo.ice
    questionsHTML = ""
    if (!turn) return
    if (turn.reply !== undefined) {
      turn.reply.reverse()
      for (var i = 0; i < turn.reply.length; i++) {
        ;(function(el, count) {
          questionsHTML +=
            '<span class="mhndbubble-button" style="animation-delay: ' +
            animationTime / 2 * count +
            'ms" onClick="' +
            self +
            ".answer('" +
            el.answer +
            "', '" +
            el.question +
            "');this.classList.add('mhndbubble-pick')\">" +
            el.question +
            "</span>"
        })(turn.reply[i], i)
      }
    }
    ordermhndbubbles(turn.says, function() {
      mhndbubbleTyping.classList.remove("imagine")
      questionsHTML !== ""
        ? addmhndbubble(questionsHTML, function() {}, "reply")
        : mhndbubbleTyping.classList.add("imagine")
    })
  }
  // navigate "answers"
  this.answer = function(key, content) {
    var func = function(key, content) {
      typeof window[key] === "function" ? window[key](content) : false
    }
    _convo[key] !== undefined
      ? (this.reply(_convo[key]), (standingAnswer = key))
      : func(key, content)

    // add re-generated user picks to the history stack
    if (_convo[key] !== undefined && content !== undefined) {
      interactionsSave(
        '<span class="mhndbubble-button reply-pick">' + content + "</span>",
        "reply reply-pick"
      )
    }
  }

  // api for typing mhndbubble
  this.think = function() {
    mhndbubbleTyping.classList.remove("imagine")
    this.stop = function() {
      mhndbubbleTyping.classList.add("imagine")
    }
  }

  // "type" each message within the group
  var ordermhndbubbles = function(q, callback) {
    var start = function() {
      setTimeout(function() {
        callback()
      }, animationTime)
    }
    var position = 0
    for (
      var nextCallback = position + q.length - 1;
      nextCallback >= position;
      nextCallback--
    ) {
      ;(function(callback, index) {
        start = function() {
          addmhndbubble(q[index], callback)
        }
      })(start, nextCallback)
    }
    start()
  }

  // create a mhndbubble
  var mhndbubbleQueue = false
  var addmhndbubble = function(say, posted, reply, live) {
    reply = typeof reply !== "undefined" ? reply : ""
    live = typeof live !== "undefined" ? live : true // mhndbubbles that are not "live" are not animated and displayed differently
    var animationTime = live ? this.animationTime : 0
    var typeSpeed = live ? this.typeSpeed : 0
    // create mhndbubble element
    var mhndbubble = document.createElement("div")
    var mhndbubbleContent = document.createElement("span")
    mhndbubble.className = "mhndbubble imagine " + (!live ? " history " : "") + reply
    mhndbubbleContent.className = "mhndbubble-content"
    mhndbubbleContent.innerHTML = say
    mhndbubble.appendChild(mhndbubbleContent)
    mhndbubbleWrap.insertBefore(mhndbubble, mhndbubbleTyping)
    // answer picker styles
    if (reply !== "") {
      var mhndbubbleButtons = mhndbubbleContent.querySelectorAll(".mhndbubble-button")
      for (var z = 0; z < mhndbubbleButtons.length; z++) {
        ;(function(el) {
          if (!el.parentNode.parentNode.classList.contains("reply-freeform"))
            el.style.width = el.offsetWidth - sidePadding * 2 + widerBy + "px"
        })(mhndbubbleButtons[z])
      }
      mhndbubble.addEventListener("click", function(e) {
        if (e.target.classList.contains('mhndbubble-button')) {
          for (var i = 0; i < mhndbubbleButtons.length; i++) {
            ;(function(el) {
              el.style.width = 0 + "px"
              el.classList.contains("mhndbubble-pick") ? (el.style.width = "") : false
              el.removeAttribute("onclick")
            })(mhndbubbleButtons[i])
          }
          this.classList.add("mhndbubble-picked")
        }
      })
    }
    // time, size & animate
    wait = live ? animationTime * 2 : 0
    minTypingWait = live ? animationTime * 6 : 0
    if (say.length * typeSpeed > animationTime && reply == "") {
      wait += typeSpeed * say.length
      wait < minTypingWait ? (wait = minTypingWait) : false
      setTimeout(function() {
        mhndbubbleTyping.classList.remove("imagine")
      }, animationTime)
    }
    live && setTimeout(function() {
      mhndbubbleTyping.classList.add("imagine")
    }, wait - animationTime * 2)
    mhndbubbleQueue = setTimeout(function() {
      mhndbubble.classList.remove("imagine")
      var mhndbubbleWidthCalc = mhndbubbleContent.offsetWidth + widerBy + "px"
      mhndbubble.style.width = reply == "" ? mhndbubbleWidthCalc : ""
      mhndbubble.style.width = say.includes("<img src=")
        ? "50%"
        : mhndbubble.style.width
      mhndbubble.classList.add("say")
      posted()

      // save the interaction
      interactionsSave(say, reply)
      !iceBreaker && interactionsSaveCommit() // save point

      // animate scrolling
      containerHeight = container.offsetHeight
      scrollDifference = mhndbubbleWrap.scrollHeight - mhndbubbleWrap.scrollTop
      scrollHop = scrollDifference / 200
      var scrollmhndbubbles = function() {
        for (var i = 1; i <= scrollDifference / scrollHop; i++) {
          ;(function() {
            setTimeout(function() {
              mhndbubbleWrap.scrollHeight - mhndbubbleWrap.scrollTop > containerHeight
                ? (mhndbubbleWrap.scrollTop = mhndbubbleWrap.scrollTop + scrollHop)
                : false
            }, i * 5)
          })()
        }
      }
      setTimeout(scrollmhndbubbles, animationTime / 2)
    }, wait + animationTime * 2)
  }

  // recall previous interactions
  for (var i = 0; i < interactionsHistory.length; i++) {
    addmhndbubble(
      interactionsHistory[i].say,
      function() {},
      interactionsHistory[i].reply,
      false
    )
  }
}

// below functions are specifically for WebPack-type project that work with import()

// this function automatically adds all HTML and CSS necessary for chat-mhndbubble to function
function prepHTML(options) {
  // options
  var options = typeof options !== "undefined" ? options : {}
  var container = options.container || "chat" // id of the container HTML element
  var relative_path = options.relative_path || "./node_modules/chat-mhndbubble/"

  // make HTML container element
  window[container] = document.createElement("div")
  window[container].setAttribute("id", container)
  document.body.appendChild(window[container])

  // style everything
  var appendCSS = function(file) {
    var link = document.createElement("link")
    link.href = file
    link.type = "text/css"
    link.rel = "stylesheet"
    link.media = "screen,print"
    document.getElementsByTagName("head")[0].appendChild(link)
  }
  appendCSS(relative_path + "component/styles/input.css")
  appendCSS(relative_path + "component/styles/reply.css")
  appendCSS(relative_path + "component/styles/says.css")
  appendCSS(relative_path + "component/styles/setup.css")
  appendCSS(relative_path + "component/styles/typing.css")
}

// exports for es6
if (typeof exports !== "undefined") {
  exports.mhndbubbles = mhndbubbles
  exports.prepHTML = prepHTML
}
