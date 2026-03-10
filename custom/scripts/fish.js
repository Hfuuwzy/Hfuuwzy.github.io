(function () {
  var animationId = null

  function createFish(width, height) {
    return {
      x: Math.random() * width,
      y: height * (0.2 + Math.random() * 0.55),
      speed: 0.35 + Math.random() * 0.8,
      scale: 0.6 + Math.random() * 0.8,
      wobble: Math.random() * Math.PI * 2,
      color: Math.random() > 0.5 ? "rgba(255,255,255,0.3)" : "rgba(173,216,230,0.28)"
    }
  }

  function drawFish(ctx, fish) {
    ctx.save()
    ctx.translate(fish.x, fish.y + Math.sin(fish.wobble) * 4)
    ctx.scale(fish.scale, fish.scale)
    ctx.fillStyle = fish.color

    ctx.beginPath()
    ctx.ellipse(0, 0, 18, 8, 0, 0, Math.PI * 2)
    ctx.fill()

    ctx.beginPath()
    ctx.moveTo(-16, 0)
    ctx.lineTo(-28, -8)
    ctx.lineTo(-28, 8)
    ctx.closePath()
    ctx.fill()

    ctx.beginPath()
    ctx.arc(8, -1, 1.5, 0, Math.PI * 2)
    ctx.fillStyle = "rgba(255,255,255,0.65)"
    ctx.fill()

    ctx.restore()
  }

  function setupFishEffect() {
    var footer = document.querySelector("footer")
    var footerOther = document.querySelector("#footer .footer-other")
    var oldCanvas = document.getElementById("footer-fish-canvas")
    var canvas = document.createElement("canvas")
    var ctx
    var fishes = []
    var fishCount = 0
    var i = 0

    if (!footer) return

    if (animationId) {
      window.cancelAnimationFrame(animationId)
      animationId = null
    }

    if (oldCanvas) oldCanvas.remove()

    footer.style.position = "relative"
    footer.style.overflow = "hidden"

    if (footerOther) {
      footerOther.style.position = "relative"
      footerOther.style.zIndex = "2"
      footerOther.style.textAlign = "center"
    }

    canvas.id = "footer-fish-canvas"
    canvas.style.position = "absolute"
    canvas.style.left = "0"
    canvas.style.top = "0"
    canvas.style.width = "100%"
    canvas.style.height = "100%"
    canvas.style.pointerEvents = "none"
    canvas.style.zIndex = "1"
    footer.appendChild(canvas)

    ctx = canvas.getContext("2d")
    if (!ctx) return

    function resize() {
      var rect = footer.getBoundingClientRect()
      canvas.width = Math.max(320, Math.floor(rect.width))
      canvas.height = Math.max(120, Math.floor(rect.height))
      fishCount = Math.max(5, Math.min(10, Math.floor(canvas.width / 180)))
      fishes = []
      for (i = 0; i < fishCount; i++) fishes.push(createFish(canvas.width, canvas.height))
    }

    function frame() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (i = 0; i < fishes.length; i++) {
        fishes[i].x += fishes[i].speed
        fishes[i].wobble += 0.05
        if (fishes[i].x > canvas.width + 36) {
          fishes[i] = createFish(canvas.width, canvas.height)
          fishes[i].x = -36
        }
        drawFish(ctx, fishes[i])
      }
      animationId = window.requestAnimationFrame(frame)
    }

    resize()
    frame()
    window.addEventListener("resize", resize, { passive: true })
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setupFishEffect)
  } else {
    setupFishEffect()
  }

  window.addEventListener("pjax:complete", setupFishEffect)
})()
