 function changeColorToWarning() {
  const color = document.querySelector('#color')
  if(color.classList.contains('badge-success')){
    color.classList.remove('badge-success')
    color.classList.add('badge-warning')
  }
}
 function changeColorToDanger() {
  const color = document.querySelector('#color')
  if(color.classList.contains('badge-warning')){
    color.classList.remove('badge-warning')
    color.classList.add('badge-danger')
  }
}
