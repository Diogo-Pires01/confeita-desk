import loginImg from './loginImg.png';

const Login = () => {
  const handleGoogleLogin = () => {
    window.location.href = `${import.meta.env.VITE_API_URL}/auth/google`;
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-bg overflow-hidden">
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-1/2 h-3/4 bg-primary/15 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[300px] h-[300px] bg-accent/10 rounded-full blur-[100px]" />

      <div className="relative z-10 flex items-stretch w-full max-w-5xl min-h-[560px] mx-4 md:mx-0 rounded-2xl border border-border overflow-hidden">
        <div className="flex-1 bg-bg-card backdrop-blur-md flex flex-col items-center justify-center gap-6">
          <p className="text-3xl font-semibold tracking-tight text-text-main">
            Confeita<span className="text-primary font-bold">Desk</span>
          </p>

          <div className="text-center space-y-1">
            <h2 className="text-2xl font-medium text-text-main">
              Bem-vindo de volta!
            </h2>
            <p className="text-md text-text-soft">Faça login para continuar.</p>
          </div>

          <button
            onClick={handleGoogleLogin}
            className="mt-2 w-full max-w-xs flex items-center justify-center gap-3 px-6 py-3 bg-bg-hover border border-border rounded-full text-sm font-medium text-text-main cursor-pointer hover:bg-white/15 transition"
          >
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Entrar com Google
          </button>
        </div>
        <div className="hidden md:flex flex-1 items-center justify-center bg-bg-card py-2 pr-2">
          <img
            src={loginImg}
            className="w-full h-full object-cover object-left rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
