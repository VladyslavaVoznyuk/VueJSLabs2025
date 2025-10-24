function delay(ms = 300) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export async function getUsers() {
  await delay()
  const usersJson = localStorage.getItem('mock_users')
  const users = usersJson
    ? JSON.parse(usersJson)
    : [
        { id: '1', name: 'Admin One', email: 'admin1@example.com' },
        { id: '2', name: 'User Two', email: 'user2@example.com' },
      ]
  localStorage.setItem('mock_users', JSON.stringify(users))
  return users
}

export async function getUserById(id) {
  const users = await getUsers()
  return users.find((u) => u.id === id) || null
}

export async function saveUser(user) {
  const users = await getUsers()
  const idx = users.findIndex((u) => u.id === user.id)
  if (idx >= 0) {
    users[idx] = user
  } else {
    user.id = String(Date.now())
    users.push(user)
  }
  localStorage.setItem('mock_users', JSON.stringify(users))
  return user
}

export async function getReports() {
  await delay()
  return [
    { id: 'r1', title: 'Report A', value: 10 },
    { id: 'r2', title: 'Report B', value: 23 },
  ]
}
