const initialState = {
  data: [],
  comics: [],
  loading: false,
  comicsLoading: false,
}

const characters = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_DATA':
      return {
        ...state,
        data: action.payload,
      }

    case 'FETCH_LOADING_TRUE':
      return {
        ...state,
        loading: true,
      }
    case 'FETCH_LOADING_FALSE':
      return {
        ...state,
        loading: false,
      }

    case 'GET_COMICS':
      return {
        ...state,
        comics: action.payload,
      }

    case 'COMICS_LOADING_TRUE':
      return {
        ...state,
        comicsLoading: true,
      }

    case 'COMICS_LOADING_FALSE':
      return {
        ...state,
        comicsLoading: false,
      }
    default:
      return state
  }
}

export default characters
