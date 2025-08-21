import React, { useState, useRef, useEffect } from 'react'

const StudentAIAssistant = () => {
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

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

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

  return (
    <div className="profile-content">
      <div className="profile-section">
        <h2>AI Learning Assistant</h2>
        <p className="ai-description">
          Get instant help with your studies, assignments, and course questions. Your AI tutor is here to support your learning journey!
        </p>

        {/* Quick Questions */}
        <div className="quick-questions">
          <h3>Quick Questions</h3>
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

        {/* Chat Interface */}
        <div className="chat-container">
          <div className="chat-header">
            <div className="ai-avatar">🤖</div>
            <div className="ai-info">
              <h3>AI Learning Assistant</h3>
              <span className="ai-status">Online • Ready to help</span>
            </div>
          </div>

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
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="22" y1="2" x2="11" y2="13"/>
                  <polygon points="22,2 15,22 11,13 2,9"/>
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default StudentAIAssistant
