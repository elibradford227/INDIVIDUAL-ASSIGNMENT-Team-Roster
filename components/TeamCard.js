import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { deleteTeam } from '../api/teamData';

export default function TeamCard({ teamObj, onUpdate }) {
  const deleteThisTeam = () => {
    if (window.confirm('Delete This Team?')) {
      deleteTeam(teamObj.firebaseKey).then(() => onUpdate());
    }
    console.warn(teamObj.firebaseKey);
  };
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      {/* <Card.Img variant="top" src={linkObj.image} alt={linkObj.name} style={{ height: '400px' }} /> */}
      <Card.Body>
        <Card.Title>{teamObj.title}</Card.Title>
        <p>{teamObj.description}</p>
        {/* DYNAMIC LINK TO VIEW THE BOOK DETAILS  */}
        <Link href={`teams/${teamObj.firebaseKey}`} passHref>
          <Button variant="primary" className="m-2">view</Button>
        </Link>
        {/* DYNAMIC LINK TO EDIT THE BOOK DETAILS  */}
        <Link href={`/editTeam/${teamObj.firebaseKey}`} passHref>
          <Button variant="info">edit</Button>
        </Link>
        <Button variant="danger" className="m-2" onClick={deleteThisTeam}>
          delete
        </Button>
      </Card.Body>
    </Card>
  );
}

TeamCard.propTypes = {
  teamObj: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
