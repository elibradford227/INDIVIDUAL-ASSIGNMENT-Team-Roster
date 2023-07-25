/* eslint-disable react-hooks/exhaustive-deps */
import { React, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
// import { useAuth } from '../../utils/context/authContext';
import { getSingleTeam } from '../../api/teamData';
// import LinkCard from '../../components/heroCard';
import MemberCard from '../../components/MemberCard';

export default function ViewTeam() {
  // const { user } = useAuth();
  const router = useRouter();
  const { firebaseKey } = router.query;

  // const [links, setLinks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // const getAllLinks = () => {
  //   getLinks(user.uid).then(setLinks);
  // };

  const [members, setMembers] = useState([]);

  const getAllMembers = () => {
    // getSingleTeam(firebaseKey).then(setMembers);
    getSingleTeam(firebaseKey).then((result) => {
      // const team = result.splice(result.length - 8, 6);
      const team = result.filter((_x, i) => i + 4 < result.length);
      setMembers(team);
    });
    // team.splice(team.length - 2, 2);
    // setMembers(team);
  };

  useEffect(() => {
    getAllMembers();
  }, []);

  // console.warn(members);

  // useEffect(() => {
  //   getAllLinks();
  // }, []);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    setSearchResults(members);
    const results = members.filter((person) => person.name.toLowerCase().includes(searchTerm));
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
        {searchResults.length === 0 ? members.map((member) => (
          <MemberCard key={member.firebaseKey} memberObj={member} onUpdate={getAllMembers} firebaseKeyProp={firebaseKey} />
        )) : searchResults.map((member) => (
          <MemberCard key={member.firebaseKey} memberObj={member} onUpdate={getAllMembers} firebaseKeyProp={firebaseKey} />
        ))}
        {/* {members.map((member) => (
          <LinkCard key={member.firebaseKey} linkObj={member} onUpdate={getAllMembers} />
        ))} */}
      </div>
    </div>
  );
}
