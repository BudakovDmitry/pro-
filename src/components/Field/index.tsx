import * as Styled from 'src/components/Field/styles'

const FieldImage = require('src/images/field_new.jpg')

const Field = () => {
  return (
    <Styled.FieldContainer>
      <Styled.FieldImage src={FieldImage} />
    </Styled.FieldContainer>
  )
}

export default Field
