import { InvalidArgumentError } from "./InvalidArgumentError";

export class InvalidEmailError extends InvalidArgumentError {
  constructor(invalidEmail: string) {
    super(`<${invalidEmail}> is not a valid email.`)
  }
}