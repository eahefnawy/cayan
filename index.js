const axios = require('axios')
const { find, propEq, reduce, keys } = require('ramda')

const getProjects = (jsonUrl) => axios.get(jsonUrl).then(res => res.data)

const getProject = (id, projects) => {
  return find(propEq('id', String(id)))(projects)
}

const getTypes = (project) => {
  return reduce((accum, type) => {
    if (accum === '') return type
    return `${accum}, ${type}`
  }, '', keys(project.types || {}))
}

const addCurrencies = async (projects) => {

}

const submitForm = async (data) => {

}

const Cayan = {
  getProjects,
  getProject,
  getTypes
}

if (typeof window !== 'undefined') {
  window.Cayan = Cayan
} else {
  module.exports = Cayan
}
