import informationData from '@/assets/json/information.json';
var years = Object.keys(informationData)

export const state = () => ({
  modalMenuShow: false,
  indexMenuShow: false,
  informationData: informationData,
  year: Math.max.apply(null,years).toString()
});

export const mutations = {
  openModalMenu(state) {
    state.modalMenuShow = true;
  },
  closeModalMenu(state) {
    state.modalMenuShow = false
  },
  showIndexMenu(state) {
    state.indexMenuShow = true
  },
  changeYear(state, year) {
    state.year = year
  }
}

export const getters = {
  getAll: (state) => {
    return state.informationData
  }
}