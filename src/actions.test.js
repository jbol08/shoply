import * as actions from './actions'
import * as types from './actiontype'

describe('actions', () => {
  it('should add to cart', () => {
    const id = 'add'
    const expectedAction = {
      type: types.ADD_TO_CART,
      id
    }
    expect(actions.addToCart(id)).toEqual(expectedAction)
  })
})
describe('actions', () => {
  it('should remove from cart', () => {
    const id = 'remove'
    const expectedAction = {
      type: types.REMOVE_FROM_CART,
      id
    }
    expect(actions.removeFromCart(id)).toEqual(expectedAction)
  })
})
