import React from 'react';

export interface EducationItem {
  institution: string;
  degree: string;
  gpa: string;
  date: string;
  specialization: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  date: string;
  points: string[];
}

export interface ProjectItem {
  title: string;
  techStack: string;
  description: string;
  githubUrl?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: React.ComponentType<{ size?: number | string; className?: string }>;
}