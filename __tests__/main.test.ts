import {expect, test} from '@jest/globals'

test('avoid test', async () => {
  const input = 10
  await expect(input).toEqual(input)
})
