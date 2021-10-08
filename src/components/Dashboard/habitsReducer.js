const newHabit = 'NEW_HABIT'

const day1 = new Date()
const day2 = new Date()
day2.setDate(day2.getDate() - 1)

const initialState = [
    {name: "habit1", dates: [day1]},
    {name: "habit2", dates: [day1, day2]}
  ]

const habitsReducer = (state= initialState, action) => {
  switch (action.type) {
    case newHabit :
      return [...state, action.data]
    default:
      return state
  }
}

export const addNewHabit = (name) => {
  return {
    type: newHabit,
    data: { name, dates: [] }
  }
}

export default habitsReducer