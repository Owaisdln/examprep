import React from 'react';
import axios from 'axios';

const UserProfile = () => {
  return (
    <div style={styles.mainContent}>
      <h1 style={styles.heading}>👤 My Profile</h1>

      <div style={styles.profileCard}>
        <div style={styles.profileRow}>
          <label style={styles.label}>Full Name</label>
          <div>John Doe</div>
        </div>
        <div style={styles.profileRow}>
          <label style={styles.label}>Email</label>
          <div>john.doe@example.com</div>
        </div>
        <div style={styles.profileRow}>
          <label style={styles.label}>Phone Number</label>
          <div>+1 234 567 890</div>
        </div>
        <div style={styles.profileRow}>
          <label style={styles.label}>Address</label>
          <div>123 Main Street, City, Country</div>
        </div>
        <div style={styles.profileRow}>
          <label style={styles.label}>Qualification</label>
          <div>B.Sc. Computer Science</div>
        </div>
        <div style={styles.profileRow}>
          <label style={styles.label}>Session</label>
          <div>2023-2024</div>
        </div>

        <button style={styles.editBtn}>✏️ Edit Profile</button>
      </div>
    </div>
  );
};

const styles = {
  mainContent: {
    maxWidth: '800px',
    margin: '40px auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f5f6fa',
    borderRadius: '12px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
  },
  heading: {
    fontSize: '28px',
    marginBottom: '30px',
    color: '#2c3e50',
    borderBottom: '2px solid #dcdde1',
    paddingBottom: '10px'
  },
  profileCard: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)'
  },
  profileRow: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '15px',
    paddingBottom: '10px',
    borderBottom: '1px solid #f1f2f6'
  },
  label: {
    fontWeight: 'bold',
    color: '#34495e'
  },
  editBtn: {
    marginTop: '25px',
    padding: '10px 20px',
    backgroundColor: '#0984e3',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '15px'
  }
};

export default UserProfile;
