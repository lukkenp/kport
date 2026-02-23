"use client";
import React from "react";
import { motion } from "motion/react";

export const GlassForm = () => {
  return (
    <div className="relative w-full max-w-md mx-auto group">
      {/* Moving Border Glow */}
      <div className="absolute -inset-[1px] rounded-[48px] bg-gradient-to-r from-transparent via-[#CCFF00]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-md" />
      
      {/* Moving Border Animation */}
      <div className="absolute -inset-[1px] rounded-[48px] overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[conic-gradient(from_0deg,transparent_0_340deg,#CCFF00_360deg)] opacity-40"
        />
      </div>

      {/* Glass Container */}
      <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[48px] p-8 md:p-10 flex flex-col gap-8 shadow-2xl">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold text-white tracking-tight text-center">
            Agende seu Diagnóstico Estratégico
          </h2>
          <p className="text-sm text-gray-400 text-center font-light">
            Descubra como nossa infraestrutura pode escalar suas vendas sem caos.
          </p>
        </div>

        <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-[10px] font-semibold text-gray-400 ml-4 uppercase tracking-widest">
              Nome
            </label>
            <input
              id="name"
              type="text"
              placeholder="Seu nome completo"
              className="w-full bg-black/30 border border-white/5 rounded-full px-6 py-4 text-sm text-white placeholder:text-gray-600 shadow-inner focus:outline-none focus:ring-1 focus:ring-[#CCFF00]/50 transition-all font-light"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="whatsapp" className="text-[10px] font-semibold text-gray-400 ml-4 uppercase tracking-widest">
              WhatsApp
            </label>
            <input
              id="whatsapp"
              type="tel"
              placeholder="(00) 00000-0000"
              className="w-full bg-black/30 border border-white/5 rounded-full px-6 py-4 text-sm text-white placeholder:text-gray-600 shadow-inner focus:outline-none focus:ring-1 focus:ring-[#CCFF00]/50 transition-all font-light"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="company" className="text-[10px] font-semibold text-gray-400 ml-4 uppercase tracking-widest">
              Empresa
            </label>
            <input
              id="company"
              type="text"
              placeholder="Nome da sua empresa"
              className="w-full bg-black/30 border border-white/5 rounded-full px-6 py-4 text-sm text-white placeholder:text-gray-600 shadow-inner focus:outline-none focus:ring-1 focus:ring-[#CCFF00]/50 transition-all font-light"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="revenue" className="text-[10px] font-semibold text-gray-400 ml-4 uppercase tracking-widest">
              Faturamento Mensal
            </label>
            <div className="relative">
              <select
                id="revenue"
                className="w-full bg-black/30 border border-white/5 rounded-full px-6 py-4 text-sm text-white placeholder:text-gray-600 shadow-inner focus:outline-none focus:ring-1 focus:ring-[#CCFF00]/50 transition-all appearance-none font-light"
                defaultValue=""
              >
                <option value="" disabled className="text-gray-600">Selecione uma opção</option>
                <option value="ate-50k" className="bg-[#111] text-white">Até R$ 50.000</option>
                <option value="50k-100k" className="bg-[#111] text-white">R$ 50.000 a R$ 100.000</option>
                <option value="100k-500k" className="bg-[#111] text-white">R$ 100.000 a R$ 500.000</option>
                <option value="mais-500k" className="bg-[#111] text-white">Mais de R$ 500.000</option>
              </select>
              <div className="absolute inset-y-0 right-6 flex items-center pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </div>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-4 w-full bg-[#CCFF00] text-black font-semibold rounded-full px-6 py-4 text-sm shadow-[0_0_20px_rgba(204,255,0,0.3)] hover:shadow-[0_0_30px_rgba(204,255,0,0.6)] transition-shadow"
          >
            Solicitar Diagnóstico
          </motion.button>
        </form>
      </div>
    </div>
  );
};
