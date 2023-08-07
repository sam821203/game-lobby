// import request from '@/utils/request'
import axios from 'axios'

export const getHotGame = () => {
  return axios
    .get('./data/game.json')
    .then((res) => {
      return res.data
    })
    .catch(function (error) {
      console.log(error)
    })
}
