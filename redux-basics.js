const redux = require('redux')
const createStore = redux.createStore

//Central State
const initialState = {
    counter:0
}

//Reducers - needed to be created before store

const rootReducer = (state = initialState,action)=>{
    if(action.type ==='INC_COUNTER'){
        return({
            ...state,
            counter:++state.counter
        })
    }
    if(action.type ==='ADD_COUNTER'){
        count = state.counter+action.payload
        return({
            ...state,
            counter:count
        })
    }
    return state
}

//Store - needs reducer(s)

const store = createStore(rootReducer)
console.log(store.getState())

//Subscriptions - create trigger
store.subscribe(()=>{
    console.log('Subscription fired')
})

//Actions
//example
store.dispatch({type:'INC_COUNTER'})
console.log(store.getState())
store.dispatch({type:'ADD_COUNTER',payload:10})
console.log(store.getState())
