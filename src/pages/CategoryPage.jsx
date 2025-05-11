import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { professionsByCategory } from '../data/professions';
import ReactFlow, { Background, Controls } from 'reactflow';
import 'reactflow/dist/style.css';

const ProfessionPage = () => {
  const { professionId } = useParams();

  const allProfessions = Object.values(professionsByCategory).flat();
  const profession = allProfessions.find((p) => p.id === professionId);

  const [nodes] = useState(profession?.nodes || []);
  const [edges] = useState(profession?.edges || []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!profession) return <div>Профессия не найдена</div>;

  return (
    <div className="container">
      <h1>{profession.title}</h1>
      <p>{profession.description}</p>
      <div style={{ height: '500px', border: '1px solid #ccc', borderRadius: '8px' }}>
        <ReactFlow nodes={nodes} edges={edges} fitView>
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    </div>
  );
};

export default ProfessionPage;
