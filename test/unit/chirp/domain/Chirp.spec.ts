import { Chirp } from "../../../../src/chirp/domain/Chirp"
import { ChirpId } from "../../../../src/chirp/domain/value-object/ChirpId"
import { ChirpMessage } from "../../../../src/chirp/domain/value-object/ChirpMessage"
import { User } from "../../../../src/user/domain/User"
import { UserEmail } from "../../../../src/user/domain/value-object/UserEmail"
import { UserId } from "../../../../src/user/domain/value-object/UserId"

describe('Chirp', () => {
  let chirp: Chirp
  beforeEach(() => {
    chirp = new Chirp(
      new ChirpId('c6e79858-a309-4ea6-9371-e6ccc4497fff'),
      new UserId('4ca63255-b896-44ec-baae-7f644a835211'),
      new ChirpMessage('This is my first chirp.'),
    )
  })
  it('should convert chirp to primitives', () => {
    const chirpData = {
      id: 'c6e79858-a309-4ea6-9371-e6ccc4497fff',
      author: '4ca63255-b896-44ec-baae-7f644a835211',
      message: 'This is my first chirp.',
    }
    expect(chirp.toPrimitives()).toStrictEqual(chirpData)
  })
})