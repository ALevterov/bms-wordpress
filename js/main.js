const links = document.querySelectorAll('.nav-link')

const isMobile = window.innerWidth < 768

let offsetTop = !isMobile ? 100 : 42

const header = document.getElementById('header')

window.addEventListener('scroll', e => {
  if (window.scrollY > offsetTop) {
    header.classList.add('fixed')
  }
  if (window.scrollY < offsetTop) {
    header.classList.remove('fixed')
  }
})

const html = document.querySelector('html')
const mobileMenu = document.querySelector('#mobile-menu')
const openMenu = () => {
  html.classList.add('lock')
  mobileMenu.classList.remove('closed')
}

const closeMenu = () => {
  html.classList.remove('lock')
  mobileMenu.classList.add('closed')
}

const burger = document.querySelector('#burger')
burger.addEventListener('click', openMenu)

const closeMobileMenu = document.querySelector('#close-mobile-menu')
closeMobileMenu.addEventListener('click', closeMenu)

const handleLinkClick = e => {
  let id = ''

  if (typeof e === 'string') id = e
  else {
    e.preventDefault()
    id = e.target.dataset?.href
  }

  if (!id) id = e.target.childNodes[0].dataset.href

  const el = document.querySelector('#' + id)
  window._stopStupidBrowsersBehavior = true

  if (el)
    el.scrollIntoView({
      behavior: 'smooth',
    })
  setTimeout(() => {
    window._stopStupidBrowsersBehavior = false
  }, 700)
}

links.forEach(link => link.addEventListener('click', handleLinkClick))

const mobileLinks = document.querySelectorAll('.mobile-nav-link')

const onMobileMenuLinkClick = e => {
  e.preventDefault()
  const href = e.target.dataset.href
  closeMenu()
  setTimeout(() => {
    handleLinkClick(href)
  }, 50)
}

mobileLinks.forEach(link =>
  link.addEventListener('click', onMobileMenuLinkClick)
)

const reviewsSection = document.querySelector('#reviews')
const div = document.querySelector('#divRef')
const scrollableArea = document.querySelector('#scrollable-area')
const container = document.querySelector('#containerRef')
const photosName = document.querySelector('#photos_name')
const photosImg = document.querySelector('#photos_img')
const photosFam = document.querySelector('#photos_fam')

const reviewIndex = document.querySelector('#review-index')
const sItemContainer = document.querySelector('#s_item_container')
const sItemText = document.querySelector('#s_item_text')
const sItemAuthor = document.querySelector('#s_item_author')
const sItemIndexArea = document.querySelector('#s_item_indexArea')

const assetRoot = container.dataset.path
const imageRoot = container.dataset.path + 'reviews/'
const authorsDesc = [
  {
    fam: 'Melnychenko',
    name: 'Max',
    img: imageRoot + 'Max.webp',
  },
  {
    fam: 'Nazarova',
    name: 'Alisa',
    img: imageRoot + 'Alisa.webp',
  },
  {
    fam: 'Mirov',
    name: 'Pavel',
    img: imageRoot + 'Pavel.webp',
  },
  {
    fam: 'Akmolinko',
    name: 'Andrei',
    img: imageRoot + 'Andrei.webp',
  },
  {
    fam: 'Tavrichenko',
    name: 'Roman',
    img: imageRoot + 'Roman.webp',
  },
]
const authorsMobile = [
  {
    fam: 'Melnychenko',
    name: 'Max',
    img: imageRoot + 'mobile/Roman.webp',
  },
  {
    fam: 'Nazarova',
    name: 'Alisa',
    img: imageRoot + 'mobile/Alisa.webp',
  },
  {
    fam: 'Mirov',
    name: 'Pavel',
    img: imageRoot + 'mobile/Pavel.webp',
  },
  {
    fam: 'Akmolinko',
    name: 'Andrei',
    img: imageRoot + 'mobile/Andrei.webp',
  },
  {
    fam: 'Tavrichenko',
    name: 'Roman',
    img: imageRoot + 'mobile/Roman.webp',
  },
]
const items = [
  {
    author: 'Max Melnychenko',
    children: `Sincerely grateful to Nikolai for a quick and insightful assistance in launching Amazon OA sales. An excellent mentor, promptly adjusting training and practice. He provided everything possible to expedite the process. 100% compliance with agreements. A man of his word and an outstanding professional. Frankly, I don't understand how he manages to do it all.`,
  },
  {
    author: 'Alisa Nazarova',
    children:
      'Excellent start! It greatly helped in promoting our new brand. I will definitely be reaching out again.',
  },
  {
    author: 'Pavel Mirov',
    children:
      'We acquired an advertising and niche audit. Within a short period, we received competent and comprehensive information that proved to be extremely helpful. I highly recommend it to everyone.',
  },
  {
    author: 'Andrei Akmolinko',
    children:
      'Thank you for analyzing my situation - concise and to the point. I agree with everything. Turns out the problems were not where I initially thought they were.',
  },
  {
    author: 'Roman Tavrichenko',
    children:
      'Thank you for everything. We appreciate the excellent professional service and prompt resolution of the account issues.',
  },
]
let currentIndex = 0
let currentArray = isMobile ? authorsMobile : authorsDesc
let currentAuthor = currentArray[currentIndex]

