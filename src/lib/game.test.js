import { threeOrMoreInARow } from './game'

describe('threeOrMoreInARow', () => {
  const row = [0,2,1,2,2,2]
  const col = [1,1,1,0,2,2]
  const col1 = [0,1,1,1,2,1]

  it('returns the indices of the wrongly placed values', () => {
    expect(threeOrMoreInARow(row)).toEqual([3,4,5])
    expect(threeOrMoreInARow(col)).toEqual([0,1,2])
    expect(threeOrMoreInARow(col1)).toEqual([1,2,3])
  })
})
