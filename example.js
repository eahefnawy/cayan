const { getProjects } = require('./index');

(async () => {
  const jsonUrl = 'https://gist.githubusercontent.com/eahefnawy/47630049a24f2086a101829263d5384c/raw/cea9846ef2572de155c43f9d8945562a1b8e7312/projects.json'
  const projects = await getProjects(jsonUrl)
  console.log(projects)
})()
