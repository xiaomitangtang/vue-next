import { setDevtoolsHook } from '@vue/runtime-dom'
import { getGlobalThis } from '@vue/shared'

export function initDev() {
  // 获取  全局对象  window  gloabal  self 等等 根据环境 获取不停
  const target = getGlobalThis()
  // 加入一个vue变量？？？
  target.__VUE__ = true
  setDevtoolsHook(target.__VUE_DEVTOOLS_GLOBAL_HOOK__)

  if (__BROWSER__) {
    console.info(
      `You are running a development build of Vue.\n` +
        `Make sure to use the production build (*.prod.js) when deploying for production.`
    )
  }
}
