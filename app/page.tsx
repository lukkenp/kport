import { AuroraBackground } from "@/components/AuroraBackground";
import { TextGenerateEffect } from "@/components/TextGenerateEffect";
import { GlassForm } from "@/components/GlassForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030303]">
      <AuroraBackground>
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-full flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-24 relative z-10 py-20 lg:py-0 min-h-screen">
          
          {/* Left Column: Copy */}
          <div className="flex-1 flex flex-col gap-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md w-fit mx-auto lg:mx-0">
              <span className="w-2 h-2 rounded-full bg-[#CCFF00] shadow-[0_0_10px_#CCFF00]" />
              <span className="text-[10px] font-semibold text-gray-300 uppercase tracking-widest">
                Ecossistema de Vendas
              </span>
            </div>
            
            <TextGenerateEffect 
              words="Construímos o motor de vendas e a infraestrutura tecnológica para o seu negócio escalar sem caos."
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white"
            />
            
            <p className="text-lg md:text-xl text-gray-400 font-light max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Substitua a desordem operacional por um sistema previsível. 
              Nossa engenharia une design premium e automação inteligente para 
              transformar sua operação em uma máquina de conversão.
            </p>
          </div>

          {/* Right Column: Form */}
          <div className="flex-1 w-full max-w-md lg:max-w-none flex justify-center lg:justify-end">
            <GlassForm />
          </div>

        </div>
      </AuroraBackground>
    </main>
  );
}
