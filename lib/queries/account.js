import gql from 'graphql-tag'

export const GET_QUIZES = gql`
{
  quizes {
    id
    total_marks
    obtaining_marks
  }
}
`
export const INSERT_USERS = gql`
mutation users(
  $id: ID!,
  $firstName: String!,
  $lastName: String!
) {
  user_create(
    id: $id,
    firstName: $firstName,
    lastName: $lastName
  )
}
`
