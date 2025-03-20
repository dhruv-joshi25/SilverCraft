import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes for contact form
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;
      
      // Validate input
      if (!name || !email || !subject || !message) {
        return res.status(400).json({ 
          success: false,
          message: 'All fields are required' 
        });
      }

      // In a real application, you would save this to a database
      // and/or send an email notification
      
      // Simulate processing delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      return res.status(200).json({ 
        success: true,
        message: 'Message received successfully' 
      });
    } catch (error) {
      console.error('Error processing contact form:', error);
      return res.status(500).json({ 
        success: false,
        message: 'An error occurred while processing your request' 
      });
    }
  });

  // API route for career applications
  app.post('/api/careers/apply', async (req, res) => {
    try {
      const { name, email, position, resume } = req.body;
      
      // Validate input
      if (!name || !email || !position) {
        return res.status(400).json({ 
          success: false,
          message: 'All fields are required' 
        });
      }

      // In a real application, you would save this to a database
      // and/or send an email notification
      
      // Simulate processing delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      return res.status(200).json({ 
        success: true,
        message: 'Application received successfully' 
      });
    } catch (error) {
      console.error('Error processing job application:', error);
      return res.status(500).json({ 
        success: false,
        message: 'An error occurred while processing your application' 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
