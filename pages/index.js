/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useAuth } from '../utils/context/authContext';
import { getLinks } from '../api/heroData';
import LinkCard from '../components/heroCard';

function Home() {
  const { user } = useAuth();

  const [links, setLinks] = useState([]);

  const getAllLinks = () => {
    getLinks(user.uid).then(setLinks);
  };

  useEffect(() => {
    getAllLinks();
  }, []);

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    console.warn(searchResults);
    console.warn(links);
  };

  useEffect(() => {
    const results = links.filter((person) => person.name.toLowerCase().includes(searchTerm));
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      <div
        className="text-center d-flex  justify-content-center align-content-center"
        style={{
          padding: '30px',
          margin: '0 auto',
        }}
      >
        {searchResults.map((link) => (
          <LinkCard key={link.firebaseKey} linkObj={link} onUpdate={getAllLinks} />
        ))}
      </div>
    </div>
  );
}

export default Home;
