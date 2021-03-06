import reducer from '../../redux/reducers/reducers'

describe('Todo Reducer', () => {
    test('returns a state object', () => {
        const result = reducer(undefined, {type:'ANYTHING'})
        expect(result).toBeDefined()
    })

    test('adds a todo', () => {
        const startState = {
            todos: [
                {id: 1, name: 'Todo 1', isComplete: true},
                {id: 2, name: 'Todo 2', isComplete: true},
                {id: 3, name: 'Todo 3', isComplete: true}
            ]
        }
        const expectedState = {
            todos: [
                {id: 1, name: 'Todo 1', isComplete: true},
                {id: 2, name: 'Todo 2', isComplete: true},
                {id: 3, name: 'Todo 3', isComplete: true},
                {id: 4, name: 'Added todo', isComplete: false}
            ]
        }
        const action = {type:'TODO_ADD', payload: {id: 4, name:'Added todo', isComplete: false}}
        const result = reducer(startState, action)
        expect(result).toEqual(expectedState)
    })
}) 