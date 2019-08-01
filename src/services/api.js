export function loadLists() {
    return [
      {
        title: 'To Do',
        creatable: true,
        cards: [
          {
            id: 1,
            content: ' NodeJS',
            labels: ['#7159c1'],
            user: 'https://barberimages2.s3.amazonaws.com/barber/sergio.png'
          },
          {
            id: 2,
            content: 'Youtube and Pipefy',
            labels: ['#7159c1'],
            user: 'https://barberimages2.s3.amazonaws.com/barber/sergio.png'
          },
          {
            id: 3,
            content: 'React Native',
            labels: ['#7159c1'],
            user: 'https://barberimages2.s3.amazonaws.com/barber/sergio.png'
          },
          {
            id: 4,
            content: 'NextJS: using server-side rendering with ReactJS"',
            labels: ['#54e1f7'],
            user: 'https://barberimages2.s3.amazonaws.com/barber/sergio.png'
          },
          {
            id: 5,
            content: 'Test e deploy ReactJS',
            labels: ['#54e1f7'],
            user: 'https://barberimages2.s3.amazonaws.com/barber/sergio.png'
          },
        ]
      },
      {
        title: 'In progress',
        creatable: false,
        cards: [
          {
            id: 6,
            content: 'clone Pipefy',
            labels: [],
            user: 'https://barberimages2.s3.amazonaws.com/barber/sergio.png'
          }
        ]
      },
      {
        title: 'On hold',
        creatable: false,
        cards: [
          {
            id: 7,
            content: 'Geolocalization and maps with React Native',
            labels: ['#7159c1'],
            user: 'https://barberimages2.s3.amazonaws.com/barber/sergio.png'
          },
          {
            id: 8,
            content: 'Deploy ReactJS',
            labels: ['#54e1f7'],
            user: 'https://barberimages2.s3.amazonaws.com/barber/sergio.png'
          },
          {
            id: 9,
            content: 'React Native ',
            labels: [],
          }
        ]
      },
      {
        title: 'Job Complete',
        creatable: false,
        done: true,
        cards: [
          {
            id: 10,
            content: 'Deploy and CI with React Native',
            labels: [],
          },
          {
            id: 12,
            content: 'Tests ReactJS',
            labels: ['#54e1f7'],
          },
          {
            id: 13,
            content: 'Node.js, ReactJS and  React Native"',
            labels: ['#7159c1'],
          }
        ]
      },
    ];
  }
