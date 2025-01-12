import React from 'react';

const Login = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-blue-950 to-blue-900 flex items-center justify-center relative overflow-hidden">
      {/* Snow effect overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjZmZmIj48L3JlY3Q+Cjwvc3ZnPg==')] opacity-50"></div>
      
      {/* Main content container */}
      <div className="w-full max-w-md p-8 relative">
        {/* Glass morphism container */}
        <div className="backdrop-blur-lg bg-white/10 rounded-xl p-6 shadow-2xl">
          {/* Header */}
          <h1 className="text-3xl font-semibold text-center mb-8">
            <span className="text-white">Login</span>
            <span className="text-blue-400"> ChatApp</span>
          </h1>

          {/* Form */}
          <form className="space-y-6">
            {/* Username field */}
            <div className="space-y-2">
              <label className="text-gray-300 text-sm font-medium">Username</label>
              <input
                type="text"
                placeholder="Enter username"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent placeholder-gray-400 text-white backdrop-blur-sm"
              />
            </div>

            {/* Password field */}
            <div className="space-y-2">
              <label className="text-gray-300 text-sm font-medium">Password</label>
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent placeholder-gray-400 text-white backdrop-blur-sm"
              />
            </div>

            {/* Don't have an account link */}
            <div className="text-sm text-gray-300">
              <a href="#" className="hover:text-blue-400 transition-colors">
                Don't have an account?
              </a>
            </div>

            {/* Login button */}
            <button
              type="submit"
              className="w-full py-3 px-4 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors duration-200 shadow-lg shadow-blue-500/30"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;