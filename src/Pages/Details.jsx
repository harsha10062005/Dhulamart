import { useState } from "react";
import Header from "../components/Header";
import { Footer } from "../components/footer";
import { Details as users } from "../utilities/Details";
import '../css/Details.css'

export const Details = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <>
      <Header />

      <main className="users-page">
        <div className="user-container">

          {/* Left Side */}
          <div className="user-list">
            <h2>Users</h2>
            <p className="user-subtitle">
              Select a user to view their details
            </p>

            <table>
              <thead>
                <tr>
                  <th>Name</th>
                </tr>
              </thead>

              <tbody>
                {users.map((user) => (
                  <tr
                    key={user.id}
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
                    <td>{selectedUser.id}</td>
                  </tr>

                  <tr>
                    <th>Name</th>
                    <td>{selectedUser.name}</td>
                  </tr>

                  <tr>
                    <th>Age</th>
                    <td>{selectedUser.age}</td>
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
                <p>Click a user name from the left side.</p>
              </div>
            )}
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
};