export const roadmaps = {
  frontend: {
    nodes: [
      { id: '1', position: { x: 0, y: 100 }, data: { label: 'HTML' } },
      { id: '2', position: { x: 200, y: 100 }, data: { label: 'CSS' } },
      { id: '3', position: { x: 400, y: 100 }, data: { label: 'JavaScript' } },
      { id: '4', position: { x: 600, y: 100 }, data: { label: 'React' } },
      { id: '5', position: { x: 800, y: 100 }, data: { label: 'Проекты' } },
    ],
    edges: [
      { id: 'e1-2', source: '1', target: '2' },
      { id: 'e2-3', source: '2', target: '3' },
      { id: 'e3-4', source: '3', target: '4' },
      { id: 'e4-5', source: '4', target: '5' },
    ]
  },

  backend: {
    nodes: [
      { id: '1', position: { x: 0, y: 100 }, data: { label: 'Node.js' } },
      { id: '2', position: { x: 200, y: 100 }, data: { label: 'Express' } },
      { id: '3', position: { x: 400, y: 100 }, data: { label: 'MongoDB' } },
    ],
    edges: [
      { id: 'e1-2', source: '1', target: '2' },
      { id: 'e2-3', source: '2', target: '3' },
    ]
  }
}
