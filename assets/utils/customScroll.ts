export default function customScroll(e: any) {
  console.log('customScroll')
  e.preventDefault()
  const myWindow: any = window
  myWindow.no_scroll = true
  const id = e.target.dataset.href
  console.log('id', id)

  document.getElementById(id)?.scrollIntoView()
  setTimeout(() => {
    myWindow.no_scroll = false
  }, 2000)
}
