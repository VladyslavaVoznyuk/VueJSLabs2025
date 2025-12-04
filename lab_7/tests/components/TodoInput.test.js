import { mount } from '@vue/test-utils'
import TodoInput from '@/components/TodoInput.vue'

describe('TodoInput', () => {
  it('emits add-task event with input value', async () => {
    const wrapper = mount(TodoInput)
    const input = wrapper.find('input')
    const button = wrapper.find('button')

    await input.setValue('Buy milk')
    await button.trigger('click')

    expect(wrapper.emitted()['add-task']).toBeTruthy()
    expect(wrapper.emitted()['add-task'][0]).toEqual(['Buy milk'])
  })

  it('clears input after adding task', async () => {
    const wrapper = mount(TodoInput)
    const input = wrapper.find('input')
    const button = wrapper.find('button')

    await input.setValue('Task')
    await button.trigger('click')

    expect(input.element.value).toBe('')
  })
})
