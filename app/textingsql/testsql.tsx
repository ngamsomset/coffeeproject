import { useEffect, useState } from 'react';
import { getAllUser } from '../lib/data'; // Import the User type from data.ts
import { User } from '../lib/definitions';

const UserListPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    // Fetch all users when the component mounts
    async function fetchUsers() {
      try {
        const fetchedUsers = await getAllUser();
        setUsers(fetchedUsers); // Make sure fetchedUsers is an array of User objects
      } catch (error) {
        console.error('Failed to fetch users:', error);
      }
    }

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserListPage;
