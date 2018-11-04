const { expect } = require('chai')
const lib = require('../src/libName')

describe('tests for getFirstName', () => {

  it('should return Ashok for Ashok Kumar', () => {

    let firstName = lib.getFirstName('Ashok Kumar')
    expect(firstName).to.equal('Ashok')
  })

  it('should return null for empty string', () => {
    let firstName = lib.getFirstName('')
    expect(firstName).to.equal(null)
  })

})


describe('tests for getLastName', () => {

  it('should return Kumar for Ashok Kumar', () => {
    let lastName = lib.getLastName('Ashok Kumar')
    expect(lastName).to.equal('Kumar')
  })

  it('should return null for  Ashok', () => {
    let lastName = lib.getLastName('Kumar')
    expect(lastName).to.equal(null)
  })
})
