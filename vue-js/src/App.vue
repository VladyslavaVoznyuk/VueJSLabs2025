<template>
  <div class="todo-app container">
    <h1 class="title">To-Do App</h1>

    <section class="card add-form" aria-labelledby="add-heading">
      <h2 id="add-heading">Додати завдання</h2>
      <div class="form-row">
        <input v-model="newTask.title" placeholder="Назва (обов'язково)" />
        <select v-model="newTask.priority" aria-label="Priority">
          <option value="low">Низький</option>
          <option value="medium">Середній</option>
          <option value="high">Високий</option>
        </select>
      </div>
      <div class="form-row">
        <textarea v-model="newTask.description" placeholder="Опис (опціонально)"></textarea>
      </div>
      <div class="form-row actions">
        <button v-on:click="addTask" v-bind:disabled="isAddingDisabled">Додати</button>
        <button v-on:click="clearNewTask" class="muted">Очистити</button>
      </div>
      <p v-if="addError" class="error">{{ addError }}</p>
    </section>

    <section class="card filters" aria-labelledby="filters-heading">
      <h2 id="filters-heading">Фільтрація</h2>
      <div class="filters-grid">
        <input v-model="filters.title" placeholder="Пошук по title" />
        <input v-model="filters.description" placeholder="Пошук по description" />
        <select v-model="filters.status">
          <option value="">Всі статуси</option>
          <option value="active">Активні</option>
          <option value="done">Виконані</option>
        </select>
        <select v-model="filters.priority">
          <option value="">Всі пріоритети</option>
          <option value="low">Низький</option>
          <option value="medium">Середній</option>
          <option value="high">Високий</option>
        </select>

        <div class="date-range">
          <label>Дата від</label>
          <input type="date" v-model="filters.dateFrom" />
        </div>
        <div class="date-range">
          <label>Дата до</label>
          <input type="date" v-model="filters.dateTo" />
        </div>
      </div>

      <div class="form-row actions">
        <button v-on:click="clearFilters" class="muted">Очистити фільтри</button>
      </div>
    </section>

    <section class="card counters">
      <p>
        Всього: <strong>{{ total }}</strong> | Активні: <strong>{{ active }}</strong> | Виконані:
        <strong>{{ completed }}</strong>
      </p>
    </section>

    <section class="card list">
      <h2>Список завдань (відфільтровано: {{ filteredTasks.length }})</h2>
      <p v-if="filteredTasks.length === 0" class="muted">Немає завдань за поточними фільтрами.</p>

      <ul>
        <li v-for="task in paginatedTasks" v-bind:key="task.id" class="task-item">
          <div class="task-left">
            <input
              type="checkbox"
              v-bind:checked="task.status === 'done'"
              v-on:change="toggleStatus(task)"
              v-bind:aria-label="`Позначити ${task.title} як виконане`"
            />
            <div class="task-main">
              <div class="task-title" v-bind:class="{ done: task.status === 'done' }">
                <span v-if="editingId !== task.id">{{ task.title }}</span>

                <input v-else v-model="editBuffer.title" />
                <small class="meta">• {{ task.priority }} • {{ formatDate(task.createdAt) }}</small>
              </div>
              <div class="task-desc">
                <span v-if="editingId !== task.id">{{ task.description || '—' }}</span>
                <textarea v-else v-model="editBuffer.description"></textarea>
              </div>
            </div>
          </div>

          <div class="task-right">
            <div v-if="editingId !== task.id" class="btn-group">
              <button v-on:click="startEdit(task)">✏️</button>
              <button v-on:click="deleteTask(task.id)" class="danger">🗑</button>
            </div>

            <div v-else class="btn-group">
              <button v-on:click="saveEdit(task)" v-bind:disabled="!editBuffer.title.trim()">
                Зберегти
              </button>
              <button v-on:click="cancelEdit">Скасувати</button>
            </div>
          </div>
        </li>
      </ul>

      <div class="pagination" v-if="pageCount > 1">
        <button v-on:click="prevPage" v-bind:disabled="currentPage === 1">«</button>

        <button
          v-for="p in pageCount"
          v-bind:key="p"
          v-on:click="gotoPage(p)"
          v-bind:class="{ active: p === currentPage }"
        >
          {{ p }}
        </button>

        <button v-on:click="nextPage" v-bind:disabled="currentPage === pageCount">»</button>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive, computed, watch, onMounted } from 'vue'
