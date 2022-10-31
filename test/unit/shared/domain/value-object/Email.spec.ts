import * as emailValidator from 'email-validator'
import { InvalidEmailError } from '../../../../../src/shared/domain/error/InvalidEmailError'
import { Email } from "../../../../../src/shared/domain/value-object/Email"

jest.mock('email-validator')

describe('Email value object', () => {
  let emailValidateSpy: jest.Mock

  beforeAll(() => {
    emailValidateSpy = emailValidator.validate as jest.Mock
  })

  it('should instantiate email value object', () => {
    const emailValue = 'antonio@hotmail.com'

    emailValidateSpy.mockReturnValue(true)

    expect(new Email(emailValue).value).toBe(emailValue)
    expect(emailValidateSpy).toBeCalledWith(emailValue)
  })

  it('should throw invalid email error on instantation', () => {
    const notAValidEmail = 'asdf'

    emailValidateSpy.mockReturnValue(false)

    expect(() => new Email(notAValidEmail)).toThrow(InvalidEmailError)
    expect(emailValidateSpy).toBeCalledWith(notAValidEmail)
  })
})