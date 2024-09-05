export default async function Customers() {
  // wait 5 seconds
  await new Promise(resolve => setTimeout(resolve, 1000))
  return <p>Customers</p>
}
