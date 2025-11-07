'use client'

import { useState } from 'react'

export default function Home() {
  const [selectedToggles, setSelectedToggles] = useState<string[]>([])
  const [projectDetails, setProjectDetails] = useState('')

  const toggles = [
    { id: 'ai-native', label: 'AI Native' },
    { id: 'agent-guide', label: 'Agent Guide' },
    { id: 'deep-plan', label: 'Deep Plan Mode' },
  ]

  const handleToggle = (id: string) => {
    setSelectedToggles(prev =>
      prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]
    )
  }

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Animated background gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/3 -right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSg2LDE4MiwyMTIsMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40" />

      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Header with logo space */}
        <div className="flex justify-between items-center mb-24">
          <div className="text-2xl font-bold text-gradient">
            Agentic
          </div>
          <div className="flex gap-4">
            <button className="glass-effect px-6 py-2 rounded-full text-sm font-medium hover:scale-105 transition-all duration-300 aura-glow">
              Sign In
            </button>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center mb-16 animate-float">
          <h1 className="text-7xl md:text-8xl font-bold mb-6 text-gradient leading-tight tracking-tight">
            Build Anything
            <br />
            <span className="text-white">Without Code</span>
          </h1>
          <p className="text-xl md:text-2xl text-cyan-200/80 max-w-3xl mx-auto font-light">
            The next evolution in full-stack development.
            <br />
            From idea to production in minutes, not months.
          </p>
        </div>

        {/* Main Input Card */}
        <div className="max-w-4xl mx-auto mt-24">
          <div className="glass-effect-strong rounded-3xl p-8 md:p-12 shadow-2xl relative aura-glow animate-float"
               style={{ animationDelay: '1s' }}>
            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-cyan-400/40 rounded-tl-3xl" />
            <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-cyan-400/40 rounded-tr-3xl" />
            <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-cyan-400/40 rounded-bl-3xl" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-cyan-400/40 rounded-br-3xl" />

            <label className="block text-sm font-semibold text-cyan-300 mb-4 uppercase tracking-wider">
              Describe Your Project
            </label>

            <textarea
              value={projectDetails}
              onChange={(e) => setProjectDetails(e.target.value)}
              placeholder="Transform your vision into reality. Describe your app idea, features, and goals..."
              className="w-full h-64 bg-slate-900/50 border border-cyan-500/30 rounded-2xl p-6 text-lg text-white placeholder-slate-400/60 focus:outline-none focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none backdrop-blur-sm"
              style={{
                backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.02), rgba(6, 182, 212, 0.02))',
              }}
            />

            {/* Toggle Pills */}
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              {toggles.map((toggle) => (
                <button
                  key={toggle.id}
                  onClick={() => handleToggle(toggle.id)}
                  className={`
                    px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 relative
                    ${selectedToggles.includes(toggle.id)
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/50 scale-105'
                      : 'glass-effect text-cyan-100 hover:border-cyan-400/60 hover:scale-105'
                    }
                  `}
                  style={{
                    transform: selectedToggles.includes(toggle.id) ? 'translateY(-2px)' : 'translateY(0)',
                  }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {selectedToggles.includes(toggle.id) && (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                    {toggle.label}
                  </span>
                  {selectedToggles.includes(toggle.id) && (
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 blur-md opacity-50 -z-10" />
                  )}
                </button>
              ))}
            </div>

            {/* Submit Button */}
            <div className="mt-10 flex justify-center">
              <button className="group relative px-12 py-5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-2xl text-lg font-bold text-white shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 overflow-hidden">
                <span className="relative z-10 flex items-center gap-3">
                  Start Building
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
              </button>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-24 mb-12">
          {[
            { icon: '🤖', title: 'AI-Powered', desc: 'Intelligent code generation' },
            { icon: '⚡', title: 'Lightning Fast', desc: 'Deploy in seconds' },
            { icon: '🎨', title: 'Beautiful UIs', desc: 'Pixel-perfect designs' }
          ].map((feature, i) => (
            <div
              key={i}
              className="glass-effect rounded-2xl p-8 hover:scale-105 transition-all duration-300 aura-glow text-center animate-float"
              style={{ animationDelay: `${i * 0.5}s` }}
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-cyan-300 mb-2">{feature.title}</h3>
              <p className="text-slate-300/80">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />
    </main>
  )
}