photosName.innerHTML = currentAuthor.name
photosFam.innerHTML = currentAuthor.fam
photosImg.src = currentAuthor.img

let scrollAreaInnerHTML = ''

items.forEach((item, index) => {
  scrollAreaInnerHTML += '<div class="s_item_container" id="s_item_container">'
  if (index !== 1) {
    scrollAreaInnerHTML += `<div class="s_item_indexArea" id="s_item_indexArea">
		<div class="line"></div>
		<div class="index" id="review-index">#0${index + 1}</div>
	</div>`
  }
  scrollAreaInnerHTML += `<h3 class="s_item_author" id="s_item_author">${item.author}</h3>
<div class="s_item_divider"></div>
<div class="s_item_text">
	<div class="s_item_textInner" id="s_item_text">${item.children}</div>
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='135'
		height='117'
		viewBox='0 0 135 117'
		fill='none'
	>
		<path
			d='M135 0V57.8352C135 80.4375 131.25 95.9488 123.75 104.369C116.25 112.79 102.794 117 83.3824 117H74.7794V95.0625H83.3824C96.1765 95.0625 104.118 91.2954 107.206 83.7614C110.735 75.7841 112.5 67.142 112.5 57.8352H74.7794V0H135ZM60.2206 0V57.8352C60.2206 80.4375 56.4706 95.9488 48.9706 104.369C41.4706 112.79 28.0147 117 8.60294 117H0V95.0625H8.60294C14.7794 95.0625 19.8529 93.9545 23.8235 91.7386C27.7941 89.5227 30.6618 86.8636 32.4265 83.7614C34.6324 80.2159 35.9559 76.2273 36.3971 71.7955C37.2794 66.9204 37.7206 62.267 37.7206 57.8352H0V0H60.2206Z'
			fill='#F2F2F2'
		/>
	</svg>
</div>
</div>`
})

scrollableArea.innerHTML = scrollAreaInnerHTML

const sItems = document.querySelectorAll('.s_item_container')

const intersectionCallback = index => {
  window.dispatchEvent(
    new CustomEvent('item-in-view', {
      bubbles: true,
      composed: true,
      detail: {
        index,
      },
    })
  )
}

let threshold
if (!isMobile) {
  threshold = 1
} else {
  threshold = 0.8
}

sItems.forEach((item, i) => {
  const observer = new IntersectionObserver(() => intersectionCallback(i), {
    threshold: threshold,
  })
  observer.observe(item)
})

const reviewListener = e => {
  const index = e.detail.index
  currentAuthor = currentArray[index]
  photosName.innerHTML = currentAuthor.name
  photosFam.innerHTML = currentAuthor.fam
  photosImg.src = currentAuthor.img
}

window.addEventListener('item-in-view', reviewListener)

// scroll manipulations

const onScrollableBlockScroll = e => {
  e.preventDefault()
  window.dispatchEvent(e)
}
scrollableArea.addEventListener('wheel', onScrollableBlockScroll, {
  passive: false,
})

