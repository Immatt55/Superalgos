/* eslint-disable no-unused-vars */
import gql from 'graphql-tag'

export const TEAMS_FRAGMENT = gql`
  fragment TeamsRespons on teamsConnection {
    edges {
      node {
        id
        name
        slug
        owner
        status {
          status
          reason
          createdAt
        }
        createdAt
        profile {
          avatar
          description
          motto
          updatedAt
        }
        members {
          role
          member {
            alias
            authId
          }
        }
      }
    }
  }
`

export default TEAMS_FRAGMENT
