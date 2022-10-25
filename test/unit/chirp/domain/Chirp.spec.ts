import { Chirp } from "../../../../src/chirp/domain/Chirp"
import { ChirpId } from "../../../../src/chirp/domain/value-object/ChirpId"
import { ChirpMessage } from "../../../../src/chirp/domain/value-object/ChirpMessage"

describe('Chirp', () => {
  let chirp: Chirp
  beforeEach(() => {
    chirp = new Chirp(
      new ChirpId('c6e79858-a309-4ea6-9371-e6ccc4497fff'),
      new ChirpMessage('This is my first chirp.')
    )
  })
  it('should convert chirp to primitives', () => {
    const chirpData = {
      id: 'c6e79858-a309-4ea6-9371-e6ccc4497fff',
      message: 'This is my first chirp.'
    }
    expect(chirp.toPrimitives()).toStrictEqual(chirpData)
  })
})