'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, Linkedin, Globe, MapPin, Home } from 'lucide-react';

export function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: 'Email',
      value: 'sachin13579p@gmail.com',
      href: 'mailto:sachin13579p@gmail.com',
      color: 'text-blue-600'
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: 'Phone',
      value: '+91 8958477243',
      href: 'tel:+918958477243',
      color: 'text-green-600'
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: 'Current Location',
      value: 'Noida Sector 140, Uttar Pradesh',
      href: 'https://www.google.com/maps/search/Noida+Sector+140+Uttar+Pradesh+India',
      color: 'text-purple-600'
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      title: 'LinkedIn',
      value: 'sachin-prajapati-451515252',
      href: 'https://www.linkedin.com/in/sachin-prajapati-451515252',
      color: 'text-blue-700'
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: 'Alternate Phone',
      value: '+91 7579971289',
      href: 'tel:+917579971289',
      color: 'text-emerald-600'
    },
    {
      icon: <Home className="h-5 w-5" />,
      title: 'Permanent Address',
      value: 'Najibabad, Bijnor, Uttar Pradesh',
      href: 'https://www.google.com/maps/search/Najibabad+Bijnor+Uttar+Pradesh',
      color: 'text-orange-600'
    },
    {
      icon: <Globe className="h-5 w-5" />,
      title: 'Portfolio',
      value: 'sachinprajapati.co.in',
      href: 'https://www.sachinprajapati.co.in',
      color: 'text-cyan-700'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">Get in Touch</h2>
        <p className="text-muted-foreground">
          I&apos;m always open to frontend opportunities, collaborations, and conversations around React, TypeScript, performance, and modern UI development.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {contactInfo.map((contact, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg bg-gray-100 ${contact.color}`}>
                  {contact.icon}
                </div>
                <CardTitle className="text-lg">{contact.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base font-medium mb-3">
                {contact.value}
              </CardDescription>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full"
                onClick={() => window.open(contact.href, '_blank')}
              >
                {contact.title === 'Location' ? 'View on Map' : `Open ${contact.title}`}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center space-y-4 pt-6">
        <div className="bg-accent rounded-lg p-6">
          <h3 className="font-semibold mb-2">What I'm Looking For</h3>
          <p className="text-sm text-muted-foreground">
            Frontend Developer roles • React and TypeScript projects • UI performance optimization • Product-focused engineering work • Collaborative teams
          </p>
        </div>
        
        <p className="text-sm text-muted-foreground">
          Feel free to reach out for job opportunities, freelance work, or collaboration.
          I especially enjoy projects where I can improve performance, responsiveness, and overall user experience.
        </p>
      </div>
    </div>
  );
}
