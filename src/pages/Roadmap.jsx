import React, { useCallback, useState } from 'react'
import ReactFlow, {
  useNodesState,
  useEdgesState,
  Background,
  Controls,
} from 'reactflow'
import 'reactflow/dist/style.css'

const initialNodes = [
  { id: '1', position: { x: 0, y: 100 }, data: { label: 'HTML' } },
  { id: '2', position: { x: 200, y: 100 }, data: { label: 'CSS' } },
  { id: '3', position: { x: 400, y: 100 }, data: { label: 'JavaScript' } },
]

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e2-3', source: '2', target: '3' },
]

const nodeDescriptions = {
  '1': {
    title: 'HTML',
    description: 'Язык разметки, основа любой веб-страницы.',
    link: 'https://www.w3schools.com/html/',
  },
  '2': {
    title: 'CSS',
    description: 'Отвечает за внешний вид и стили.',
    link: 'https://www.w3schools.com/css/',
  },
  '3': {
    title: 'JavaScript',
    description: 'Язык программирования для интерактива и логики.',
    link: 'https://www.javascript.com/',
  },
}

export default function Roadmap() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)
  const [selectedNode, setSelectedNode] = useState(null)

  const onNodeClick = useCallback((_, node) => {
    setSelectedNode(nodeDescriptions[node.id])
  }, [])

  const handleClose = () => setSelectedNode(null)

  return (
    <div style={{ display: 'flex', height: '100vh', flexDirection: 'row' }}>
      <div style={{ flex: 1, minWidth: 0 }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onNodeClick={onNodeClick}
          fitView
        >
          <Background />
          <Controls />
        </ReactFlow>
      </div>

      {selectedNode && (
        <aside
          role="complementary"
          aria-label="Информация об узле"
          style={{
            width: '320px',
            padding: '24px',
            borderLeft: '1px solid #ccc',
            background: '#f9f9f9',
            overflowY: 'auto',
            position: 'relative',
          }}
        >
          <button
            onClick={handleClose}
            style={{
              position: 'absolute',
              top: '12px',
              right: '12px',
              background: 'none',
              border: 'none',
              fontSize: '24px',
              cursor: 'pointer',
              color: '#666',
            }}
            aria-label="Закрыть панель"
          >
            ×
          </button>

          <h2 style={{ marginTop: 0 }}>{selectedNode.title}</h2>
          <p>{selectedNode.description}</p>
          <a
            href={selectedNode.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              marginTop: '16px',
              padding: '10px 16px',
              backgroundColor: '#007bff',
              color: '#fff',
              borderRadius: '6px',
              textDecoration: 'none',
              fontWeight: 600,
            }}
          >
            Перейти к курсу →
          </a>
        </aside>
      )}
    </div>
  )
}
