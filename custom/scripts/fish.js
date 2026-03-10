(function () {
  var container
  var script

  function appendFishEffect() {
    var footer = document.querySelector("footer")
    var footerOther = document.querySelector("#footer .footer-other")

    if (!footer) return

    footer.style.position = "relative"

    if (footerOther) {
      footerOther.style.position = "relative"
      footerOther.style.zIndex = "2"
      footerOther.style.textAlign = "center"
    }

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
