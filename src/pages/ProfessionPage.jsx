import React, { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { professionDetails } from '../data/professionDetails'
import { roadmaps } from '../data/roadmaps'
import {
  ReactFlow,
  Background,
  Controls,
  useNodesState,
  useEdgesState
} from 'reactflow'
import 'reactflow/dist/style.css'
import './ProfessionPage.css'

export default function ProfessionPage() {
  const { id } = useParams()
  const profession = professionDetails[id]
  const roadmap = roadmaps[id] || { nodes: [], edges: [] }

  const [nodes, setNodes, onNodesChange] = useNodesState(roadmap.nodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(roadmap.edges)

  // Мемоизация nodeTypes (даже если пусто) — устраняет предупреждение
  const nodeTypes = useMemo(() => ({}), [])

  if (!profession) {
    return (
      <div className="profession-page">
        <h2>Профессия не найдена</h2>
        <p>Проверьте правильность ссылки или выберите другую профессию.</p>
      </div>
    )
  }

  return (
    <div className="profession-page">
      <h2>{profession.title}</h2>
      <p className="profession-description">{profession.description}</p>

      <div className="roadmap-graph">
        {nodes.length > 0 ? (
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            nodeTypes={nodeTypes}
            fitView
          >
            <Background />
            <Controls />
          </ReactFlow>
        ) : (
          <div className="roadmap-placeholder">
            Дорожная карта для этой профессии пока не добавлена.
          </div>
        )}
      </div>
    </div>
  )
}
