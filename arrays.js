var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles',
]

function addElementToBeginningOfArray (array, element){
  var newArray = [element, ...array]
  return newArray
}

function destructivelyAddElementToBeginningOfArray (array, element){
  array.unshift(element)
  return array
}

function addElementToEndOfArray (array, lastItem){
  var newArray = [...array, lastItem]
  return newArray
}

function destructivelyAddElementToEndOfArray (array, lastItem){
  array.push(lastItem)
  return array
}

function accessElementInArray (array,index){
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray (array){
  array.shift()
  return array
}

function removeElementFromBeginningOfArray (array){
  var newArray = array.slice(1)
  return newArray
}

function destructivelyRemoveElementFromEndOfArray (array){
  array.pop()
  return array
}

function removeElementFromEndOfArray (array){
  var newArray = array.slice(0, array.length - 1)
  return newArray
}
