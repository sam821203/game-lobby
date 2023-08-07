import { defineStore } from 'pinia'
import { getHotGame } from '@/api/game'

export const useHotGameStore = defineStore('hotGameStore', {
  state: () => ({
    hotGameData: []
  }),
  actions: {
    async getHotGame() {
      const { data } = await getHotGame()
      console.log(data)
      // this.hotGameData = data
    }
  }
})