import './TodoApp.css'

const STORAGE_KEY = 'lab1-todo-tasks'
const DEFAULT_PAGE_SIZE = 5

function createTask(title, description, priority) {
  return {
    id: Date.now() + Math.floor(Math.random() * 1000),
    title: title.trim(),
    description: description?.trim() || '',
    status: 'active',
    createdAt: new Date().toISOString(),
    priority: priority || 'medium',
  }
}

const tasks = ref([])
const newTask = reactive({
  title: '',
  description: '',
  priority: 'medium',
})
const addError = ref('')

const filters = reactive({
  title: '',
  description: '',
  status: '',
  priority: '',
  dateFrom: '',
  dateTo: '',
})

const currentPage = ref(1)
const pageSize = ref(DEFAULT_PAGE_SIZE)

const editingId = ref(null)
const editBuffer = reactive({
  title: '',
  description: '',
  priority: '',
})

onMounted(() => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) tasks.value = JSON.parse(raw)
  } catch (e) {
    tasks.value = []
    console.error('Не вдалося прочитати LocalStorage', e)
  }
})

watch(
  tasks,
  (val) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(val))
  },
  { deep: true },
)

const isAddingDisabled = computed(() => !newTask.title.trim())

function addTask() {
  addError.value = ''
  if (!newTask.title || !newTask.title.trim()) {
    addError.value = "Поле 'Назва' не може бути порожнім."
    return
  }
  const task = createTask(newTask.title, newTask.description, newTask.priority)
  tasks.value.unshift(task)
  clearNewTask()
  currentPage.value = 1
}

function clearNewTask() {
  newTask.title = ''
  newTask.description = ''
  newTask.priority = 'medium'
  addError.value = ''
}

function toggleStatus(task) {
  task.status = task.status === 'active' ? 'done' : 'active'
}

function deleteTask(id) {
  tasks.value = tasks.value.filter((t) => t.id !== id)
  if (currentPage.value > pageCount.value) currentPage.value = Math.max(1, pageCount.value)
}

function startEdit(task) {
  editingId.value = task.id
  editBuffer.title = task.title
  editBuffer.description = task.description
  editBuffer.priority = task.priority
}

function saveEdit(task) {
  if (!editBuffer.title || !editBuffer.title.trim()) return
  task.title = editBuffer.title.trim()
  task.description = editBuffer.description.trim()
  task.priority = editBuffer.priority
  editingId.value = null
}

function cancelEdit() {
  editingId.value = null
  editBuffer.title = ''
  editBuffer.description = ''
}

function formatDate(iso) {
  try {
    return new Date(iso).toLocaleString()
  } catch {
    return iso
  }
}

const filteredTasks = computed(() => {
  return tasks.value.filter((t) => {
    const titleMatch = filters.title
      ? t.title.toLowerCase().includes(filters.title.toLowerCase())
      : true
    const descMatch = filters.description
      ? (t.description || '').toLowerCase().includes(filters.description.toLowerCase())
      : true
    const statusMatch = filters.status ? t.status === filters.status : true
    const prioMatch = filters.priority ? t.priority === filters.priority : true
    const created = new Date(t.createdAt)
    const fromMatch = filters.dateFrom ? created >= new Date(filters.dateFrom + 'T00:00:00') : true
    const toMatch = filters.dateTo ? created <= new Date(filters.dateTo + 'T23:59:59') : true
    return titleMatch && descMatch && statusMatch && prioMatch && fromMatch && toMatch
  })
})

const pageCount = computed(() =>
  Math.max(1, Math.ceil(filteredTasks.value.length / pageSize.value)),
)

const paginatedTasks = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value
  return filteredTasks.value.slice(start, start + pageSize.value)
})

function gotoPage(p) {
  if (p >= 1 && p <= pageCount.value) currentPage.value = p
}
function prevPage() {
  if (currentPage.value > 1) currentPage.value--
}
function nextPage() {
  if (currentPage.value < pageCount.value) currentPage.value++
}

function clearFilters() {
  filters.title = ''
  filters.description = ''
  filters.status = ''
  filters.priority = ''
  filters.dateFrom = ''
  filters.dateTo = ''
  currentPage.value = 1
}

const total = computed(() => tasks.value.length)
const active = computed(() => tasks.value.filter((t) => t.status === 'active').length)
const completed = computed(() => tasks.value.filter((t) => t.status === 'done').length)
</script>
