import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Authed from '../components/Authed';
import AuthedUserDashboard from '../components/AuthedUserDashboard';
import UnauthedUserDashboard from '../components/UnauthedUserDashboard';
import '../../src/css/userdashboard.css';

export default function UserDashboard() {
  const currentUserId = useSelector(state => state.auth.id);
  const paramId = useParams('id');


  return (
    <>
      <Authed />
      {(currentUserId == paramId.id) ? // Loosely equals to avoid type issues
        <AuthedUserDashboard />
        :
        <UnauthedUserDashboard />
      }
    </>
  )
}