function getCoords(elem) {
  var box = elem.getBoundingClientRect()

  return {
    topCoord: box.top + scrollY,
    leftCoord: box.left + scrollX,
  }
}

let { topCoord } = getCoords(reviewsSection)
const section = reviewsSection
const scrollArea = scrollableArea
const scrollHeight = scrollArea.scrollHeight
const divHeight = div.clientHeight
let offset = 400
if (window.innerWidth < 768) {
  offset = 500
} else {
  topCoord += 200
}
section.style.height = divHeight + scrollHeight + offset + 'px'
const myWindow = window
window.addEventListener('scroll', () => {
  if (myWindow._stopStupidBrowsersBehavior) return
  const diff = window.scrollY - topCoord
  if (window.scrollY > topCoord) {
    scrollArea.scrollTop = diff
  }
  if (window.scrollY < topCoord) {
    scrollArea.scrollTop = 0
  }
})

const caseItems = document.querySelectorAll('.cases_trigger')

caseItems.forEach(ci => {
  ci.addEventListener('click', e => {
    const index = e.target.dataset.index
    window.dispatchEvent(
      new CustomEvent('open-popup', {
        bubbles: true,
        composed: true,
        detail: {
          index,
        },
      })
    )
  })
})

const formContainer = document.querySelector('#form-container')

const formBgSrc = assetRoot + 'contact.webp'
const formMobileBg = document.querySelector('#form_mobile_bg')
const formMobileBgSrc = assetRoot + 'contact-mobile.webp'

if (!isMobile) {
  formContainer.style.backgroundImage = `url('${formBgSrc}')`
  formMobileBg.classList.add('hidden')
} else {
  formMobileBg.src = formMobileBgSrc
  formMobileBg.classList.remove('hidden')
}

// set visibility hidden or visible depend on server response
const formWrapper = document.querySelector('#form_wrapper')
const form = document.querySelector('#form')
const submitBtn = document.querySelector('#submit_btn')
const successMessage = document.querySelector('#success_message')
const errorMessage = document.querySelector('#error_message')

const spinner = `<div class="ldsRing"><div></div><div></div><div></div><div></div></div>`
const btnText = 'send a request'

const setLoading = flag => {
  if (flag) submitBtn.innerHTML = spinner
  else submitBtn.innerHTML = btnText
}

const handleSubmit = async e => {
  e.preventDefault()
  console.log('e', e)
  const name = formWrapper.querySelector('input[name="name"]').value
  const email = formWrapper.querySelector('input[name="e-mail"]').value
  const phone = formWrapper.querySelector('input[name="phone"]').value
  const message = formWrapper.querySelector('input[name="message"]').value
  const values = { name, email, phone, message }
  console.log('values', values)
  try {
    setLoading(true)
    const res = await fetch('https://bmysales.com:5000/send_message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
    successMessage.classList.remove('hidden')
    errorMessage.classList.add('hidden')
    formWrapper.style.visibility = 'hidden'
    console.log('res', res)
  } catch (e) {
    successMessage.classList.add('hidden')
    errorMessage.classList.remove('hidden')
    formWrapper.style.visibility = 'hidden'
  } finally {
    setLoading(false)
  }
  setTimeout(() => {
    successMessage.classList.add('hidden')
    errorMessage.classList.add('hidden')
    formWrapper.style.visibility = 'visible'
  }, 6000)
}

form.addEventListener('submit', handleSubmit)

const popupWrapper = document.querySelector('.popup_wrapper')
const popupClose = document.querySelector('.popup_close')
const popupImg = document.querySelector('.popup_img')

const popupImages = [
  assetRoot + 'cases/1.webp',
  assetRoot + 'cases/2.webp',
  assetRoot + 'cases/3.webp',
]

const openPopup = index => {
  popupImg.src = popupImages[index]
  popupWrapper.classList.remove('popup_closed')
}
const closePopup = () => {
  popupWrapper.classList.add('popup_closed')
}

window.addEventListener('open-popup', e => {
  const index = e.detail.index
  openPopup(index)
})

popupClose.addEventListener('click', closePopup)
