var cardCategoryList = document.getElementsByClassName("card-category-list child")
var cardCategoryIndex = 0

function toggleCategoryChildren(target) {
  var next = target.parentElement.nextSibling
  if (!next) return

  var display = next.style.display
  if (display === "none") {
    next.style.display = "block"
    next.style.height = "100%"
    target.className = target.className.replace("fa-chevron-up", "fa-chevron-down")
  } else {
    next.style.display = "none"
    target.className = target.className.replace("fa-chevron-down", "fa-chevron-up")
  }
}

for (cardCategoryIndex = 0; cardCategoryIndex < cardCategoryList.length; cardCategoryIndex++) {
  cardCategoryList[cardCategoryIndex].style.display = "none"
  cardCategoryList[cardCategoryIndex].style.transition = "all 1s"
  cardCategoryList[cardCategoryIndex].previousSibling.innerHTML +=
    '<i class="fa fa-chevron-up menus-expand menus-closed" aria-hidden="true" style="margin-left:20px;"></i>'
}

document.addEventListener("click", function (event) {
  var target = event.target
  if (target && target.classList.contains("menus-expand")) {
    toggleCategoryChildren(target)
  }
})
