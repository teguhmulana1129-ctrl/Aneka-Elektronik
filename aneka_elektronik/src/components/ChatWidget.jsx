import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, User } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ChatWidget = () => {
    const location = useLocation();
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState(() => {
        // Always start fresh on refresh
        return [
            { id: 1, text: t('chatbot.initial_message'), sender: 'bot' }
        ];
    });
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);

    // No localStorage persistence per user request
    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
            // Auto focus input when opened
            setTimeout(() => inputRef.current?.focus(), 300);
        }
    }, [isOpen]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const handleSend = async (e) => {
        e.preventDefault();
        const userText = inputValue.trim();
        if (!userText || isLoading) return;

        const newUserMessage = {
            id: Date.now(),
            text: userText,
            sender: 'user'
        };

        const updatedMessages = [...messages, newUserMessage];
        setMessages(updatedMessages);
        setInputValue('');
        setIsLoading(true);

        try {
            // Prepare history for context (limit to last 6 messages to keep payload light)
            const chatHistory = updatedMessages.slice(-6).map(msg => ({
                role: msg.sender === 'bot' ? 'assistant' : 'user',
                content: msg.text
            }));

            const response = await fetch('https://auto.apps.kediritechnopark.com/webhook/aneka-elektronik-chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: userText,
                    history: chatHistory,
                    context: {
                        page: location.pathname,
                        title: document.title,
                        language: i18n.language
                    }
                }),
            });

            if (!response.ok) throw new Error('Network response was not ok');

            const data = await response.json();

            // Handle different possible response formats from the webhook
            const botText = data.output || data.message || data.response || (i18n.language === 'id' ? "Maaf, terjadi kendala saat memproses pesan Anda." : "Sorry, there was a problem processing your message.");

            const botResponse = {
                id: Date.now() + 1,
                text: botText,
                sender: 'bot'
            };

            setMessages(prev => [...prev, botResponse]);
        } catch (error) {
            console.error('Error connecting to webhook:', error);
            const errorResponse = {
                id: Date.now() + 1,
                text: i18n.language === 'id' ? "Maaf, koneksi ke layanan bantuan sedang bermasalah. Silakan hubungi kami via WhatsApp." : "Sorry, the help connection is currently having issues. Please contact us via WhatsApp.",
                sender: 'bot'
            };
            setMessages(prev => [...prev, errorResponse]);
        } finally {
            setIsLoading(false);
        }
    };

    const clearChat = () => {
        const confirmMsg = i18n.language === 'id' ? 'Hapus semua riwayat pesan?' : 'Clear all message history?';
        if (window.confirm(confirmMsg)) {
            const initialMessage = [{ id: 1, text: t('chatbot.initial_message'), sender: 'bot' }];
            setMessages(initialMessage);
        }
    };

    return (
        <div className="chat-widget-container">
            {/* Toggle Button */}
            <button
                className={`chat-toggle ${isOpen ? 'open' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Chat"
            >
                {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
            </button>

            {/* Chat Window */}
            <div className={`chat-window premium-style ${isOpen ? 'active' : ''}`}>
                <div className="chat-avatar-popout">
                    <img src="/avatar.png" alt="Aneka Technician Avatar" />
                </div>

                <div className="chat-header">
                    <h4>{t('chatbot.title')}</h4>
                    {messages.length > 1 && (
                        <button className="clear-chat-btn" onClick={clearChat} title="Hapus Chat">
                            <X size={14} />
                        </button>
                    )}
                </div>

                <div className="chat-messages">
                    {messages.map((msg) => (
                        <div key={msg.id} className={`message-bubble ${msg.sender}`}>
                            <div className="message-content">
                                {msg.text}
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                        <div className="message-bubble bot typing-indicator">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                <form className="chat-input-area" onSubmit={handleSend}>
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder={t('chatbot.input_placeholder')}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        disabled={isLoading}
                    />
                    <button type="submit" disabled={!inputValue.trim() || isLoading}>
                        <Send size={22} strokeWidth={2.5} />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ChatWidget;
