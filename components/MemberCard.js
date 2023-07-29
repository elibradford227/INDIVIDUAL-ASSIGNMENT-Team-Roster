import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { deleteTeamMember } from '../api/teamData';

function MemberCard({ memberObj, onUpdate, firebaseKeyProp }) {
  // FOR DELETE, WE NEED TO REMOVE THE BOOK AND HAVE THE VIEW RERENDER,
  // SO WE PASS THE FUNCTION FROM THE PARENT THAT GETS THE BOOKS
  const deleteThisMember = () => {
    if (window.confirm('Delete This Member?')) {
      deleteTeamMember(firebaseKeyProp, memberObj.firebaseKey).then(() => onUpdate());
    }
    console.warn(firebaseKeyProp, memberObj.firebaseKey);
  };

  console.warn(memberObj);

  return (
    <Card style={{ width: '22rem', margin: '10px' }}>
      <Card.Img variant="top" src={memberObj.image} alt={memberObj.name} style={{ height: '400px' }} />
      <Card.Body>
        <Card.Title>{memberObj.name}</Card.Title>
        <p>{memberObj.role}</p>
        <p>Team: {memberObj.team}</p>
        <Button variant="danger" onClick={deleteThisMember} className="button-19">
          delete
        </Button>
      </Card.Body>
    </Card>
  );
}

MemberCard.propTypes = {
  firebaseKeyProp: PropTypes.string,
  memberObj: PropTypes.shape({
    image: PropTypes.string,
    team: PropTypes.string,
    name: PropTypes.string,
    role: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

MemberCard.defaultProps = {
  firebaseKeyProp: '999999999999999',
};

export default MemberCard;
