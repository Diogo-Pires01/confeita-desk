const Login = () => {
  const handleGoogleLogin = () => {
    window.location.href = 'http://localhost:3000/auth/google';
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-background"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%232ec4b6' fill-opacity='0.21' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
      }}
    >
      <div className="bg-surface px-10 py-12 rounded-xl shadow-lg text-center flex flex-col items-center gap-2 max-w-sm w-full">
        <div className="mb-2">
          <span className="text-4xl">🧁</span>
        </div>

        <h2 className="text-2xl font-bold text-text-main">
          Bem-vindo de volta!
        </h2>
        <p className="text-base text-text-soft">Faça login para continuar.</p>

        <button
          onClick={handleGoogleLogin}
          className="mt-6 w-full flex items-center justify-center gap-2 px-6 py-3 bg-gray-50 border border-border rounded-full text-sm font-medium text-text-main cursor-pointer hover:bg-gray-100 transition"
        >
          <img
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Entrar com Google
        </button>
      </div>
    </div>
  );
};

export default Login;
