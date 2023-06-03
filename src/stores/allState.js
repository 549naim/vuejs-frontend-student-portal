import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStateStore = defineStore('allState', () => {
  const userData = ref("")
 

  return { userData}
})
