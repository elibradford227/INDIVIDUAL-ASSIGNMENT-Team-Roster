import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleLink } from '../../api/heroData';
import HeroForm from '../../components/forms/HeroForm';

export default function EditAuthor() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();
  // TODO: grab the firebasekey
  const { firebaseKey } = router.query;

  // TODO: make a call to the API to get the book data
  useEffect(() => {
    getSingleLink(firebaseKey).then(setEditItem);
  }, [firebaseKey]);

  // TODO: pass object to form
  return (<HeroForm obj={editItem} />);
}
