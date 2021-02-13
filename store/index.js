import informationData from 'js-yaml-loader!@/assets/json/information.yml';
import workData from 'js-yaml-loader!@/assets/json/work.yml';
var years = Object.keys(informationData)

export const state = () => ({
  modalMenuShow: false,
  indexShow: false,
  informationData: informationData,
  year: Math.max.apply(null, years).toString(),
  workData: workData
});

export const mutations = {
  openModalMenu(state) {
    state.modalMenuShow = true;
  },
  closeModalMenu(state) {
    state.modalMenuShow = false
  },
  showIndex(state) {
    state.indexShow = true
  },
  changeYear(state, year) {
    state.year = year
  }
}

export const getters = {
  getInformationAll: (state) => {
    return state.informationData
  },
  getWorkArtist: (state) => {
    return state.workData.artist
  },
  getWorkTour: (state) => {
    return state.workData.tour
  },
  getWorkRecording: (state) => {
    return state.workData.recording
  },
  getWorkDvd: (state) => {
    return state.workData.dvd
  },
  getWorkGame: (state) => {
    return state.workData.game
  },
  getWorkTv: (state) => {
    return state.workData.tv
  }
}