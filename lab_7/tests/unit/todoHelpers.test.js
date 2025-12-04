import { describe, it, expect } from 'vitest'
import { getActiveCount } from "@/utils/todoHelpers.js"

describe('getActiveCount', () => {
  it('returns correct number of active tasks', () => {
    const tasks = [
      { status: 'active' },
      { status: 'done' },
      { status: 'active' }
    ]

    const result = getActiveCount(tasks)

    expect(result).toBe(2)
  })
})
