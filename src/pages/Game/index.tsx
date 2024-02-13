import Dice from 'src/components/Dice'
import * as Styled from 'src/pages/Game/styles'
import Card from 'src/components/Card'
import Field from 'src/components/Field'
import MoveList from 'src/components/MoveList'
import Chip from 'src/components/Chip'
import { useGame } from 'src/pages/Game/useGame'

const Game = () => {
  const {
    viewedList,
    toggleViewList,
    handleViewCard,
    isOpenCard,
    card,
    closeCard,
    newCard
  } = useGame()

  return (
    <Styled.AppContainer>
      <Field />
      <Styled.RightField>
        <Chip />
        {viewedList ? (
          <MoveList />
        ) : isOpenCard ? (
          <Card card={card} newCard={newCard}  />
        ) : (
          <Dice handleViewCard={handleViewCard} />
        )}
        <Styled.ContainerButtons>
          <Styled.ButtonCloseCard
            isShow={isOpenCard && !viewedList}
            onClick={closeCard}
          >
            Закрити
          </Styled.ButtonCloseCard>
          <Styled.Button viewedList={viewedList} onClick={toggleViewList}>
            Шлях
          </Styled.Button>
        </Styled.ContainerButtons>
      </Styled.RightField>
    </Styled.AppContainer>
  )
}

export default Game
