import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Container from '@/components/ui/container';
import SectionHeading from '@/components/shared/SectionHeading';
import { useToast } from '@/hooks/use-toast';

const ContactSection: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        toast({
          title: "Message Sent",
          description: "Thank you for your message! We will get back to you soon.",
        });
      }, 1000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <Container>
        <SectionHeading title="CONTACT US" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-12">
              <h3 className="font-bold text-xl mb-4">Our Location</h3>
              <p className="text-gray-600 mb-2">Mansi Silver House, Soni Bazar, Darbargadh Chowk, Rajkot, India, Gujarat</p>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-gold">View on Map</a>
            </div>
            
            <div className="mb-12">
              <h3 className="font-bold text-xl mb-4">Contact Information</h3>
              <p className="flex items-center text-gray-600 mb-3">
                <i className="fas fa-phone-alt mr-3 text-gold"></i>
                +91 (0) 76666 92029
              </p>
              <p className="flex items-center text-gray-600 mb-3">
                <i className="fas fa-envelope mr-3 text-gold"></i>
                info@mansisilver.com
              </p>
              <p className="flex items-center text-gray-600">
                <i className="fas fa-clock mr-3 text-gold"></i>
                Monday - Saturday: 10:00 AM - 7:00 PM
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-xl mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-darkgray text-white flex items-center justify-center hover:bg-gold transition-colors" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-darkgray text-white flex items-center justify-center hover:bg-gold transition-colors" aria-label="Facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-darkgray text-white flex items-center justify-center hover:bg-gold transition-colors" aria-label="Pinterest">
                  <i className="fab fa-pinterest-p"></i>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-darkgray text-white flex items-center justify-center hover:bg-gold transition-colors" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:border-gold focus:ring-0 outline-none`} 
                    required
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:border-gold focus:ring-0 outline-none`} 
                    required
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border ${errors.subject ? 'border-red-500' : 'border-gray-300'} focus:border-gold focus:ring-0 outline-none`} 
                  required
                />
                {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject}</p>}
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5} 
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:border-gold focus:ring-0 outline-none`} 
                  required
                ></textarea>
                {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
              </div>
              <div>
                <button 
                  type="submit" 
                  className="w-full py-3 bg-gold text-white font-medium uppercase tracking-wider hover:bg-opacity-90 transition-all disabled:opacity-70"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;
