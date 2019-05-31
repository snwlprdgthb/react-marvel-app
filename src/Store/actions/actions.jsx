import axios from 'axios'
import md5 from 'md5'

const private_key = '6054658c9d9b8729072363b1cd0cc3162da06c2f'
const public_key = 'd30e0409e30c26560d42ff1415a0c925'

const time = +new Date()
const baseUrl = 'https://gateway.marvel.com:443/v1/public/characters'
const hash = md5(`${time}${private_key}${public_key}`)

const fetchData = (value = '') => {
  return `${baseUrl}?ts=${time}&apikey=${public_key}&hash=${hash}${value}`
}

export const getData = (value = '') => {
  let search = ''
  if (value) {
    search = `&nameStartsWith=${value}`
  }
  return dispatch => {
    dispatch({ type: 'FETCH_LOADING_TRUE' })

    return axios
      .get(fetchData(search))
      .then(res => {
        dispatch({ type: 'FETCH_DATA', payload: res.data.data.results })
        dispatch({ type: 'FETCH_LOADING_FALSE' })
      })
      .catch(err => console.log(err))
  }
}

export function getComics(id) {
  const url = `${baseUrl}/${id}/comics`
  return dispatch => {
    dispatch({ type: 'COMICS_LOADING_TRUE' })
    axios
      .get(`${url}?ts=${time}&apikey=${public_key}&hash=${hash}`)
      .then(res => {
        dispatch({ type: 'GET_COMICS', payload: res.data.data.results })
        dispatch({ type: 'COMICS_LOADING_FALSE' })
      })
  }
}

export function getEvents(id) {
  const url = `${baseUrl}/${id}/events`
  return dispatch => {
    dispatch({ type: 'COMICS_LOADING_TRUE' })
    axios
      .get(`${url}?ts=${time}&apikey=${public_key}&hash=${hash}`)
      .then(res => {
        dispatch({ type: 'GET_COMICS', payload: res.data.data.results })
        dispatch({ type: 'COMICS_LOADING_FALSE' })
      })
  }
}

export function getStories(id) {
  const url = `${baseUrl}/${id}/stories`
  return dispatch => {
    dispatch({ type: 'COMICS_LOADING_TRUE' })
    axios
      .get(`${url}?ts=${time}&apikey=${public_key}&hash=${hash}`)
      .then(res => {
        dispatch({ type: 'GET_COMICS', payload: res.data.data.results })
        dispatch({ type: 'COMICS_LOADING_FALSE' })
      })
  }
}

export function getSeries(id) {
  const url = `${baseUrl}/${id}/series`
  return dispatch => {
    dispatch({ type: 'COMICS_LOADING_TRUE' })
    axios
      .get(`${url}?ts=${time}&apikey=${public_key}&hash=${hash}`)
      .then(res => {
        dispatch({ type: 'GET_COMICS', payload: res.data.data.results })
        dispatch({ type: 'COMICS_LOADING_FALSE' })
      })
  }
}
