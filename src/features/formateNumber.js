export const formate = (num) => {
  const number = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(num)
  return number
}
