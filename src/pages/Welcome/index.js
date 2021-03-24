import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../redux/actions';
import Layout from '../../components/Layout';
import './Welcome.scss';

function Welcome() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle('Welcome'));
  }, []);

  return (
    <div className="Welcome">
      <Layout>
        Welcome works
      </Layout>
    </div>
  );
}

export default Welcome;
