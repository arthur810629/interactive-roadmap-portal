import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { categories } from '../data/categories';
import { professionsByCategory } from '../data/professions';

const CategoryPage = () => {
  const { categoryId } = useParams();
  const category = categories.find((cat) => cat.id === categoryId);
  const filteredProfessions = professionsByCategory[categoryId] || [];

  if (!category) return <div>Категория не найдена</div>;

  return (
    <div className="container">
      <h1>{category.title}</h1>
      <p>{category.description}</p>
      <ul>
        {filteredProfessions.map((profession) => (
          <li key={profession.id}>
            <Link to={`/professions/${profession.id}`}>{profession.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryPage;
