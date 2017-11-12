const API_URL = 'http://192.168.0.14:3000/graphql'

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
            ... on Record {
              food
            }
            ... on Report {
              symptom
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
