import React from 'react';
import { 
  GraduationCap, 
  Sparkles, 
  BookOpen, 
  Users, 
  HelpCircle, 
  PhoneCall, 
  Settings, 
  MapPin, 
  Award,
  Calendar
} from 'lucide-react';

const iconMap = {
  graduation: GraduationCap,
  sparkles: Sparkles,
  book: BookOpen,
  users: Users,
  faq: HelpCircle,
  phone: PhoneCall,
  gear: Settings,
  pin: MapPin,
  award: Award,
  calendar: Calendar
};

export default function Badge({ 
  icon = "graduation", 
  text, 
  variant = "blue", 
  className = "" 
}) {
  const IconComponent = iconMap[icon] || GraduationCap;
  
  return (
    <span className={`badge badge-${variant} ${className}`}>
      <IconComponent size={14} className="badge-icon" />
      <span>{text}</span>
    </span>
  );
}
