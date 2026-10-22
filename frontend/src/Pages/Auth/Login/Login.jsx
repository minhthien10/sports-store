import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const submitHandle = () => {
    navigate("/");
  };
  return (
    <div className="w-full min-h-[502px] flex items-center justify-center">
      <div className="max-w-[548px] w-full min-h-[382px] p-[31px] flex items-center justify-center flex-col bg-white rounded-xl shadow-lg">
        <h3 className="text-3xl text-[#1D3B29] font-semibold mb-6 text-center uppercase">
          Login
        </h3>
        <form action="#" onSubmit={submitHandle} className="space-y-4 w-full">
          <input
            type="email"
            placeholder="Your Email..."
            className="w-full h-[48px] px-4 bg-white border border-[#C5FF31] rounded-lg text-[#1D3B29] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C5FF31] transition"
          />
          <input
            type="password"
            placeholder="Your Password..."
            className="w-full h-[48px] px-4 bg-white border border-[#C5FF31] rounded-lg text-[#1D3B29] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C5FF31] transition"
          />
          <button
            type="submit"
            className="w-full h-[48px] bg-[#C5FF31] text-[#1D3B29] rounded-lg font-semibold hover:bg-[#A5E82F] transition-all duration-300"
          >
            Login
          </button>
        </form>
        <p className="text-sm text-center mt-4 text-gray-500">
          Already have an account?{" "}
          <Link
            to="/auth/register"
            className="text-[#C5FF31] hover:underline hover:text-[#A5E82F]"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
