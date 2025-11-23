const STORAGE_KEY = 'feedbacks_v1'

const read = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch (e) {
    return []
  }
}

const write = (arr) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(arr))
}

const FeedbackService = {
  getAll() {
    return read()
  },

  save(entry) {
    const all = read()
    all.unshift(entry)
    write(all)
    return entry
  },

  deleteById(id) {
    const all = read().filter((x) => x.id !== id)
    write(all)
  },

  filterBy({ keyword = '', from = '', to = '' } = {}) {
    let all = read()
    if (keyword) {
      const k = keyword.toLowerCase()
      all = all.filter((f) => (f.name + ' ' + f.email + ' ' + f.message).toLowerCase().includes(k))
    }
    if (from) {
      const fromTs = new Date(from).getTime()
      all = all.filter((f) => new Date(f.date).getTime() >= fromTs)
    }
    if (to) {
      const toTs = new Date(to).getTime() + 24 * 3600 * 1000 - 1
      all = all.filter((f) => new Date(f.date).getTime() <= toTs)
    }
    return all
  }
}

export default FeedbackService
