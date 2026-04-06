'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display transition-colors duration-300">
      <header className="sticky top-0 z-50 glass border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-primary p-2 rounded-lg text-white">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">MindPredict AI</h2>
          </div>
          <nav className="hidden md:flex items-center gap-10">
            <a className="text-sm font-semibold hover:text-primary transition-colors" href="#features">Features</a>
            <a className="text-sm font-semibold hover:text-primary transition-colors" href="#how-it-works">How It Works</a>
            <a className="text-sm font-semibold hover:text-primary transition-colors" href="#research">Research</a>
            <a className="text-sm font-semibold hover:text-primary transition-colors" href="#contact">Contact</a>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/assessment">
              <button className="px-6 py-2.5 bg-primary text-white font-bold rounded-full hover:shadow-lg hover:shadow-primary/30 transition-all text-sm">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden pt-20 pb-32">
          <span className="leaf-float text-6xl top-20 left-10 transform -rotate-12">🌿</span>
          <span className="leaf-float text-8xl bottom-20 right-20 transform rotate-45">🌿</span>
          <span className="leaf-float text-4xl top-1/2 left-1/4 transform rotate-180">🌿</span>

          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider w-fit">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Next-Gen Clinical AI
              </div>

              <h1 className="text-5xl md:text-7xl font-black leading-[1.1] text-slate-900 dark:text-white">
                AI Powered <span className="text-primary">Mental Health</span> Prediction
              </h1>

              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
                Experience the future of mental wellness with our advanced AI model providing explainable insights and early detection. Empathetic technology for a healthier mind.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <Link href="/assessment">
                  <button className="px-8 py-4 bg-primary text-white font-bold rounded-xl shadow-xl shadow-primary/20 hover:translate-y-[-2px] transition-all flex items-center justify-center gap-2">
                    Start Assessment
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </Link>
                <button className="px-8 py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bold rounded-xl hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                  View Demo
                </button>
              </div>

              <div className="flex items-center gap-4 pt-4">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-300"></div>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-400"></div>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-500"></div>
                </div>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Trusted by 2,000+ early adopters</p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full"></div>
              <div className="relative glass rounded-3xl p-4 overflow-hidden shadow-2xl">
                <img
                  alt="Mental health visual concept"
                  className="rounded-2xl w-full h-auto object-cover aspect-[4/3]"
                  src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800"
                />
                <div className="absolute bottom-10 left-10 right-10 glass p-6 rounded-2xl shadow-xl">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-bold text-slate-800">Prediction Accuracy</span>
                    <span className="text-sm font-bold text-primary">94.2%</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full w-[94.2%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-24 bg-white dark:bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Core Capabilities</h2>
              <h3 className="text-4xl font-black text-slate-900 dark:text-white">Advanced AI at Your Service</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group p-8 rounded-3xl bg-background-light dark:bg-slate-800 border border-transparent hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 transition-all cursor-default">
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">AI Prediction</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Real-time risk assessment using state-of-the-art neural networks trained on clinical datasets.
                </p>
              </div>

              <div className="group p-8 rounded-3xl bg-background-light dark:bg-slate-800 border border-transparent hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 transition-all cursor-default">
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">Explainable AI Insights</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Understand the 'why' behind every prediction with our transparency layer designed for users.
                </p>
              </div>

              <div className="group p-8 rounded-3xl bg-background-light dark:bg-slate-800 border border-transparent hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 transition-all cursor-default">
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">Mental Health Awareness</h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Access a curated library of resources to support your journey and provide actionable wellness steps.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-8">How It Works</h2>
                <div className="space-y-12 relative">
                  <div className="absolute left-[27px] top-4 bottom-4 w-0.5 bg-slate-200 dark:bg-slate-700"></div>

                  <div className="relative flex items-start gap-6">
                    <div className="z-10 w-14 h-14 rounded-full bg-white dark:bg-slate-800 border-2 border-primary flex items-center justify-center text-primary shrink-0 shadow-lg">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">1. Enter Your Data</h4>
                      <p className="text-slate-600 dark:text-slate-400">Provide anonymous biometric and behavioral patterns through our secure, encrypted portal.</p>
                    </div>
                  </div>

                  <div className="relative flex items-start gap-6">
                    <div className="z-10 w-14 h-14 rounded-full bg-white dark:bg-slate-800 border-2 border-primary flex items-center justify-center text-primary shrink-0 shadow-lg">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">2. AI Model Predicts</h4>
                      <p className="text-slate-600 dark:text-slate-400">Our proprietary transformer models process patterns to identify early signs of stress or imbalance.</p>
                    </div>
                  </div>

                  <div className="relative flex items-start gap-6">
                    <div className="z-10 w-14 h-14 rounded-full bg-white dark:bg-slate-800 border-2 border-primary flex items-center justify-center text-primary shrink-0 shadow-lg">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">3. Get Explainable Results</h4>
                      <p className="text-slate-600 dark:text-slate-400">Receive a detailed report with clear justifications and recommended next steps for your health.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square bg-primary/5 rounded-full flex items-center justify-center">
                  <div className="glass p-8 rounded-3xl w-full max-w-md shadow-2xl space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-white">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm font-bold">Analysis Progress</div>
                        <div className="text-xs text-slate-500">Processing signals...</div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="h-10 w-full bg-primary/10 rounded-lg animate-pulse"></div>
                      <div className="h-10 w-3/4 bg-primary/10 rounded-lg animate-pulse"></div>
                      <div className="h-10 w-full bg-primary/10 rounded-lg animate-pulse"></div>
                    </div>
                    <div className="pt-4 border-t border-slate-100 dark:border-slate-700">
                      <div className="flex justify-between text-sm font-bold mb-2">
                        <span>Confidence</span>
                        <span>High</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-700 rounded-full">
                        <div className="bg-primary h-full w-[88%] rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 px-6">
          <div className="max-w-5xl mx-auto rounded-[3rem] bg-slate-900 dark:bg-primary/20 text-white p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
            <h3 className="text-4xl md:text-5xl font-black mb-8 relative z-10">Take control of your mental wellness today</h3>
            <p className="text-slate-300 mb-12 text-lg max-w-2xl mx-auto relative z-10">Join thousands of users who are using predictive AI to build resilience and prioritize their mental health.</p>
            <Link href="/assessment">
              <button className="px-10 py-5 bg-primary text-slate-900 font-black text-lg rounded-2xl hover:scale-105 transition-transform relative z-10">
                Get Started Free
              </button>
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-white dark:bg-background-dark pt-20 pb-10 border-t border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-primary p-2 rounded-lg text-white">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">MindPredict AI</h2>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Building a future where mental health is proactive, not reactive. Using data for good.
            </p>
          </div>

          <div>
            <h5 className="font-bold mb-6 text-slate-900 dark:text-white">Platform</h5>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a className="hover:text-primary" href="#">Assessments</a></li>
              <li><a className="hover:text-primary" href="#">How it Works</a></li>
              <li><a className="hover:text-primary" href="#">Security</a></li>
              <li><a className="hover:text-primary" href="#">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-6 text-slate-900 dark:text-white">Company</h5>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a className="hover:text-primary" href="#">About Us</a></li>
              <li><a className="hover:text-primary" href="#">Research Paper</a></li>
              <li><a className="hover:text-primary" href="#">Careers</a></li>
              <li><a className="hover:text-primary" href="#">Contact</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-6 text-slate-900 dark:text-white">Newsletter</h5>
            <p className="text-sm text-slate-500 mb-4">Get the latest insights on AI and wellness.</p>
            <form className="flex gap-2">
              <input className="bg-slate-50 dark:bg-slate-800 border-none rounded-lg text-sm px-4 py-2 w-full focus:ring-2 focus:ring-primary" placeholder="Your email" type="email"/>
              <button className="bg-primary text-white p-2 rounded-lg">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </form>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-slate-400">© 2024 MindPredict AI Inc. All rights reserved. Not a medical diagnostic tool.</p>
          <div className="flex gap-6">
            <a className="text-slate-400 hover:text-primary" href="#">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
