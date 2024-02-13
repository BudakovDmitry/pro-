import * as Styled from 'src/components/Card/styles'
import { CardType } from 'src/types'

type CardProps = {
  card: CardType,
  newCard: string
}

const Card = ({ card, newCard }: CardProps) => {
  const imagePath = require(`src/images/cards/${Number(newCard) + 2}.jpg`);

  return (
    <>
      {/*<Styled.CardBackground>*/}
      {/*  <Styled.Card>*/}
      {/*    <Styled.CardTitle>{card.title}</Styled.CardTitle>*/}
      {/*    <Styled.CardDescription>{card.description}</Styled.CardDescription>*/}
      {/*  </Styled.Card>*/}
      {/*</Styled.CardBackground>*/}
      <Styled.CardImage src={imagePath} alt={imagePath} />
    </>
  )
}

export default Card
