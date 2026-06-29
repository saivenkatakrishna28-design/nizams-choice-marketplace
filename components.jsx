import React, { useState, useRef, useEffect } from 'react';
import { handleOmniChatbotQuery } from '../utils/aiRouter';

export default function ChatbotWidget({ selectedVibeProfile, triggerToast }) {
    const [isOpen, setIsOpen] = useState(false);
    const [tooltipVisible, setTooltipVisible] = useState(true);
    const [inputValue, setInputValue] = useState('');
    const [messages, setMessages] = useState([
        {
            sender: 'ai',
            text: "As-salamu alaykum! I am your omniscient grooming assistant. You can test me with <strong>any</strong> platform questions regarding specific local zones, prices, dynamic slots, styles, reviews, or provider metadata!"
        }
    ]);

    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const toggleChatWindow = () => {
        setIsOpen(!isOpen);
        if (tooltipVisible) setTooltipVisible(false);
    };

    const handleSend = () => {
        if (!inputValue.trim()) return;

        // Append user query bubble instantly
        const userMessage = { sender: 'user', text: inputValue };
        setMessages(prev => [...prev, userMessage]);
        const currentQuery = inputValue;
        setInputValue('');

        // Simulate AI thinking and network processing latency delay
        setTimeout(() => {
            const compiledResponse = handleOmniChatbotQuery(currentQuery, selectedVibeProfile);
            setMessages(prev => [...prev, { sender: 'ai', text: compiledResponse }]);
            if (triggerToast) triggerToast("Omni-agent answer compiled successfully.");
        }, 650);
    };

    return (
        <div className="fixed bottom-6 left-6 z-50 flex items-center gap-3">
            {/* Animated Hover Speech Bubble Tooltip */}
            {tooltipVisible && (
                <div id="chatbot-tooltip-bubble" className="bg-slate-900 text-white text-[11px] font-medium px-3 py-2 rounded-xl shadow-xl border border-white/10 relative animate-bounce whitespace-nowrap dark:bg-emerald-950">
                    <i className="fa-solid fa-sparkles text-amber-400 mr-1"></i> I am here to help you!
                    <div className="absolute bottom-3 -left-1.5 w-3 h-3 bg-slate-900 rotate-45 border-l border-b border-white/10 dark:bg-emerald-950"></div>
                </div>
            )}

            {/* Main Interactive Circle Launcher Button */}
            <button 
                onClick={toggleChatWindow}
                className="h-14 w-14 rounded-full shadow-2xl relative overflow-hidden group border-2 border-amber-500/40 hover:border-amber-400 transition-all duration-300 active:scale-95 hover:scale-105"
            >
                <img 
                    src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=150&q=80" 
                    alt="Nizam AI Concierge Avatar" 
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/40 via-transparent to-transparent opacity-60"></div>
            </button>

            {/* Contextual Chat Frame Window Container */}
            {isOpen && (
                <div id="chatbot-window" className="absolute bottom-16 left-0 w-85 sm:w-96 h-[480px] bg-white dark:bg-[#052920] rounded-3xl border border-stone-200/50 dark:border-emerald-900/40 shadow-2xl flex flex-col overflow-hidden animate-pop-up">
                    {/* Panel Header */}
                    <div className="bg-emerald-950 p-4 border-b border-emerald-900 flex items-center justify-between text-white">
                        <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-full overflow-hidden border border-amber-500/20">
                                <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=80&q=80" alt="Nizam AI" className="w-full h-full object-cover" />
                            </div>
                            <div className="text-left">
                                <p className="font-bold text-xs tracking-wide">Nizam Omniscient Agent</p>
                                <p className="text-[9px] text-emerald-400 flex items-center gap-1">
                                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span> Universal Answer Engine Active
                                </p>
                            </div>
                        </div>
                        <button onClick={toggleChatWindow} className="text-stone-400 hover:text-white transition text-xs">
                            <i class="fa-solid fa-xmark"></i>
                        </button>
                    </div>

                    {/* Chat Bubble History Viewport */}
                    <div className="flex-1 p-4 overflow-y-auto space-y-3 text-xs bg-[#FAF9F5]/40 dark:bg-transparent">
                        {messages.map((msg, index) => (
                            <div 
                                key={index} 
                                className={`flex items-start gap-2 max-w-[85%] ${msg.sender === 'user' ? 'ml-auto flex-row-reverse' : 'animate-slide-in'}`}
                            >
                                <div 
                                    className={`p-2.5 rounded-2xl rounded-tl-none text-left border shadow-sm ${
                                        msg.sender === 'user' 
                                            ? 'bg-emerald-900 text-white border-transparent' 
                                            : 'bg-stone-200 dark:bg-emerald-950 text-slate-800 dark:text-stone-200 border-stone-300/20'
                                    }`}
                                    dangerouslySetInnerHTML={{ __html: msg.text }}
                                />
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Chat Input Field Tray */}
                    <div className="p-3 border-t border-stone-100 dark:border-emerald-900/30 bg-white dark:bg-[#04241B] flex gap-2">
                        <input 
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                            className="flex-1 p-2.5 rounded-xl border border-stone-200 dark:border-emerald-900 bg-transparent text-xs text-slate-800 dark:text-white focus:outline-none focus:ring-1 focus:ring-emerald-800" 
                            placeholder="Ask anything (e.g., standard price, happy hour, fade cut)..."
                        />
                        <button 
                            onClick={handleSend}
                            className="bg-emerald-900 text-amber-400 px-3.5 rounded-xl transition hover:bg-emerald-950 text-xs"
                        >
                            <i className="fa-solid fa-paper-plane"></i>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}