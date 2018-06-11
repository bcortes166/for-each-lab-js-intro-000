function iterativeLog(array) {

  array.forEach(
    function(element, index) {
      console.log(`${index}: ${element}`)
    }
  )
}

function iterate(callback) {
 var array
  callback(array)

  return array
}
