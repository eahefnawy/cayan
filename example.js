const { getProjects } = require('./index');

(async () => {
  const jsonUrl = 'https://gist.githubusercontent.com/eahefnawy/47630049a24f2086a101829263d5384c/raw/2bf8c9948cc96604f47e4d6fac73fe80de8aee3f/projects.json'
  const projects = await getProjects(jsonUrl)
  console.log(projects[0].types['1+1'])
})()
