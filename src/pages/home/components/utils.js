export const getColorTextByInteger = (int) => {
  if (int === 0) {
    return
  } return int > 0 ? 'green' : 'red'
}

export const getFormattedInteger = (int) => {
  const integer = int.toFixed()

  return int.toFixed().length > 4 ? (
    ((Math.abs(integer)/1000).toFixed(2))
  ) + 'K' : int
}
