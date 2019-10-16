import { gql } from 'apollo-server-express'

const typeDefs = gql`

type Query {
}

type Character {
  id: ID!
  name: String!
  male: Boolean!
  avatar: String!
  birthYear: Int
  nickname: String
  title: String
  houses: [House!]
  father: Character
  mother: Character
  children: [Character!]
  siblings: [Character!]
  marriedOrEngagedWith: [Character!]
  killed: [Character!]
  killedBy: [Character!]
  events: [Event!]
}

type House {
  id: ID!
  name: String!
  words: String!
  banner: String!
  characters: [Character!]
  lng: Float!
  lat: Float!
}

type Event {
  id: ID!
  name: String!
  poster: String!
  year: Int
  characters: [Character!]
  deads: [Character!]
  killers: [Character!]
}

type Battle {
  id: ID!
  name: String!
  poster: String!
  date: Int
  place: String
  attackCommenders: [Character!]!
  attackFollowers: [Character!]!
  defendCommenders: [Character!]!
  defendFollowers: [Character!]!
}
`

export default typeDefs
