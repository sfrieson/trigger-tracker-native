const API_URL = 'https://trigger-tracker-api.herokuapp.com/graphql'

export default {
  getHistory: () => fetch(API_URL, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: `
        {
          history {
            __typename
            ... on Record {
              food
              timestamp
            }
            ... on Report {
              symptom
              timestamp
            }
          }
        }
      `
    })
  }).then(res => res.json())
  .then(res => {
    if ('errors' in res) throw new Error(res.errors)
    return res.data.history
  })
  .catch(err => {
    console.log('err:', err)
    return null
  }),
  makeRecord: (data) => fetch(API_URL, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      operationName: 'makeRecord',
      query: `
        mutation makeRecord($data: RecordData!) {
          record(data: $data)
        }
      `,
      variables: {
        data
      }
    })
  }),
  makeReport: (data) => fetch(API_URL, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      operationName: 'makeReport',
      query: `
        mutation makeReport($data: ReportData!) {
          report(data: $data)
        }
      `,
      variables: {
        data
      }
    })
  })
}
