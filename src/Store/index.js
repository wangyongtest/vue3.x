import  { createStore  } from 'vuex'

import Users from './models/user'

const store = createStore({
...Users
})

export default store
