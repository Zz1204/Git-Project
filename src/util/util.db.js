import low from 'lowdb'
import LocalStorage from 'lowdb/adapters/LocalStorage'

const adapters = new LocalStorage(`admin-${process.env.VUE_APP_VERSION}`)
const db = low(adapters)

db.defaults({
  sys: {},
  database: {}
})

export default db
