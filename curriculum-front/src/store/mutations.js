import Vue from 'vue'

export default {
  updateSelectedCurriculum (state, curriculum) {
    state.selectedCurriculum = curriculum
  },
  setCurriculaMeta (state, metaData) {
    state.curriculaMeta = metaData
  },
  setMailBox (state, mailboxObj) {
    state.mailbox = mailboxObj
    console.log("state", state.mailbox)
  },
  getMailBoxByName (state, name) {
    const cIndex = state.mailbox.findIndex((obj) => {
      return obj.name === name
    })
    console.log(cIndex)
  },
  setTimeline (state, timelineObj) {
    state.timeline = timelineObj
    console.log("state", state.timeline)
  },
  updateTimeline (state, timelineObj) {
    const cIndex = state.timeline.findIndex((obj) => {
      return obj._id === timelineObj.id
    })
    state.timeline.splice(cIndex, 1, timelineObj)
  },
  removeTimeline (state, timelineId) {
    const cIndex = state.timeline.findIndex((obj) => {
      return obj._id === timelineId
    });
    state.timeline.splice(cIndex, 1)
  },
  getTimelineById (state, timelineId) {
    const cIndex = state.timeline.findIndex((obj) => {
      return obj._id === timelineId
    })
    console.log(state.timeline[cIndex])
  },
  setCurricula (state, curricula) {
    console.log('set', curricula)
    state.curricula = curricula
  },
  updateCurricula (state, curricula) {
    console.log('update', curricula)
    state.curricula.push(...curricula)
  },
  appendCurriculum (state, curriculum) {
    state.curricula.push(curriculum)
  },
  appendTimeline (state, timelineObj) {
    state.curricula = { ...state.curricula, ...timelineObj}
  },
  updateCurriculum (state, payload) {
    // payload: { id, body }
    // find and update one curriculum
  },
  removeCurriculum (state, curriculumId) {
    const cIndex = state.curricula.findIndex((obj) => {
      return obj._id === curriculumId
    })
    state.curricula.splice(cIndex, 1)
  },
  updateSection (state, payload) {
    const { curriculumId, body } = payload
    const cIndex = state.curricula.findIndex((obj) => {
      return obj._id === curriculumId
    })
    const len = state.curricula[cIndex].sections.length
    console.log(len, cIndex)
    state.curricula[cIndex].sections.splice(len, 0, body)
  },
  removeSection (state, payload) {
    const { curriculumId, sectionId } = payload
    const cIndex = state.curricula.findIndex((obj) => {
      return obj._id === curriculumId
    })
    const sIndex = state.curricula[cIndex].sections.findIndex((obj) => {
      return obj._id === sectionId
    })
    state.curricula[cIndex].sections.splice(sIndex, 1)
  },
  upsertItem (state, payload) {
    const { curriculumId, sectionId, type, body } = payload
    const cIndex = state.curricula.findIndex((obj) => {
      return obj._id === curriculumId
    })
    const sIndex = state.curricula[cIndex].sections.findIndex((obj) => {
      return obj._id === sectionId
    })

    if (payload.itemId !== undefined) {
      const iIndex = state.curricula[cIndex].sections[sIndex][type].findIndex((obj) => {
        return obj._id === payload.itemId
      })

      const { name, url, isCompleted } = body

      let updatedItem = {}
      if (name) updatedItem.name = name
      if (url) updatedItem.url = url
      if (isCompleted) updatedItem.isCompleted = isCompleted

      let item = {
        ...state.curricula[cIndex].sections[sIndex][type][iIndex],
        ...updatedItem
      }
      state.curricula[cIndex].sections[sIndex][type].splice(iIndex, 1, item)
    } else {
      state.curricula[cIndex].sections[sIndex][type].push(body)
    }
  },
  removeItem (state, payload) {
    const { curriculumId, sectionId, type, body } = payload
    const cIndex = state.curricula.findIndex((obj) => {
      return obj._id === curriculumId
    })
    const sIndex = state.curricula[cIndex].sections.findIndex((obj) => {
      return obj._id === sectionId
    })
    const iIndex = state.curricula[cIndex].sections[sIndex][type].findIndex((obj) => {
      return obj._id === payload.itemId
    })
    state.curricula[cIndex].sections[sIndex][type].splice(iIndex, 1)
  },
  updateSnackbar (state, settings) {
    state.snackbar = {
      ...state.snackbar,
      ...settings
    }
  },
  updateLoadingStatus (state, isLoading) {
    state.loading = isLoading
  },
  updateCount (state, payload) {
    state.completeCounts = payload || []
  }
}
