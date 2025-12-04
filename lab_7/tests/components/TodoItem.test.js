import { mount } from '@vue/test-utils'
import TodoItem from '@/components/TodoItem.vue'

describe('TodoItem', () => {
  it('renders title from props', () => {
    const wrapper = mount(TodoItem, {
      props: {
        task: { id: 1, title: 'Test task', status: 'active' }
      }
    })

    expect(wrapper.text()).toContain('Test task')
  })

  it('emits toggle event when checkbox clicked', async () => {
    const wrapper = mount(TodoItem, {
      props: {
        task: { id: 1, title: 'Task', status: 'active' }
      }
    })

    const checkbox = wrapper.find('input[type="checkbox"]')
    await checkbox.trigger('change')

    expect(wrapper.emitted().toggle).toBeTruthy()
    expect(wrapper.emitted().toggle[0]).toEqual([1])
  })
})
