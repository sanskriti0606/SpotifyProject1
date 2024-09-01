import React, { useState } from 'react';
import { useRouter } from 'next/router';

const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setSuccessMessage(null);

    try {
      const response = await fetch('https://spotify-project1-6hgy.vercel.app/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Something went wrong');
      }

      const data = await response.json();
      console.log('Response:', data);

      // Store the token and user's name
      localStorage.setItem('token', data.token);
      localStorage.setItem('userName', data.userName);

      // Show success message
      setSuccessMessage('Login successfully');

      // Redirect to the dashboard or another protected route after a short delay
      setTimeout(() => {
        router.push('/');
      }, 2000); // Redirect after 2 seconds
    } catch (error: any) {
      setError(error.message || 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="logo-container">
        <img src="/logo1.png" alt="Spotify Logo" className="logo" /> {/* Update with actual path */}
      </div>
      <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
      {error && <p className="error-message">{error}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="form-input"
            required
          />
        </div>
        <button
          type="submit"
          className="submit-button"
          disabled={loading}
        >
          {loading ? 'Logging In...' : 'Login'}
        </button>
      </form>
      <button
        onClick={() => router.back()} // Use router.back() for navigation
        className="back-button"
      >
        Back
      </button>
    </div>
  );
};

export default Login;
