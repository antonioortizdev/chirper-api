import * as emailValidator from 'email-validator'
import { Email } from "../../../../../src/shared/domain/value-object/Email"
import { InvalidEmailError } from '../../../../../src/shared/domain/error/InvalidEmailError'

jest.mock('email-validator')

describe('Email value object', () => {
  let emailValidateSpy: jest.Mock

  beforeAll(() => {
    emailValidateSpy = emailValidator.validate as jest.Mock
  })

  it('should instantiate email value object', () => {
    emailValidateSpy.mockReturnValue(true)

    const emailValue = 'antonio@hotmail.com'

    expect(new Email(emailValue).value).toBe(emailValue)
    expect(emailValidateSpy).toBeCalledWith(emailValue)
  })

  it('should throw invalid email error on instantation', () => {
    emailValidateSpy.mockReturnValue(false)

    const notAValidEmail = 'asdf'

    expect(() => new Email(notAValidEmail)).toThrow(InvalidEmailError)
    expect(emailValidateSpy).toBeCalledWith(notAValidEmail)
  })

  it('should return its value as a string', () => {
    emailValidateSpy.mockReturnValue(true)

    const emailValue = 'antonio@hotmail.com'
    const email = new Email(emailValue)

    expect(String(email)).toBe(emailValue)
  })
})