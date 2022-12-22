import { getMedian } from '../utils/math'

describe('Math', () => {
  it('Test median', async () => {
    const median = getMedian([1, 2, 3, 4, 5])
    expect(median).toEqual(3)
  })
})
