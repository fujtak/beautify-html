
import { getHTML } from './chrome.js'
import { formatHTML } from './beautify.js'
import { writeClipboard } from './clipboard.js'

const loadingIconEl = document.querySelector('.js-loadingIcon')
const messageEl = document.querySelector('.js-message')
const buttonEl = document.querySelector('.js-button')

const openLoadingIcon = () => {
  loadingIconEl.classList.remove('-hidden')
}
const closeLoadingIcon = () => {
  loadingIconEl.classList.add('-hidden')
}
const openMessage = () => {
  messageEl.classList.remove('-hidden')
}

// TODO: エラーが出たときはエラーメッセージを表示
// TODO: 外部をクリックしたら閉じる実装
buttonEl.addEventListener('click', async () => {
  openLoadingIcon()
  const html = await getHTML()
  const formatted = formatHTML(html)
  await writeClipboard(formatted)
  openMessage()
  closeLoadingIcon()
})
