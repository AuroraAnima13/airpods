const chooseColor = document.querySelectorAll(".choose__color-btn")
const contentItem = document.querySelectorAll(".content__item")

function open(e) {
  chooseColor.forEach((item) =>
    item.classList.remove("choose__color-btn--active")
  )

  contentItem.forEach((item) => item.classList.remove("content__item--active"))

  let target = e.currentTarget
  let color = target.dataset.button
  let contentActive = document.querySelectorAll(`.${color}`)

  console.log(color)

  target.classList.add("choose__color-btn--active")
  contentActive.forEach((item) => item.classList.add("content__item--active"))
}

chooseColor.forEach((item) => item.addEventListener("click", open))
