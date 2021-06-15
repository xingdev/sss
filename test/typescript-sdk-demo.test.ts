import TsSdk from '../src/typescript-sdk'

/**
 * TsSdk test
 */
describe('TsSdk test', () => {
  test('should return a number muti value', () => {
    const a = 1
    const b = 3

    const result = TsSdk.add(a, b)

    expect(result).toBe(4)
  })
})
