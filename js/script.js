const input = document.getElementById('link-input')
const linkForm = document.getElementById('link-form')
const errMsg = document.getElementById('err-msg')


linkForm.addEventListener('submit', formSubmit)

// validate a url
function validURL(str) {
  var pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
      '((\\d{1,3}\\.){3}\\d{1,3}))' +
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
      '(\\?[;&a-z\\d%_.~+=-]*)?' +
      '(\\#[-a-z\\d_]*)?$',
    'i'
  )
  return !!pattern.test(str)
}


function formSubmit(e){

  e.preventDefault()

  if (input.value === ''){
    errMsg.innerHTML = 'please enter something';
    input.classList.add('border-red' )
  } else if(!validURL(input.value)) {
    errMsg.innerHTML = 'please enter a balid Url';
    input.classList.add('border-red' )
  } else {
     errMsg.innerHTML = '';
    input.classList.remove('border-red' )
    alert('success')
  }
}