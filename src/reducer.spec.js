import characters, { initialState } from './Store/reducers/characters'

describe('test reducer', () => {
  it('FETCH_DATA', () => {
    const action = { type: 'FETCH_DATA', payload: [1, 2] }
    expect(characters(initialState, action)).toEqual({
      ...initialState,
      data: action.payload,
      comics: [],
      loading: false,
      comicsLoading: false,
    })
  })

  it('GET_COMICS', () => {
    const action = {
      type: 'GET_COMICS',
      payload: [1, 2],
    }

    expect(characters(initialState, action)).toEqual({
      data: [],
      comics: action.payload,
      loading: false,
      comicsLoading: false,
    })
  })

  it('FETCH_LOADING_TRUE', () => {
    const action = {
      type: 'FETCH_LOADING_TRUE',
    }

    expect(characters(initialState, action)).toEqual({
      ...initialState,
      loading: true,
      data: [],
      comics: [],
      comicsLoading: false,
    })
  })

  it('FETCH_LOADING_FALSE', () => {
    const action = {
      type: 'FETCH_LOADING_FALSE',
    }

    expect(characters(initialState, action)).toEqual({
      ...initialState,
      loading: false,
      data: [],
      comics: [],
      comicsLoading: false,
    })
  })

  it('COMICS_LOADING_TRUE', () => {
    const action = {
      type: 'COMICS_LOADING_TRUE',
    }

    expect(characters(initialState, action)).toEqual({
      ...initialState,
      loading: false,
      data: [],
      comics: [],
      comicsLoading: true,
    })
  })

  it('COMICS_LOADING_FALSE', () => {
    const action = {
      type: 'COMICS_LOADING_FALSE',
    }

    expect(characters(initialState, action)).toEqual({
      ...initialState,
      loading: false,
      data: [],
      comics: [],
      comicsLoading: false,
    })
  })
})
