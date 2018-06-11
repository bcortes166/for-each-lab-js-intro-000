function iterativeLog(array) {

  array.forEach(
    function(element, index) {
      console.log(`${index}: ${element}`)
    }
  )
}

function iterate(callback) {
 
  callback(array)

  return array
}
