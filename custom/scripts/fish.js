(function () {
  var container
  var script

  function appendFishEffect() {
    var footerWrap = document.getElementById("footer-wrap")
    var footer = document.querySelector("footer")

    if (!footerWrap || !footer) return

    footerWrap.style.position = "absolute"
    footerWrap.style.textAlign = "center"
    footerWrap.style.top = 0
    footerWrap.style.right = 0
    footerWrap.style.left = 0
    footerWrap.style.bottom = 0

    if (!document.getElementById("jsi-flying-fish-container")) {
      container = document.createElement("div")
      container.className = "container"
      container.id = "jsi-flying-fish-container"
      footer.appendChild(container)
    }

    if (!document.querySelector('script[data-custom-fish="true"]')) {
      script = document.createElement("script")
      script.src = "https://cdn.jsdelivr.net/gh/xiabo2/CDN@latest/fish.js"
      script.setAttribute("data-custom-fish", "true")
      document.body.appendChild(script)
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", appendFishEffect)
  } else {
    appendFishEffect()
  }

  window.addEventListener("pjax:complete", appendFishEffect)
})()
