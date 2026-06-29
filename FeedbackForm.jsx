import React from 'react';

export default function FeedbackForm({ onFormSubmit }) {
  return (
    <section id="feedback-form-section" className="py-16 bg-[#FAF9F5] dark:bg-[#032019]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white dark:bg-[#042A20] rounded-3xl p-6 sm:p-10 shadow-xl border border-stone-200/60 dark:border-emerald-900/30 space-y-6">
                <div className="text-center space-y-2">
                    <span className="bg-amber-100 dark:bg-emerald-900 text-amber-900 dark:text-amber-400 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">Connect Hub</span>
                    <h2 class="royal-font text-2xl font-bold text-emerald-950 dark:text-white">Marketplace Query & Feedback Form</h2>
                    <p className="text-slate-500 dark:text-stone-400 text-xs">Have questions for the Nizam team or want to drop platform feedback? Lodge your ticket parameters here.</p>
                </div>

                <form onSubmit={onFormSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-left">
                    <div className="space-y-1">
                        <label className="block font-bold text-slate-600 dark:text-stone-300 uppercase tracking-wide">Your Full Name</label>
                        <input type="text" id="form-user-name" required className="w-full p-3 rounded-xl border border-stone-200 dark:border-emerald-900 bg-transparent text-slate-800 dark:text-white" placeholder="e.g. Krishna" />
                    </div>
                    <div className="space-y-1">
                        <label className="block font-bold text-slate-600 dark:text-stone-300 uppercase tracking-wide">Contact Email/Phone</label>
                        <input type="text" id="form-user-contact" required className="w-full p-3 rounded-xl border border-stone-200 dark:border-emerald-900 bg-transparent text-slate-800 dark:text-white" placeholder="e.g. user@example.com" />
                    </div>
                    <div className="sm:col-span-2 space-y-1">
                        <label className="block font-bold text-slate-600 dark:text-stone-300 uppercase tracking-wide">Query Category Paradigm</label>
                        <select id="form-query-type" className="w-full p-3 rounded-xl border border-stone-200 dark:border-emerald-900 bg-transparent text-stone-300 font-medium cursor-pointer">
                            <option value="booking">Booking / Schedule Dispute</option>
                            <option value="partnership">Salon Partnership Request</option>
                            <option value="feedback">General App Usability Feedback</option>
                        </select>
                    </div>
                    <div className="sm:col-span-2 space-y-1">
                        <label className="block font-bold text-slate-600 dark:text-stone-300 uppercase tracking-wide">Elaborate Statement Message</label>
                        <textarea id="form-user-message" rows="4" required className="w-full p-3 rounded-xl border border-stone-200 dark:border-emerald-900 bg-transparent text-slate-700 dark:text-white resize-none" placeholder="Describe your query metrics context cleanly here..."></textarea>
                    </div>
                    <div className="sm:col-span-2 pt-2">
                        <button type="submit" className="w-full bg-emerald-900 hover:bg-emerald-950 text-amber-400 font-bold py-3.5 rounded-xl shadow-lg transition duration-200">
                            Broadcast Query Ticket
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </section>
  );
}