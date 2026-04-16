import { ArrowRight } from 'lucide-react';

const Landing = () => {
  return (
    <div className="relative min-h-screen bg-bg text-text-main overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-accent/15 rounded-full blur-[100px]" />

      {/* Navbar */}
      <nav className="relative z-10 flex items-center justify-between px-8 md:px-16 py-6">
        <span className="text-2xl font-medium tracking-tight">
          Confeita
          <span className="text-primary font-semibold">Desk</span>
        </span>
        <a
          href="/login"
          className="px-6 py-2 text-sm font-medium rounded-full border border-border bg-bg-card backdrop-blur-sm hover:bg-bg-hover transition"
        >
          Entrar
        </a>
      </nav>

      {/* Hero */}
      <main className="relative z-10 flex flex-col items-center justify-center text-center px-6 h-[calc(100vh-80px)]">
        <div className="flex flex-col items-center -mt-16">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-wide uppercase text-primary border border-primary/30 rounded-full bg-primary/10">
            Gestão simplificada para confeitarias
          </span>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-3xl tracking-tight">
            Organize sua confeitaria.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Sem complicação.
            </span>
          </h1>

          <p className="mt-5 text-base md:text-lg text-text-soft max-w-xl leading-relaxed">
            Pedidos, produtos, agenda e financeiro, tudo em um único painel
            pensado para quem produz com as mãos e precisa de praticidade.
          </p>

          <a
            href="/login"
            className="group flex items-center gap-2 mt-10 px-7 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary-light transition-all shadow-lg shadow-primary/25"
          >
            Comece agora
            <ArrowRight
              size={16}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </a>
        </div>
      </main>
    </div>
  );
};

export default Landing;
