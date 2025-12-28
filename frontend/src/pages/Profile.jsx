import { useEffect, useState } from 'react';
import API from '../services/api';

function Profile() {
  const [user, setUser] = useState({});

  useEffect(() => {
    API.get('/users/profile').then(res => setUser(res.data));
  }, []);

  return (
    <div>
      <h3>Profile</h3>
      <p><b>Name:</b> {user.name}</p>
      <p><b>Email:</b> {user.email}</p>
    </div>
  );
}

export default Profile;
