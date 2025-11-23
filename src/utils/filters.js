/**
 * filterBy - filter feedback array by keyword and optional date range
 * @param {Array} list
 * @param {{keyword?:string,from?:string,to?:string}} options
 */
export function filterBy(list = [], { keyword = '', from = '', to = '' } = {}) {
  let output = list.slice()
  if (keyword) {
    const k = keyword.toLowerCase()
    output = output.filter((f) => (f.name + ' ' + f.email + ' ' + f.message).toLowerCase().includes(k))
  }
  if (from) {
    const fromTs = new Date(from).getTime()
    output = output.filter((f) => new Date(f.date).getTime() >= fromTs)
  }
  if (to) {
    const toTs = new Date(to).getTime() + 24 * 3600 * 1000 - 1
    output = output.filter((f) => new Date(f.date).getTime() <= toTs)
  }
  return output
}
