/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import HeroCard from '../components/heroCard';
import { getSingleLink } from '../api/heroData';

export default function ViewHero() {
  const [linkDetails, setLinkDetails] = useState({});
  const router = useRouter();

  // TODO: grab firebaseKey from url
  const { firebaseKey } = router.query;

  const getAllTheLinks = () => {
    getSingleLink(firebaseKey).then(setLinkDetails);
  };
  // TODO: make call to API layer to get the data
  useEffect(() => {
    getAllTheLinks();
    console.warn(linkDetails);
  }, [firebaseKey]);

  return (
    <div>
      <div className="mt-5 d-flex flex-wrap">
        <div className="d-flex flex-column">
          <img src={linkDetails.image} alt={linkDetails.name} style={{ width: '300px' }} />
        </div>
        <div className="text-white ms-5 details">
          <h5>
            {linkDetails.name}
          </h5>
          <p>{linkDetails.role || ''}</p>
          <hr />
          {linkDetails.books?.map((link) => (
            <HeroCard key={link.firebaseKey} linkObj={link} onUpdate={getAllTheLinks} />
          ))}
        </div>
      </div>
    </div>
  );
}
