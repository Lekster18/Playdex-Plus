import React, { useState, useEffect } from "react";

function Sidebar() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:5001/auth/users");
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const usersData = await response.json();
        setUsers(usersData);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h2 className="text-[30px] text-violet-800 font-bold mb-4">
        Other Users
      </h2>
      <ul>
        {users.map((user, index) => (
          <li
            key={index}
            className="mb-2 cursor-pointer hover:bg-violet-200 p-2 rounded-full"
          >
            <a href="#" className="text-[20px]">
              {user.username}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
