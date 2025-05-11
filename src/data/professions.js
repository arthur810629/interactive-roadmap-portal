export const professionsByCategory = {
  programming: [
    {
      id: 'frontend-dev',
      title: 'Frontend-разработчик',
      description: 'Создаёт интерфейсы, которые видят и с которыми взаимодействуют пользователи.',
      nodes: [
        { id: 'html', data: { label: 'HTML' }, position: { x: 0, y: 0 } },
        { id: 'css', data: { label: 'CSS' }, position: { x: 200, y: 0 } },
        { id: 'js', data: { label: 'JavaScript' }, position: { x: 400, y: 0 } },
      ],
      edges: [
        { id: 'e1-2', source: 'html', target: 'css' },
        { id: 'e2-3', source: 'css', target: 'js' },
      ],
    },
  ],
  analytics: [
    {
      id: 'data-analyst',
      title: 'Аналитик данных',
      description: 'Собирает, обрабатывает и интерпретирует данные для принятия решений.',
      nodes: [
        { id: 'excel', data: { label: 'Excel' }, position: { x: 0, y: 0 } },
        { id: 'sql', data: { label: 'SQL' }, position: { x: 200, y: 0 } },
        { id: 'python', data: { label: 'Python' }, position: { x: 400, y: 0 } },
      ],
      edges: [
        { id: 'e1-2', source: 'excel', target: 'sql' },
        { id: 'e2-3', source: 'sql', target: 'python' },
      ],
    },
  ],
};
