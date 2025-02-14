import { gql } from 'apollo-server-micro'

export default gql`
  extend type Query {
    moreItems(sort: String!, cursor: String, userId: ID): Items
    moreFlatComments(cursor: String, userId: ID): Comments
    notifications: [Item!]!
    item(id: ID!): Item
    userComments(userId: ID!): [Item!]
  }

  extend type Mutation {
    createLink(title: String!, url: String): Item!
    updateLink(id: ID!, title: String!, url: String): Item!
    createDiscussion(title: String!, text: String): Item!
    updateDiscussion(id: ID!, title: String!, text: String): Item!
    createComment(text: String!, parentId: ID!): Item!
    updateComment(id: ID!, text: String!): Item!
    vote(id: ID!, sats: Int): Int!
  }

  type Items {
    cursor: String
    items: [Item!]!
  }

  type Comments {
    cursor: String
    comments: [Item!]!
  }

  type Item {
    id: ID!
    createdAt: String!
    title: String
    url: String
    text: String
    parentId: Int
    parent: Item
    root: Item
    user: User!
    depth: Int!
    sats: Int!
    boost: Int!
    meSats: Int!
    ncomments: Int!
    comments: [Item!]!
  }
`
