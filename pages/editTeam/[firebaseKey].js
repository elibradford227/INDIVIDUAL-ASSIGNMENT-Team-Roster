import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleTeamObject } from '../../api/teamData';
import TeamForm from '../../components/forms/TeamForm';

export default function EditTeam() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();
  // TODO: grab the firebasekey
  const { firebaseKey } = router.query;

  // TODO: make a call to the API to get the book data
  useEffect(() => {
    getSingleTeamObject(firebaseKey).then(setEditItem);
  }, [firebaseKey]);

  // TODO: pass object to form
  return (<TeamForm obj={editItem} />);
}
