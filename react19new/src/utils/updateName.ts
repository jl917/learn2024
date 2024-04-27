export const updateName = async (name: string) => {
  const res = await new Promise((resolve) => setTimeout(() => resolve("hello"), 2000))
  return 'this is fake error'
}