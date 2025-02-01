import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage(props) {
  const { isLoggedIn, setIsLoggedIn } = props;
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          'url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-01%20at%2014.53.33_46b9da0c.jpg-UHFAyQ6rCykp6YjlNL2htIE7lzlFcV.jpeg")',
      }}
    >
      <div className="w-full max-w-md p-8 m-4 rounded-2xl backdrop-blur-sm bg-white/10 border border-white/20 shadow-xl">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-2">Welcome Back</h1>
          <p className="text-cyan-200">Please sign in to continue</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-cyan-200
                       focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent
                       transition-all duration-300 hover:bg-white/20"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-cyan-200
                       focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent
                       transition-all duration-300 hover:bg-white/20"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              required
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center text-cyan-200 hover:text-white transition-colors duration-300">
              <input
                type="checkbox"
                className="mr-2 rounded bg-white/10 border-white/20"
              />
              Remember me
            </label>
            <button className="text-cyan-200 hover:text-white transition-colors duration-300">
              Forgot Password?
            </button>
          </div>

          <button
            onClick={() => {
              setIsLoggedIn(true);
              navigate("/dashboard");
            }}
            type="submit"
            className="w-full py-3 px-4 bg-cyan-500 hover:bg-cyan-400 text-white rounded-lg
                     transform transition-all duration-300 hover:scale-105 hover:shadow-lg
                     focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-50"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6 text-center text-cyan-200">
          <span>Don&apos;t have an account? </span>
          <button
            href="/signup"
            className="text-white hover:text-cyan-400 transition-colors duration-300"
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}
