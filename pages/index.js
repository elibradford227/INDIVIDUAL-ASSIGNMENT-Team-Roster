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

  return (
    <div
      className="text-center d-flex  justify-content-center align-content-center"
      style={{
        padding: '30px',
        margin: '0 auto',
      }}
    >
      {links.map((link) => (
        <LinkCard key={link.firebaseKey} linkObj={link} onUpdate={getAllLinks} />
      ))}
    </div>
  );
}

export default Home;
