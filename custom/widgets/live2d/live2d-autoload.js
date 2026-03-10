const live2dPath = "/custom/widgets/live2d/widget/"

function loadExternalResource(url, type) {
  return new Promise((resolve, reject) => {
    let tag

    if (type === "css") {
      tag = document.createElement("link")
      tag.rel = "stylesheet"
      tag.href = url
    } else if (type === "js") {
      tag = document.createElement("script")
      tag.src = url
    }

    if (!tag) return reject(url)

    tag.onload = () => resolve(url)
    tag.onerror = () => reject(url)
    document.head.appendChild(tag)
  })
}

function initLive2d() {
  if (screen.width < 768 || window.__customLive2dLoaded) return
  window.__customLive2dLoaded = true

  Promise.all([
    loadExternalResource(live2dPath + "waifu.css", "css"),
    loadExternalResource(live2dPath + "live2d.min.js", "js"),
    loadExternalResource(live2dPath + "waifu-tips.js", "js")
  ]).then(() => {
    initWidget({
      waifuPath: live2dPath + "waifu-tips.json",
      cdnPath: "/custom/widgets/live2d/api/",
      tools: ["hitokoto", "asteroids", "switch-model", "photo", "info", "quit"]
    })
  })
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initLive2d)
} else {
  initLive2d()
}

window.addEventListener("pjax:complete", initLive2d)
