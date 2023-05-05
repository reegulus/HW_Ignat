import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): any => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
          /*  if(action.payload === 'up') {
                return [...state].sort((a, b) => {
                    return a.name > b.name ? 1 : -1
                })
            } else return [...state].sort((a, b) => {
                return a.name < b.name ? -1 : 1
            })*/
            const newState = [...state].sort((a, b) => {
                if(a.name > b.name) return 1
                else if (a.name < b.name) return -1
                else return 0
            })

            return action.payload == 'up' ? newState : newState.reverse()// need to fix
        }
        case 'check': {

            return state.filter(el => el.age >= action.payload) // need to fix
        }
        default:
            return state
    }
}
