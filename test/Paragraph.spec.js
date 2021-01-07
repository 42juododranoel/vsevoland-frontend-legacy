import { mount } from '@vue/test-utils'
import Paragraph from '@/components/Paragraph.vue'

describe('Paragraph', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Paragraph)
    expect(wrapper.vm).toBeTruthy()
  })
})
