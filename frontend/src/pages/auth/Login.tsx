import loginImg from './loginImg.svg';

const Login = () => {
  const handleGoogleLogin = () => {
    window.location.href = `${import.meta.env.VITE_API_URL}/auth/google`;
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-bg overflow-hidden">
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[300px] h-[300px] bg-accent/10 rounded-full blur-[100px]" />

      <div className="relative z-10 flex items-stretch w-full max-w-4xl min-h-[500px] mx-4 md:mx-0 rounded-2xl border border-border overflow-hidden">
        <div className="flex-1 bg-bg-card backdrop-blur-md p-8 flex flex-col items-center justify-center gap-3">
          <p className="text-2xl font-medium tracking-tight text-text-main m-2">
            Confeita<span className="text-primary font-semibold">Desk</span>
          </p>
          <h2 className="text-2xl font-semibold text-text-main">
            Bem-vindo de volta!
          </h2>
          <p className="text-sm text-text-soft">Faça login para continuar.</p>

          <button
            onClick={handleGoogleLogin}
            className="mt-4 w-full max-w-xs flex items-center justify-center gap-2 px-6 py-3 bg-bg-hover border border-border rounded-full text-sm font-medium text-text-main cursor-pointer hover:bg-white/15 transition"
          >
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Entrar com Google
          </button>
        </div>

        <div className="hidden md:flex flex-1 items-center justify-center bg-primary/20 p-8">
          <img src={loginImg} alt="" className="w-72 -scale-x-100" />
        </div>
      </div>
    </div>
  );
};

export default Login;
