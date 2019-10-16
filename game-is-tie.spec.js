const { gameIsTie } = require('./game-is-tie')


test('Vertical winner O on column 1 should work', () => {
    const board = [
      ['o', 'x', 'x'],
      ['o', null, 'o'],
      ['o', 'x', 'o']
    ]
    expect(gameIsTie(board)).toBe(false)
  })

  test('Vertical winner O on column 1 should work', () => {
    const board = [
      ['o', 'x', 'x'],
      ['x', 'o', 'o'],
      ['o', 'x', 'x']
    ]
    expect(gameIsTie(board)).toBe(true)
  })