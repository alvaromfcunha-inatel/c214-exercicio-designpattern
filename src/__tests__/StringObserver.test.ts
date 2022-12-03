import { StringObserver } from "../StringObserver"

test('string observer works successfuly', () => {
  const s = 'Olá meu nome é Jefersson.'
  const so = new StringObserver(s)

  const a = so.getWordCount()
  const b = so.getEvenWordCount()
  const c = so.getUpperCaseWordCount()

  expect(a).toBe(5)
  expect(b).toBe(3)
  expect(c).toBe(2)
})