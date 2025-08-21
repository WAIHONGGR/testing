import React, { useState, useRef, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'

const FloatingAIChat = () => {
  const { user } = useAuth()
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'ai',
      content: 'Hello! I\'m your AI learning assistant. I can help you with:\n\n📚 Course questions and explanations\n🔍 Study strategies and tips\n📝 Assignment help and guidance\n❓ General academic support\n\nHow can I assist you today?',
      timestamp: new Date().toLocaleTimeString()
    }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)
  const chatRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Close chat when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatRef.current && !chatRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const handleSendMessage = async (e) => {
    e.preventDefault()
    if (!inputMessage.trim()) return

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date().toLocaleTimeString()
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsTyping(true)

    // Simulate AI response (replace with actual AI API call)
    setTimeout(() => {
      const aiResponse = generateAIResponse(inputMessage)
      const aiMessage = {
        id: Date.now() + 1,
        type: 'ai',
        content: aiResponse,
        timestamp: new Date().toLocaleTimeString()
      }
      setMessages(prev => [...prev, aiMessage])
      setIsTyping(false)
    }, 1500)
  }

  const generateAIResponse = (userInput) => {
    const input = userInput.toLowerCase()
    
    if (input.includes('course') || input.includes('subject')) {
      return 'I can help you with course-related questions! What specific course or subject are you studying? I can provide explanations, study tips, and help clarify concepts.'
    } else if (input.includes('assignment') || input.includes('homework')) {
      return 'I\'m here to help with your assignments! While I can\'t do the work for you, I can guide you through the process, explain concepts, and help you understand the requirements. What specific assignment are you working on?'
    } else if (input.includes('study') || input.includes('exam')) {
      return 'Great question about studying! Here are some effective study strategies:\n\n• Break down topics into smaller chunks\n• Use active recall techniques\n• Create mind maps or diagrams\n• Practice with past exam questions\n• Take regular breaks (Pomodoro technique)\n\nWhat subject are you preparing for?'
    } else if (input.includes('help') || input.includes('confused')) {
      return 'I understand you\'re feeling confused. Let\'s break this down step by step. Can you tell me more specifically what you\'re struggling with? I\'m here to help clarify and guide you through it.'
    } else {
      return 'That\'s an interesting question! I\'m here to help you with your academic journey. Could you provide more details about what you\'d like to know? I can assist with course content, study strategies, assignment guidance, and more.'
    }
  }

  const quickQuestions = [
    'How can I improve my study habits?',
    'What\'s the best way to prepare for exams?',
    'Can you help me understand this concept?',
    'How do I manage my time better?'
  ]

  const handleQuickQuestion = (question) => {
    setInputMessage(question)
  }

  const toggleChat = () => {
    if (isOpen) {
      setIsMinimized(!isMinimized)
    } else {
      setIsOpen(true)
      setIsMinimized(false)
    }
  }

  const closeChat = () => {
    setIsOpen(false)
    setIsMinimized(false)
  }

  // Only show for students
  if (!user || user.role !== 'student') {
    return null
  }

  return (
    <>
      {/* Floating Chat Button */}
      <button
        className="floating-chat-button"
        onClick={toggleChat}
        title="AI Learning Assistant"
      >
        <span className="chat-icon">🤖</span>
        <span className="chat-label">AI Assistant</span>
      </button>

      {/* Chat Widget */}
      {isOpen && (
        <div className="floating-chat-widget" ref={chatRef}>
          {/* Chat Header */}
          <div className="chat-header">
            <div className="ai-avatar">🤖</div>
            <div className="ai-info">
              <h3>AI Learning Assistant</h3>
              <span className="ai-status">Online • Ready to help</span>
            </div>
            <div className="chat-controls">
              <button 
                className="minimize-btn"
                onClick={() => setIsMinimized(!isMinimized)}
                title={isMinimized ? "Expand" : "Minimize"}
              >
                {isMinimized ? '□' : '−'}
              </button>
              <button 
                className="close-btn"
                onClick={closeChat}
                title="Close"
              >
                ×
              </button>
            </div>
          </div>

          {/* Chat Content */}
          {!isMinimized && (
            <>
              {/* Quick Questions */}
              <div className="quick-questions">
                <h4>Quick Questions</h4>
                <div className="quick-questions-grid">
                  {quickQuestions.map((question, index) => (
                    <button
                      key={index}
                      className="quick-question-btn"
                      onClick={() => handleQuickQuestion(question)}
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>

              {/* Chat Messages */}
              <div className="chat-messages">
                {messages.map((message) => (
                  <div key={message.id} className={`message ${message.type}`}>
                    <div className="message-avatar">
                      {message.type === 'ai' ? '🤖' : '👤'}
                    </div>
                    <div className="message-content">
                      <div className="message-text">
                        {message.content.split('\n').map((line, index) => (
                          <p key={index}>{line}</p>
                        ))}
                      </div>
                      <div className="message-timestamp">{message.timestamp}</div>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="message ai">
                    <div className="message-avatar">🤖</div>
                    <div className="message-content">
                      <div className="typing-indicator">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              {/* Chat Input */}
              <form className="chat-input-form" onSubmit={handleSendMessage}>
                <div className="chat-input-container">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Ask me anything about your studies..."
                    className="chat-input"
                    disabled={isTyping}
                  />
                  <button
                    type="submit"
                    className="send-button"
                    disabled={!inputMessage.trim() || isTyping}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="22" y1="2" x2="11" y2="13"/>
                      <polygon points="22,2 15,22 11,13 2,9"/>
                    </svg>
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      )}
    </>
  )
}

export default FloatingAIChat
