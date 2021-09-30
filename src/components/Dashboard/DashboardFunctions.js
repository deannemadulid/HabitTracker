const past7Days = () => {
  let daysArray = []

  for (let i = 7; i > 0; i--) {
    const date = new Date()
    date.setDate(date.getDate() - i);
    const month = date.toLocaleString('default', { month: 'short' });
    daysArray.push(month + " " + date.getDate())
  }

  return daysArray
}

export default { past7Days }