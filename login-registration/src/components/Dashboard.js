import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

function Dashboard() {
  const [users, setUsers] = useState([]);
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(users);

    const data = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [
        {
          label: 'Number of Users',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: 'rgba(75,192,192,0.2)',
          borderColor: 'rgba(75,192,192,1)',
          borderWidth: 1,
        },
      ],
    };
    setChartData(data);
  }, []);

  return (
    <div className="line-chart-container">
      <h1>Dashboard</h1>
      <p>Welcome to the dashboard!</p>
      <h2>Users</h2>
      <Line data={chartData} />
      {users.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.username}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No users found</p>
      )}
      <h2>Charts</h2>
      <Line data={chartData} />
    </div>
  );
}

export default Dashboard;
