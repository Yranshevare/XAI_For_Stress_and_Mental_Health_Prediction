'use client';

import Link from 'next/link';

export default function Results() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display">
      <div className="relative flex h-auto min-h-screen w-full flex-col">
        <div className="layout-container flex h-full grow flex-col">
          <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-primary/10 bg-white dark:bg-background-dark px-6 md:px-10 py-3 sticky top-0 z-50">
            <div className="flex items-center gap-4 text-slate-900 dark:text-slate-100">
              <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">Stress AI</h2>
            </div>
            <div className="flex flex-1 justify-end gap-4 md:gap-8 items-center">
              <div className="flex gap-2">
                <button className="flex size-10 cursor-pointer items-center justify-center rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </button>
                <button className="flex size-10 cursor-pointer items-center justify-center rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </button>
              </div>
              <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-primary/20 bg-slate-300"></div>
            </div>
          </header>

          <main className="flex flex-1 justify-center py-8 px-4 md:px-10">
            <div className="layout-content-container flex flex-col max-w-[1024px] flex-1 gap-6">
              <div className="bg-white dark:bg-slate-900 rounded-xl p-6 md:p-10 shadow-sm border border-primary/10 overflow-hidden relative">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <svg className="w-[120px] h-[120px] text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                  <div className="relative flex items-center justify-center" style={{width: '192px', height: '192px'}}>
                    <svg className="absolute inset-0" style={{transform: 'rotate(-90deg)', width: '192px', height: '192px'}}>
                      <circle className="text-primary/10" cx="96" cy="96" fill="transparent" r="88" stroke="currentColor" strokeWidth="12"></circle>
                      <circle className="text-primary" cx="96" cy="96" fill="transparent" r="88" stroke="currentColor" strokeDasharray="552.92" strokeDashoffset="193.5" strokeWidth="12"></circle>
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                      <span className="text-4xl font-black text-slate-900 dark:text-slate-100">65</span>
                      <span className="text-sm font-medium text-slate-500 uppercase tracking-widest">Score</span>
                    </div>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-3">
                      <span className="w-2 h-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                      Prediction Complete
                    </div>
                    <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-slate-100 tracking-tight mb-4">Moderate Stress</h1>
                    <p className="text-slate-600 dark:text-slate-400 text-lg max-w-xl leading-relaxed">
                      Your biometric patterns suggest an elevated level of physiological arousal. This is 12% higher than your baseline from the last 7 days.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 flex flex-col gap-6">
                  <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm border border-primary/10">
                    <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                      <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      Top Stress Drivers
                    </h2>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <div className="flex justify-between items-end">
                          <span className="font-semibold text-slate-700 dark:text-slate-300">Sleep Quality</span>
                          <span className="text-sm font-bold text-primary">32% Impact</span>
                        </div>
                        <div className="h-2.5 w-full bg-primary/10 rounded-full overflow-hidden">
                          <div className="h-full bg-primary rounded-full feature-bar-animate" style={{width: '32%'}}></div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between items-end">
                          <span className="font-semibold text-slate-700 dark:text-slate-300">Work Load Intensity</span>
                          <span className="text-sm font-bold text-primary">24% Impact</span>
                        </div>
                        <div className="h-2.5 w-full bg-primary/10 rounded-full overflow-hidden">
                          <div className="h-full bg-primary rounded-full feature-bar-animate" style={{width: '24%'}}></div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between items-end">
                          <span className="font-semibold text-slate-700 dark:text-slate-300">Heart Rate Variability (HRV)</span>
                          <span className="text-sm font-bold text-primary">18% Impact</span>
                        </div>
                        <div className="h-2.5 w-full bg-primary/10 rounded-full overflow-hidden">
                          <div className="h-full bg-primary rounded-full feature-bar-animate" style={{width: '18%'}}></div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between items-end">
                          <span className="font-semibold text-slate-700 dark:text-slate-300">Caffeine Intake</span>
                          <span className="text-sm font-bold text-primary">12% Impact</span>
                        </div>
                        <div className="h-2.5 w-full bg-primary/10 rounded-full overflow-hidden">
                          <div className="h-full bg-primary rounded-full feature-bar-animate" style={{width: '12%'}}></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
                      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      AI Insight
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed italic">
                      &quot;Your recent data shows a correlation between late-night screen time and decreased HRV. The model predicts that prioritizing 15 minutes of mindfulness before bed could reduce your morning stress score by up to 15%.&quot;
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-6">
                  <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm border border-primary/10">
                    <h3 className="font-bold mb-4 text-slate-900 dark:text-slate-100">Model Details</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-500">Confidence Level</span>
                        <span className="font-medium text-slate-900 dark:text-slate-100">94.2%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-500">Last Updated</span>
                        <span className="font-medium text-slate-900 dark:text-slate-100">Just now</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-500">Data Points</span>
                        <span className="font-medium text-slate-900 dark:text-slate-100">1,240</span>
                      </div>
                    </div>
                    <hr className="my-6 border-primary/10"/>
                    <div className="flex flex-col gap-3">
                      <Link href="/assessment">
                        <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                          </svg>
                          Run New Prediction
                        </button>
                      </Link>
                      <Link href="/">
                        <button className="w-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-slate-100 font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                          </svg>
                          Go to Home
                        </button>
                      </Link>
                    </div>
                  </div>

                  <div className="rounded-xl overflow-hidden border border-primary/10 bg-white dark:bg-slate-900">
                    <div className="h-32 bg-primary/20 flex items-center justify-center overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-tr from-primary/30 to-transparent flex items-end p-4">
                        <div className="flex gap-1 items-end h-full w-full">
                          <div className="flex-1 bg-primary/40 h-1/3 rounded-t-sm"></div>
                          <div className="flex-1 bg-primary/40 h-2/3 rounded-t-sm"></div>
                          <div className="flex-1 bg-primary/40 h-1/2 rounded-t-sm"></div>
                          <div className="flex-1 bg-primary/40 h-3/4 rounded-t-sm"></div>
                          <div className="flex-1 bg-primary/40 h-2/5 rounded-t-sm"></div>
                          <div className="flex-1 bg-primary/40 h-full rounded-t-sm"></div>
                          <div className="flex-1 bg-primary/40 h-4/5 rounded-t-sm"></div>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="font-bold text-slate-900 dark:text-slate-100 text-sm mb-1">Weekly Trend</h4>
                      <p className="text-xs text-slate-500">Stable, with weekend spikes</p>
                      <button className="mt-3 text-primary text-xs font-bold flex items-center hover:underline">
                        View Full Report
                        <svg className="w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <footer className="flex items-center justify-between p-4 border-t border-primary/10 mt-6 text-slate-400 text-xs">
                <div className="flex gap-4">
                  <span className="hover:text-primary cursor-pointer transition-colors">Privacy Policy</span>
                  <span className="hover:text-primary cursor-pointer transition-colors">Terms of Use</span>
                </div>
                <div>
                  © 2024 Stress AI
                </div>
              </footer>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
