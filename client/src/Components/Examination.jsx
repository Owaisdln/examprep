import { useState } from "react";
import loginBg from "../image/logigBg.jpg";

const ExaminationForm = () => {
  return (
    <div
      style={{
        ...styles.container,
        backgroundImage: `url(${loginBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <form
        style={{
          ...styles.form,
          backgroundImage: `linear-gradient(rgba(255,255,255,0.7), rgba(255, 255, 255, 0.17)), url(${loginBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 style={styles.heading}>Examination Form</h2>

        <input
          type="text"
          name="name"
          placeholder="Examination Name"
          style={styles.inputFull}
          required
        />

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          style={styles.inputFull}
          required
        />

        <div style={styles.row}>
          <input
            type="text"
            name="duration"
            placeholder="Duration (e.g., 1hr 30min)"
            style={styles.inputHalf}
            required
          />
          <input type="date" name="date" style={styles.inputHalf} required />
        </div>

        <input
          type="time"
          name="startTime"
          placeholder="Starting Time"
          required
        />

        <div style={styles.row}>
          <input
            type="number"
            name="passingMarks"
            placeholder="Passing Marks"
            style={styles.inputHalf}
            // value={formData.passingMarks}
            // onChange={handleChange}
            required
          />
          <input
            type="number"
            name="totalMarks"
            placeholder="Total Marks"
            style={styles.inputHalf}
            // value={formData.totalMarks}
            // onChange={handleChange}
            required
          />
        </div>

        <select
          name="status"
          style={styles.inputFull}
          //   value={formData.status}
          //   onChange={handleChange}
        >
          <option value="Schedule">Schedule</option>
          <option value="Draft">Draft</option>
          <option value="Published">Published</option>
        </select>

        <textarea
          name="questions"
          placeholder="Questions (subject wise)"
          rows={3}
          style={{ ...styles.inputFull, resize: "none" }}
          //   value={formData.questions}
          //   onChange={handleChange}
        />

        <button type="submit" style={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    background: "linear-gradient(to right, #7928ca, #ff0080)",
    minHeight: "100vh",
    padding: "40px",
    fontFamily: "Arial, sans-serif",
  },
  form: {
    background: "#fff",
    padding: "30px",
    borderRadius: "12px",
    maxWidth: "600px",
    margin: "0 auto",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333",
  },
  inputFull: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },
  inputHalf: {
    width: "48%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    gap: "4%",
  },
  button: {
    width: "100%",
    padding: "10px",
    background: "linear-gradient(to right, #007cf0, #7928ca)",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontWeight: "bold",
    fontSize: "14px",
    cursor: "pointer",
  },
};

export default ExaminationForm;
