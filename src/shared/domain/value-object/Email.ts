import { InvalidEmailError } from "../error/InvalidEmailError"
import { validate } from "email-validator"

export class Email {
  readonly value: string
  constructor(value: string) {
    this.ensureIsValidEmail(value)
    this.value = value
  }

  private ensureIsValidEmail(value: string) {
    if(!validate(value)) {
      throw new InvalidEmailError(value)
    }
  }
}