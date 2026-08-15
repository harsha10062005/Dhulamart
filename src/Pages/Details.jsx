import { useState, useEffect } from "react";
import axios from "axios";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import "../css/Details.css";

const fallbackUsers = [
  { id: 1, name: "Harsh Sharma", age: 24, gender: "Male", email: "harsh@example.com", phone: "+91 9876543210", city: "Delhi", state: "Delhi", country: "India" },
  { id: 2, name: "Aarav Patel", age: 28, gender: "Male", email: "aarav@example.com", phone: "+91 9876501234", city: "Mumbai", state: "Maharashtra", country: "India" },
  { id: 3, name: "Priya Singh", age: 22, gender: "Female", email: "priya@example.com", phone: "+91 9123456789", city: "Bengaluru", state: "Karnataka", country: "India" },
  { id: 4, name: "Ananya Roy", age: 26, gender: "Female", email: "ananya@example.com", phone: "+91 9234567890", city: "Kolkata", state: "West Bengal", country: "India" },
  { id: 5, name: "Rohan Verma", age: 30, gender: "Male", email: "rohan@example.com", phone: "+91 9345678901", city: "Jaipur", state: "Rajasthan", country: "India" },
];

export const Details = () => {
  const [users, setUsers] = useState(fallbackUsers);
  const [selectedUser, setSelectedUser] = useState(fallbackUsers[0]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await axios.get("https://dummyjson.com/users?limit=10");
        if (res.data && res.data.users) {
          const mapped = res.data.users.map((u) => ({
            id: u.id,
            name: `${u.firstName} ${u.lastName}`,
            age: u.age,
            gender: u.gender,
            email: u.email,
            phone: u.phone,
            city: u.address?.city || "N/A",
            state: u.address?.state || "N/A",
            country: "USA",
          }));
          setUsers(mapped);
          setSelectedUser(mapped[0]);
        }
      } catch (e) {
        console.log("Using fallback users", e);
      }
    }
    fetchUsers();
  }, []);

  return (
    <>
      <Header />

      <main className="users-page">
        <div className="user-container">

          <div className="user-list">
            <h2>Community Users</h2>
            <p className="user-subtitle">
              Select a member to view their profile
            </p>

            <table>
              <thead>
                <tr>
                  <th>Member Name</th>
                </tr>
              </thead>

              <tbody>
                {users.map((user) => (
                  <tr
                    key={user.id}
                    className={selectedUser?.id === user.id ? "active-user-row" : ""}
                    onClick={() => setSelectedUser(user)}
                    style={{ cursor: "pointer" }}
                  >
                    <td>{user.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Right Side */}
          <div className="user-details">
            <h2>User Details</h2>

            {selectedUser ? (
              <table>
                <tbody>
                  <tr>
                    <th>ID</th>
                    <td>#{selectedUser.id}</td>
                  </tr>

                  <tr>
                    <th>Name</th>
                    <td><strong>{selectedUser.name}</strong></td>
                  </tr>

                  <tr>
                    <th>Age</th>
                    <td>{selectedUser.age} years</td>
                  </tr>

                  <tr>
                    <th>Gender</th>
                    <td>{selectedUser.gender}</td>
                  </tr>

                  <tr>
                    <th>Email</th>
                    <td>{selectedUser.email}</td>
                  </tr>

                  <tr>
                    <th>Phone</th>
                    <td>{selectedUser.phone}</td>
                  </tr>

                  <tr>
                    <th>City</th>
                    <td>{selectedUser.city}</td>
                  </tr>

                  <tr>
                    <th>State</th>
                    <td>{selectedUser.state}</td>
                  </tr>

                  <tr>
                    <th>Country</th>
                    <td>{selectedUser.country}</td>
                  </tr>
                </tbody>
              </table>
            ) : (
              <div className="no-user">
                <h3>No User Selected</h3>
                <p>Click a user name from the left list.</p>
              </div>
            )}
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
};

export default Details;