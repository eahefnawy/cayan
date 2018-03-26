const axios = require('axios')
const { find, propEq, reduce, keys, map, forEachObjIndexed } = require('ramda')
const fx = require('money')

const getProjects = async (jsonUrl) => {
  let projects = await axios.get(jsonUrl).then(res => res.data)
  fx.rates = await axios.get('https://openexchangerates.org/api/latest.json?app_id=ec60cf523d0f4912bc160406c1703489').then(res => res.data.rates)
  fx.base = 'USD'

  return map((project) => {
    forEachObjIndexed((value, type) => {
      project.types[type].minPrice.TRY = Math.ceil(fx.convert(project.types[type].minPrice.USD, {from: 'USD', to: 'TRY'}))
      project.types[type].maxPrice.TRY = Math.ceil(fx.convert(project.types[type].maxPrice.USD, {from: 'USD', to: 'TRY'}))
    }, project.types)
    return project
  }, projects)
}

const getProject = (id, projects) => {
  return find(propEq('id', String(id)))(projects)
}

const getTypes = (project) => {
  return reduce((accum, type) => {
    if (accum === '') return type
    return `${accum}, ${type}`
  }, '', keys(project.types || {}))
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
