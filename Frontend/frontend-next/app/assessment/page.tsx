'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Assessment() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    age: '',
    sleep: '',
    workStress: 50,
    social: '',
    screenTime: '',
    activity: 'light',
    mood: 'good'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/results');
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display min-h-screen text-slate-900 dark:text-slate-100 selection:bg-primary/30">
      <div className="relative flex h-auto min-h-screen w-full flex-col">
        <div className="layout-container flex h-full grow flex-col">
          <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-primary/10 px-6 md:px-20 py-4 bg-white/50 backdrop-blur-md sticky top-0 z-50">
            <div className="flex items-center gap-3 text-primary">
              <div className="size-8 flex items-center justify-center bg-primary/10 rounded-lg">
                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h2 className="text-slate-900 dark:text-slate-100 text-xl font-bold leading-tight tracking-tight">MindCheck</h2>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
              <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
            </div>
          </header>

          <main className="flex-1 flex flex-col items-center justify-center p-4 md:p-8 lg:p-12 relative">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>

            <div className="w-full max-w-[720px] space-y-8">
              <div className="flex flex-col gap-3 px-2">
                <div className="flex gap-6 justify-between items-end">
                  <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100">Daily Wellness Check</h1>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Step 2 of 5: Lifestyle &amp; Environment</p>
                  </div>
                  <p className="text-primary text-lg font-bold">40%</p>
                </div>
                <div className="h-2.5 w-full bg-primary/10 rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{width: '40%'}}></div>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-6 md:p-10 shadow-xl shadow-primary/5">
                <form className="space-y-8" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative input-floating-label group">
                      <input
                        className="peer block w-full border-0 border-b-2 border-primary/20 bg-transparent px-0 py-2.5 text-slate-900 dark:text-slate-100 focus:border-primary focus:outline-none focus:ring-0 transition-all text-lg"
                        id="age"
                        placeholder=" "
                        type="number"
                        value={formData.age}
                        onChange={(e) => setFormData({...formData, age: e.target.value})}
                      />
                      <label
                        className="absolute top-3 -z-10 origin-[0] -translate-y-0 scale-100 text-slate-500 duration-300 peer-focus:-translate-y-6 peer-focus:scale-85 peer-focus:text-primary"
                        htmlFor="age"
                      >
                        Age
                      </label>
                    </div>

                    <div className="relative input-floating-label group">
                      <input
                        className="peer block w-full border-0 border-b-2 border-primary/20 bg-transparent px-0 py-2.5 text-slate-900 dark:text-slate-100 focus:border-primary focus:outline-none focus:ring-0 transition-all text-lg"
                        id="sleep"
                        placeholder=" "
                        type="number"
                        value={formData.sleep}
                        onChange={(e) => setFormData({...formData, sleep: e.target.value})}
                      />
                      <label
                        className="absolute top-3 -z-10 origin-[0] -translate-y-0 scale-100 text-slate-500 duration-300 peer-focus:-translate-y-6 peer-focus:scale-85 peer-focus:text-primary"
                        htmlFor="sleep"
                      >
                        Sleep Hours (Last Night)
                      </label>
                    </div>

                    <div className="md:col-span-2 space-y-4 pt-2">
                      <div className="flex justify-between items-center">
                        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Work Stress Level</label>
                        <span className="text-primary font-bold bg-primary/10 px-2 py-1 rounded text-xs">
                          {formData.workStress < 30 ? 'Low' : formData.workStress < 70 ? 'Moderate' : 'High'}
                        </span>
                      </div>
                      <input
                        className="w-full h-2 bg-primary/10 rounded-lg appearance-none cursor-pointer accent-primary"
                        type="range"
                        min="0"
                        max="100"
                        value={formData.workStress}
                        onChange={(e) => setFormData({...formData, workStress: parseInt(e.target.value)})}
                      />
                      <div className="flex justify-between text-[10px] text-slate-400 uppercase tracking-widest font-bold">
                        <span>Calm</span>
                        <span>Extreme</span>
                      </div>
                    </div>

                    <div className="relative input-floating-label group">
                      <select
                        className="peer block w-full border-0 border-b-2 border-primary/20 bg-transparent px-0 py-2.5 text-slate-900 dark:text-slate-100 focus:border-primary focus:outline-none focus:ring-0 transition-all text-lg appearance-none"
                        id="social"
                        value={formData.social}
                        onChange={(e) => setFormData({...formData, social: e.target.value})}
                      >
                        <option value="">Select...</option>
                        <option value="none">None today</option>
                        <option value="low">Minimal (1-2 people)</option>
                        <option value="med">Moderate</option>
                        <option value="high">Very Social</option>
                      </select>
                      <label
                        className="absolute top-3 -z-10 origin-[0] -translate-y-0 scale-100 text-slate-500 duration-300 peer-focus:-translate-y-6 peer-focus:scale-85 peer-focus:text-primary"
                        htmlFor="social"
                      >
                        Social Interaction
                      </label>
                      <div className="absolute right-0 top-3 pointer-events-none text-slate-400">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>

                    <div className="relative input-floating-label group">
                      <input
                        className="peer block w-full border-0 border-b-2 border-primary/20 bg-transparent px-0 py-2.5 text-slate-900 dark:text-slate-100 focus:border-primary focus:outline-none focus:ring-0 transition-all text-lg"
                        id="screen"
                        placeholder=" "
                        type="text"
                        value={formData.screenTime}
                        onChange={(e) => setFormData({...formData, screenTime: e.target.value})}
                      />
                      <label
                        className="absolute top-3 -z-10 origin-[0] -translate-y-0 scale-100 text-slate-500 duration-300 peer-focus:-translate-y-6 peer-focus:scale-85 peer-focus:text-primary"
                        htmlFor="screen"
                      >
                        Screen Time (Est. Hours)
                      </label>
                    </div>

                    <div className="md:col-span-2 space-y-3">
                      <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 block">Physical Activity Today</label>
                      <div className="flex flex-wrap gap-3">
                        <button
                          className={`px-4 py-2 rounded-full border text-sm font-medium transition-all ${
                            formData.activity === 'none'
                              ? 'border-primary bg-primary text-white shadow-lg shadow-primary/20'
                              : 'border-primary/20 bg-white dark:bg-slate-800 hover:bg-primary/10 hover:border-primary'
                          }`}
                          type="button"
                          onClick={() => setFormData({...formData, activity: 'none'})}
                        >
                          None
                        </button>
                        <button
                          className={`px-4 py-2 rounded-full border text-sm font-medium transition-all ${
                            formData.activity === 'light'
                              ? 'border-primary bg-primary text-white shadow-lg shadow-primary/20'
                              : 'border-primary/20 bg-white dark:bg-slate-800 hover:bg-primary/10 hover:border-primary'
                          }`}
                          type="button"
                          onClick={() => setFormData({...formData, activity: 'light'})}
                        >
                          Light (Walk)
                        </button>
                        <button
                          className={`px-4 py-2 rounded-full border text-sm font-medium transition-all ${
                            formData.activity === 'gym'
                              ? 'border-primary bg-primary text-white shadow-lg shadow-primary/20'
                              : 'border-primary/20 bg-white dark:bg-slate-800 hover:bg-primary/10 hover:border-primary'
                          }`}
                          type="button"
                          onClick={() => setFormData({...formData, activity: 'gym'})}
                        >
                          Gym / Cardio
                        </button>
                        <button
                          className={`px-4 py-2 rounded-full border text-sm font-medium transition-all ${
                            formData.activity === 'yoga'
                              ? 'border-primary bg-primary text-white shadow-lg shadow-primary/20'
                              : 'border-primary/20 bg-white dark:bg-slate-800 hover:bg-primary/10 hover:border-primary'
                          }`}
                          type="button"
                          onClick={() => setFormData({...formData, activity: 'yoga'})}
                        >
                          Yoga / Stretch
                        </button>
                      </div>
                    </div>

                    <div className="md:col-span-2 space-y-4 pt-4">
                      <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 block text-center">How are you feeling right now?</label>
                      <div className="flex justify-between max-w-md mx-auto">
                        <button
                          className="group flex flex-col items-center gap-2"
                          type="button"
                          onClick={() => setFormData({...formData, mood: 'struggling'})}
                        >
                          <div className={`size-12 rounded-full flex items-center justify-center transition-all ${
                            formData.mood === 'struggling'
                              ? 'bg-red-100 text-red-500 scale-110 border-2 border-red-500'
                              : 'bg-slate-100 text-slate-400 group-hover:bg-red-100 group-hover:text-red-500'
                          }`}>
                            <span className="text-3xl">😫</span>
                          </div>
                          <span className={`text-[10px] font-bold uppercase ${formData.mood === 'struggling' ? 'text-red-500' : 'text-slate-400'}`}>Struggling</span>
                        </button>

                        <button
                          className="group flex flex-col items-center gap-2"
                          type="button"
                          onClick={() => setFormData({...formData, mood: 'meh'})}
                        >
                          <div className={`size-12 rounded-full flex items-center justify-center transition-all ${
                            formData.mood === 'meh'
                              ? 'bg-orange-100 text-orange-500 scale-110 border-2 border-orange-500'
                              : 'bg-slate-100 text-slate-400 group-hover:bg-orange-100 group-hover:text-orange-500'
                          }`}>
                            <span className="text-3xl">😐</span>
                          </div>
                          <span className={`text-[10px] font-bold uppercase ${formData.mood === 'meh' ? 'text-orange-500' : 'text-slate-400'}`}>Meh</span>
                        </button>

                        <button
                          className="group flex flex-col items-center gap-2"
                          type="button"
                          onClick={() => setFormData({...formData, mood: 'good'})}
                        >
                          <div className={`rounded-full flex items-center justify-center transition-all ${
                            formData.mood === 'good'
                              ? 'size-14 bg-primary/20 text-primary scale-110 shadow-lg shadow-primary/10 border-2 border-primary'
                              : 'size-12 bg-slate-100 text-slate-400 group-hover:bg-primary/20 group-hover:text-primary'
                          }`}>
                            <span className="text-3xl">😊</span>
                          </div>
                          <span className={`text-[10px] font-bold uppercase ${formData.mood === 'good' ? 'text-primary' : 'text-slate-400'}`}>Good</span>
                        </button>

                        <button
                          className="group flex flex-col items-center gap-2"
                          type="button"
                          onClick={() => setFormData({...formData, mood: 'great'})}
                        >
                          <div className={`size-12 rounded-full flex items-center justify-center transition-all ${
                            formData.mood === 'great'
                              ? 'bg-emerald-100 text-emerald-500 scale-110 border-2 border-emerald-500'
                              : 'bg-slate-100 text-slate-400 group-hover:bg-emerald-100 group-hover:text-emerald-500'
                          }`}>
                            <span className="text-3xl">😄</span>
                          </div>
                          <span className={`text-[10px] font-bold uppercase ${formData.mood === 'great' ? 'text-emerald-500' : 'text-slate-400'}`}>Great</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="pt-10 flex flex-col md:flex-row items-center gap-4">
                    <Link href="/" className="w-full md:w-auto">
                      <button
                        className="w-full px-8 py-3.5 rounded-xl border border-primary/20 text-slate-600 dark:text-slate-300 font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
                        type="button"
                      >
                        Back
                      </button>
                    </Link>
                    <button
                      className="w-full md:flex-1 py-3.5 bg-primary text-white rounded-xl font-bold text-lg shadow-xl shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-3 group"
                      type="submit"
                    >
                      <span>Continue Assessment</span>
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>

              <div className="flex items-center justify-center gap-2 text-slate-400 text-xs">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span>Your data is encrypted and private</span>
              </div>
            </div>
          </main>

          <footer className="p-8 text-center text-slate-400 text-sm">
            © 2024 MindCheck. Designed for your peace of mind.
          </footer>
        </div>
      </div>
    </div>
  );
}
