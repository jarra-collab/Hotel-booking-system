import { useState } from "react";

const Register = () => {
  const [form, setForm] = useState({});

  const handleRegister = async () => {
    await fetch("http://localhost:5001/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    alert("Registered successfully");
  };

  return (
    <div className="p-6">
      <input placeholder="Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <input placeholder="Password"
        type="password"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />

      <button onClick={handleRegister}>
        Register
      </button>
    </div>
  );
};

export default Register;