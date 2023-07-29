/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useAuth } from '../utils/context/authContext';
import TeamCard from '../components/TeamCard';
import { getTeams } from '../api/teamData';

function Home() {
  const { user } = useAuth();

  const [teams, setTeams] = useState([]);

  const getAllTeams = () => {
    getTeams(user.uid).then(setTeams);
  };

  useEffect(() => {
    getAllTeams();
  }, []);

  return (
    <div>
      <div
        className="text-center d-flex  justify-content-center align-content-center"
        style={{
          padding: '30px',
          margin: '0 auto',
        }}
      >
        {teams.map((team) => (
          <TeamCard key={team.firebaseKey} teamObj={team} onUpdate={getAllTeams} />
        ))};
      </div>
    </div>
  );
}

export default Home;
