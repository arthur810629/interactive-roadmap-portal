export const professionsByCategory = {
  programming: {
    title: 'Программирование',
    description: 'Выберите одну из профессий в сфере программирования.',
    professions: [
      {
        id: 'frontend',
        title: 'Frontend-разработчик',
        description: 'Создаёт пользовательские интерфейсы.',
        icon: '/icons/professions/frontend.svg',
        keywords: ['frontend', 'html', 'css', 'react'],
        color: '#4f46e5',
      },
      {
        id: 'backend',
        title: 'Backend-разработчик',
        description: 'Разрабатывает серверную часть и API.',
        icon: '/icons/professions/backend.svg',
        keywords: ['backend', 'nodejs', 'api'],
        color: '#0f766e',
      },
      {
        id: 'fullstack',
        title: 'Fullstack-разработчик',
        description: 'Объединяет frontend и backend.',
        icon: '/icons/professions/fullstack.svg',
        keywords: ['fullstack', 'web', 'react', 'nodejs'],
        color: '#16a34a',
      }
    ]
  },

  data: {
    title: 'Аналитика и данные',
    description: 'Работа с данными и их анализом.',
    professions: [
      {
        id: 'data-analyst',
        title: 'Data Analyst',
        description: 'Анализирует и визуализирует данные.',
        icon: '/icons/professions/data-analyst.svg',
        keywords: ['аналитика', 'sql', 'excel'],
        color: '#0ea5e9',
      },
      {
        id: 'bi',
        title: 'BI-аналитик',
        description: 'Создаёт отчёты и помогает бизнесу принимать решения.',
        icon: '/icons/professions/bi-analyst.svg',
        keywords: ['bi', 'tableau', 'powerbi'],
        color: '#8b5cf6',
      }
    ]
  }
}
