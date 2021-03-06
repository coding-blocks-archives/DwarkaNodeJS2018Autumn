function getFirstName(fullName) {
  if (fullName.length < 1) {
    return null
  }
  return fullName.split(' ')[0]
}

function getLastName(fullName) {
  let splitName = fullName.split(' ')
  if (splitName.length < 2) {
    return null
  }
  return splitName.pop()
}

function getMiddleName(fullName) {
  let splitName = fullName.split(' ')
  if (splitName.length < 3) {
    return null
  }
  return splitName[1]
}

module.exports = {
  getFirstName,
  getLastName,
  getMiddleName
}

