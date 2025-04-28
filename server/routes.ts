import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertEventRegistrationSchema, insertEventSchema, insertInitiativeSchema, insertTeamMemberSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact Form API Endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;
      
      // In a real app, you would send an email using a service
      // For now, just log the message and return success
      console.log(`Contact Form Submission from ${name} (${email}): ${subject}`);
      
      res.status(200).json({ success: true, message: 'Message received. We will contact you soon!' });
    } catch (error) {
      res.status(500).json({ success: false, message: 'An error occurred while sending your message.' });
    }
  });

  // Newsletter Subscription Endpoint
  app.post('/api/subscribe', async (req, res) => {
    try {
      const { email } = req.body;
      
      // In a real app, you would add this to a newsletter database
      // For now, just log the email and return success
      console.log(`Newsletter subscription from: ${email}`);
      
      res.status(200).json({ success: true, message: 'Thank you for subscribing to our newsletter!' });
    } catch (error) {
      res.status(500).json({ success: false, message: 'An error occurred while processing your subscription.' });
    }
  });

  // ======= EVENT ROUTES =======
  
  // Get all events
  app.get('/api/events', async (req, res) => {
    try {
      const events = await storage.getEvents();
      res.status(200).json(events);
    } catch (error) {
      console.error('Error fetching events:', error);
      res.status(500).json({ error: 'Failed to fetch events' });
    }
  });

  // Get a specific event
  app.get('/api/events/:id', async (req, res) => {
    try {
      const id = parseInt(req.params.id, 10);
      const event = await storage.getEvent(id);
      
      if (!event) {
        return res.status(404).json({ error: 'Event not found' });
      }
      
      res.status(200).json(event);
    } catch (error) {
      console.error(`Error fetching event with ID ${req.params.id}:`, error);
      res.status(500).json({ error: 'Failed to fetch event' });
    }
  });

  // Create a new event
  app.post('/api/events', async (req, res) => {
    try {
      const result = insertEventSchema.safeParse(req.body);
      
      if (!result.success) {
        return res.status(400).json({ errors: result.error.format() });
      }
      
      const newEvent = await storage.createEvent(result.data);
      res.status(201).json(newEvent);
    } catch (error) {
      console.error('Error creating event:', error);
      res.status(500).json({ error: 'Failed to create event' });
    }
  });

  // ======= EVENT REGISTRATION ROUTES =======
  
  // Get all registrations for an event
  app.get('/api/events/:id/registrations', async (req, res) => {
    try {
      const eventId = parseInt(req.params.id, 10);
      const registrations = await storage.getEventRegistrations(eventId);
      res.status(200).json(registrations);
    } catch (error) {
      console.error(`Error fetching registrations for event ID ${req.params.id}:`, error);
      res.status(500).json({ error: 'Failed to fetch event registrations' });
    }
  });

  // Register for an event
  app.post('/api/events/:id/register', async (req, res) => {
    try {
      const eventId = parseInt(req.params.id, 10);
      
      // Add eventId to body
      const data = { ...req.body, eventId };
      
      const result = insertEventRegistrationSchema.safeParse(data);
      
      if (!result.success) {
        return res.status(400).json({ errors: result.error.format() });
      }
      
      const registration = await storage.createEventRegistration(result.data);
      res.status(201).json(registration);
    } catch (error) {
      console.error('Error registering for event:', error);
      res.status(500).json({ error: 'Failed to register for event' });
    }
  });

  // ======= INITIATIVES ROUTES =======
  
  // Get all initiatives
  app.get('/api/initiatives', async (req, res) => {
    try {
      const initiatives = await storage.getInitiatives();
      res.status(200).json(initiatives);
    } catch (error) {
      console.error('Error fetching initiatives:', error);
      res.status(500).json({ error: 'Failed to fetch initiatives' });
    }
  });

  // Get a specific initiative
  app.get('/api/initiatives/:id', async (req, res) => {
    try {
      const id = parseInt(req.params.id, 10);
      const initiative = await storage.getInitiative(id);
      
      if (!initiative) {
        return res.status(404).json({ error: 'Initiative not found' });
      }
      
      res.status(200).json(initiative);
    } catch (error) {
      console.error(`Error fetching initiative with ID ${req.params.id}:`, error);
      res.status(500).json({ error: 'Failed to fetch initiative' });
    }
  });

  // Create a new initiative
  app.post('/api/initiatives', async (req, res) => {
    try {
      const result = insertInitiativeSchema.safeParse(req.body);
      
      if (!result.success) {
        return res.status(400).json({ errors: result.error.format() });
      }
      
      const newInitiative = await storage.createInitiative(result.data);
      res.status(201).json(newInitiative);
    } catch (error) {
      console.error('Error creating initiative:', error);
      res.status(500).json({ error: 'Failed to create initiative' });
    }
  });

  // ======= TEAM MEMBERS ROUTES =======
  
  // Get all team members
  app.get('/api/team', async (req, res) => {
    try {
      const members = await storage.getTeamMembers();
      res.status(200).json(members);
    } catch (error) {
      console.error('Error fetching team members:', error);
      res.status(500).json({ error: 'Failed to fetch team members' });
    }
  });

  // Get a specific team member
  app.get('/api/team/:id', async (req, res) => {
    try {
      const id = parseInt(req.params.id, 10);
      const member = await storage.getTeamMember(id);
      
      if (!member) {
        return res.status(404).json({ error: 'Team member not found' });
      }
      
      res.status(200).json(member);
    } catch (error) {
      console.error(`Error fetching team member with ID ${req.params.id}:`, error);
      res.status(500).json({ error: 'Failed to fetch team member' });
    }
  });

  // Create a new team member
  app.post('/api/team', async (req, res) => {
    try {
      const result = insertTeamMemberSchema.safeParse(req.body);
      
      if (!result.success) {
        return res.status(400).json({ errors: result.error.format() });
      }
      
      const newMember = await storage.createTeamMember(result.data);
      res.status(201).json(newMember);
    } catch (error) {
      console.error('Error creating team member:', error);
      res.status(500).json({ error: 'Failed to create team member' });
    }
  });

  // Create HTTP server
  const httpServer = createServer(app);

  return httpServer;
}
