import { Button } from 'ant-design-vue'

const ant = {
  install(Vue: any) {
    Vue.component(Button.name, Button)
  },
}

export default ant
