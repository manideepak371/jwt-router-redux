import {} from 'react-redux'
import {configureStore} from '@reduxjs/toolkit'
import Reducer from './reducer'

const store=configureStore({reducer:Reducer})
console.log(store.getState())

export default store