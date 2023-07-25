/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useAuth } from '../utils/context/authContext';
// import { getLinks } from '../api/heroData';
// import LinkCard from '../components/heroCard';
import TeamCard from '../components/TeamCard';
import { getTeams } from '../api/teamData';

function Home() {
  const { user } = useAuth();

  // const [links, setLinks] = useState([]);
  // const [searchTerm, setSearchTerm] = useState('');
  // const [searchResults, setSearchResults] = useState([]);
  const [teams, setTeams] = useState([]);

  const getAllTeams = () => {
    getTeams(user.uid).then(setTeams);
  };

  useEffect(() => {
    getAllTeams();
  }, []);

  // const getAllLinks = () => {
  //   getLinks(user.uid).then(setLinks);
  // };

  // useEffect(() => {
  //   getAllLinks();
  // }, []);

  // const handleChange = (event) => {
  //   setSearchTerm(event.target.value);
  // };

  // useEffect(() => {
  //   setSearchResults(links);
  //   const results = links.filter((person) => person.name.toLowerCase().includes(searchTerm));
  //   setSearchResults(results);
  // }, [searchTerm]);

  return (
    <div>
      {/* <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      /> */}
      <div
        className="text-center d-flex  justify-content-center align-content-center"
        style={{
          padding: '30px',
          margin: '0 auto',
        }}
      >
        {/* {searchResults.length === 0 ? links.map((link) => (
          <LinkCard key={link.firebaseKey} linkObj={link} onUpdate={getAllLinks} />
        )) : searchResults.map((link) => (
          <LinkCard key={link.firebaseKey} linkObj={link} onUpdate={getAllLinks} />
        ))} */}
        {teams.map((team) => (
          <TeamCard key={team.firebaseKey} teamObj={team} onUpdate={getAllTeams} />
        ))};
      </div>
    </div>
  );
}

export default Home;
