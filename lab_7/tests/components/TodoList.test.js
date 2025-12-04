import { mount } from '@vue/test-utils'
import TodoList from '@/components/TodoList.vue'

describe('TodoList', () => {
  it('renders correct number of TodoItem', () => {
    const tasks = [
      { id: 1, title: 'Task 1', status: 'active' },
      { id: 2, title: 'Task 2', status: 'done' }
    ]

    const wrapper = mount(TodoList, {
      props: { tasks }
    })

    expect(wrapper.findAll('li')).toHaveLength(2)
  })

  it('emits toggle-task from child event', async () => {
    const tasks = [{ id: 1, title: 'Task 1', status: 'active' }]

    const wrapper = mount(TodoList, {
      props: { tasks }
    })

    await wrapper.find('input[type="checkbox"]').trigger('change')

    expect(wrapper.emitted()['toggle-task']).toBeTruthy()
    expect(wrapper.emitted()['toggle-task'][0]).toEqual([1])
  })
})
