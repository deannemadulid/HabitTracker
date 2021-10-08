const past7Days = () => {
  let daysArray = []

  for (let i = 6; i > -1; i--) {
    const date = new Date()
    date.setDate(date.getDate() - i)
    const month = date.toLocaleString('default', { month: 'short' })
    daysArray.push(month + " " + date.getDate())
  }

  return daysArray
}

 const convertDateToString = (date) => {
   const month = date.toLocaleString('default', { month: 'short' })
   const day = date.getDate()
   return month + " " + day
 }

const checkDateInDateArray = (date, dateArray) => {
  const dateStringArray = dateArray.map(date => convertDateToString(date))
  return dateStringArray.includes(date)
}

export default { past7Days, checkDateInDateArray }