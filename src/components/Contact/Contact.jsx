import React, { useState } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  // EmailJS configuration (replace with your actual IDs)
  const EMAILJS_SERVICE_ID = '<EMAILJS_SERVICE_ID>';
  const EMAILJS_TEMPLATE_ID = '<EMAILJS_TEMPLATE_ID>';
  const EMAILJS_PUBLIC_KEY = '<EMAILJS_PUBLIC_KEY>';

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
    // Clear submit status
    if (submitStatus) {
      setSubmitStatus('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      
      try {
        // Send email using EmailJS
        const result = await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
            to_name: 'Vishanth',
          },
          EMAILJS_PUBLIC_KEY
        );

        console.log('Email sent successfully:', result);
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        
        // Auto-hide success message after 5 seconds
        setTimeout(() => setSubmitStatus(''), 5000);
        
      } catch (error) {
        console.error('Failed to send email:', error);
        setSubmitStatus('error');
      }
      
      setIsSubmitting(false);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Let's Work Together</h2>
          <div className="section-divider"></div>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-md rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  I'm always interested in hearing about new projects and opportunities. 
                  Whether you're a company looking to hire, or you're a fellow developer 
                  wanting to collaborate, I'd love to hear from you.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="text-purple-400" size={20} />
                    <span className="text-gray-300">alex@example.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Github className="text-purple-400" size={20} />
                    <span className="text-gray-300">github.com/alexdev</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Linkedin className="text-purple-400" size={20} />
                    <span className="text-gray-300">linkedin.com/in/alexdev</span>
                  </div>
                </div>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Success/Error Messages */}
                {submitStatus === 'success' && (
                  <div className="bg-green-500/20 border border-green-500 text-green-300 px-4 py-3 rounded-lg">
                    ✅ Message sent successfully! I'll get back to you soon.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="bg-red-500/20 border border-red-500 text-red-300 px-4 py-3 rounded-lg">
                    ❌ Failed to send message. Please try again or email me directly.
                  </div>
                )}

                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    disabled={isSubmitting}
                    className={`w-full bg-slate-700/50 border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors ${
                      errors.name ? 'border-red-500' : 'border-slate-600'
                    } ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                  />
                  {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                </div>
                
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    disabled={isSubmitting}
                    className={`w-full bg-slate-700/50 border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors ${
                      errors.email ? 'border-red-500' : 'border-slate-600'
                    } ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                  />
                  {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                </div>
                
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows={4}
                    disabled={isSubmitting}
                    className={`w-full bg-slate-700/50 border rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors resize-none ${
                      errors.message ? 'border-red-500' : 'border-slate-600'
                    } ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                  />
                  {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
                </div>
                
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full font-semibold py-3 px-6 rounded-lg transition-all transform ${
                    isSubmitting 
                      ? 'bg-gray-600 cursor-not-allowed opacity-50' 
                      : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 hover:scale-105'
                  } text-white`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;