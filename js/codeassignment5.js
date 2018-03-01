let project1 = {
  id: 1,
  desc: 'Waveland Tour',
  hasThumbnail: true
}
let project2 = {
  id: 2
  desc: 'Mass Shootings',
  hasThumbnail: true
}
let projects = [
  project1
  project2
]
for (let i = 0; i < projects.length; i++) {
  console.log('desc ' + i + ' Waveland: ' + projects[i].desc)
  if (projects[i].hasThumbnail === true) {
  console.log('Screenshot' + projects[i].id + 'web_hi_res_512.png')
  }
  
