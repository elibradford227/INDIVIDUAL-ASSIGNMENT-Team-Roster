/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useAuth } from '../utils/context/authContext';
import { getTeams } from '../api/teamData';
import MemberCard from '../components/MemberCard';

export default function Members() {
  const { user } = useAuth();
  const [teams, setTeams] = useState({});
  const [members, setMembers] = useState([]);

  const getAllTeams = (key) => {
    getTeams(key).then(setTeams);
  };

  const getAllTeamMembers = (teamsArg) => {
    const array = [];
    console.warn(teams);
    for (let i = 0; i < teamsArg.length; i++) {
      const teamsObjVals = (Object.values(teamsArg[i]));
      const allMembers = teamsObjVals.filter((_x, entry) => entry + 4 < teamsObjVals.length);
      for (let j = 0; j < allMembers.length; j++) {
        array.push(allMembers[j]);
      }
    }
    setMembers(array);
  };

  useEffect(() => {
    getAllTeams(user.uid);
  }, [user.uid]);

  useEffect(() => {
    getAllTeamMembers(teams);
  }, [teams]);

  console.warn(members);

  return (
    <div>
      <div
        className="row row-cols-8 row-cols-lg-3 g-2 text-center d-flex  justify-content-center align-content-center"
        style={{
          padding: '30px',
          margin: '0 auto',
        }}
      >
        {members.map((member) => (
          <MemberCard key={member.firebaseKey + members.length} memberObj={member} onUpdate={getAllTeamMembers} />
        ))}
      </div>
    </div>
  );
}
