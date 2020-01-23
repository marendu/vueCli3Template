
(function () {
  function setFontSize () {
    var winWidth = document.documentElement.clientWidth
    document.documentElement.style.fontSize = (winWidth / 1920) * 100+ 'px'
  }
  var evt = 'onorientationchange' in window ? 'orientationchange' : 'resize'
  var timer = null
  window.addEventListener(
    evt,
    function () {
      clearTimeout(timer)
      timer = setTimeout(setFontSize, 300)
    },
    false
  )
  window.addEventListener(
    'pageshow',
    function (event) {
      if (event.persisted) {
        clearTimeout(timer)
        timer = setTimeout(setFontSize, 300)
      }
    },
    false
  )
  // 初始化
  setFontSize()
})()
