import { normalize, schema } from 'normalizr';

const cardSchema = new schema.Entity('cards', {}, { idAttribute: '_id' });

export const deckSchema = new schema.Entity(
  'decks',
  {
    cards: [cardSchema],
  },
  { idAttribute: '_id' }, 
);

const userSchema = new schema.Entity('users', {
  decks: [deckSchema],
});

// What Normalized State Will Look Like
const test = {
  entities: {
    decks: {
      '123': { _id: '123', name: 'test deck', cards: ['321', '432', '543'] },
      '345': { _id: '345', name: 'test deck 2', cards: ['634', '468', '453'] },
    },
    cards: {
      '321': { _id: '321', front: 'test', back: 'back' },
      '432': { _id: '432', front: 'test2', back: 'back2' },
      '543': { _id: '543', front: 'test3', back: 'back3' },
      '634': { _id: '634', front: 'test4', back: 'back4' },
      '468': { _id: '468', front: 'test5', back: 'back5' },
      '453': { _id: '453', front: 'test6', back: 'back6' },
    },
  },
};
