
<script>
import { onMounted } from 'vue'
import { oscUrl } from '../constants'

export default {
  setup() {

    // hack footer 部分
    // 使其可以点击跳转到 osc
    onMounted(() => {
      const licenseElm = document.querySelector(
        'footer.footer .container p.text'
      )
      if (!licenseElm) {
        return
      }
      const text = licenseElm.textContent
      const handleHtml = /* html */ `
        <a
          target='_blank' 
          href='${oscUrl}' 
          style='text-decoration: none; color: inherit;'
        >
          ${text}
        </a>
      `
      licenseElm.innerHTML = handleHtml
    })
  },
}
</script>
