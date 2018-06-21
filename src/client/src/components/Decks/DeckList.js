import React from 'react';
import Deck from './Deck';
import { Link } from 'react-router-dom';
import {
  DeckListContainer,
  Title,
  DeckContainer,
  Header,
  NewDeckButton,
  EmptyDeckMessage,
} from './styles/DeckList.styles';
import PropTypes from 'prop-types';

const DeckList = ({
  decks,
  handleOpenNewDeckModal,
  handleOpenConfirmationModal,
  handleDeleteDeck,
  handleUpdateDeck,
  handleChange,
  match,
  inputDeckName,
  isFetched,
  setDeckToDelete,
}) => (
  <DeckListContainer>
    <Header>
      <Title>Your Decks</Title>
      <Link to={`/${match.url}`} onClick={handleOpenNewDeckModal}>
        <NewDeckButton>+ Deck</NewDeckButton>
      </Link>
    </Header>

    <DeckContainer>
      {decks.length === 0 && isFetched ? (
        <EmptyDeckMessage>You Currently Have No Decks</EmptyDeckMessage>
      ) : (
        decks.map(({ _id, name, cards, slug }, i) => (
          <li key={_id}>
            <Link to={`${match.url}/${slug}`}>
              <Deck
                name={name}
                cardAmount={cards.length}
                handleDeleteDeck={handleDeleteDeck}
                handleUpdateDeck={handleUpdateDeck}
                handleOpenConfirmationModal={handleOpenConfirmationModal}
                handleChange={handleChange}
                deckId={_id}
                deckSlug={slug}
                match={match}
                inputDeckName={inputDeckName}
                setDeckToDelete={setDeckToDelete}
              />
            </Link>
          </li>
        ))
      )}
    </DeckContainer>
  </DeckListContainer>
);

DeckList.propTypes = {
  decks: PropTypes.array,
  handleOpenModal: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  handleDeleteDeck: PropTypes.func.isRequired,
  isCreatingDeck: PropTypes.bool,
};

export default DeckList;
