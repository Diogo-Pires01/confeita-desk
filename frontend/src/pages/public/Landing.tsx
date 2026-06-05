import { ArrowRight } from 'lucide-react';
import landingImage from './landingImage.png';

const Landing = () => {
  return (
    <div className="relative min-h-screen bg-bg text-text-main overflow-hidden">
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-accent/15 rounded-full blur-[100px]" />

      <nav className="relative z-10 flex items-center px-8 md:px-16 2xl:px-[10%] py-6">
        <span className="text-2xl font-medium tracking-tight">
          Confeita
          <span className="text-primary font-semibold">Desk</span>
        </span>
      </nav>

      <img
        src={landingImage}
        alt=""
        className="absolute z-[5] right-16 2xl:right-[10%] bottom-0 h-[85vh] object-contain pointer-events-none hidden md:block"
      />

      <main className="relative z-10 flex flex-col justify-center px-6 md:px-16 2xl:px-[10%] h-[calc(100vh-80px)]">
        <div className="flex flex-col items-center text-center md:items-start md:text-left max-w-xl">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-wide uppercase text-primary border border-primary/30 rounded-full bg-primary/10">
            Gestão simplificada para confeitarias
          </span>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
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
