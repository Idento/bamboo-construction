import type { ImageMetadata } from 'astro';

import project1 from '../assets/images/project-1.jpg';
import project2 from '../assets/images/project-2.jpg';
import project3 from '../assets/images/project-3.jpg';
import project4 from '../assets/images/project-4.jpg';
import project5 from '../assets/images/project-5.jpg';
import news1 from '../assets/images/news-1.jpg';
import news2 from '../assets/images/news-2.jpg';
import news3 from '../assets/images/news-3.jpg';
import news4 from '../assets/images/news-4.jpg';
import news5 from '../assets/images/news-5.jpg';
import news6 from '../assets/images/news-6.jpg';
import iconHome from '../assets/icons/icon-001-home.png';
import iconSketch from '../assets/icons/icon-002-sketch.png';
import iconTools from '../assets/icons/icon-003-tools.png';

export const navigation = [
  { label: 'Home', href: '' },
  { label: 'About', href: 'about/' },
  { label: 'Projects', href: 'projects/' },
  { label: 'Services', href: 'services/' },
  { label: 'News', href: 'news/' },
  { label: 'Contact', href: 'contact/' },
];

export const socials = [
  { label: 'Facebook', href: 'https://www.facebook.com/', icon: 'facebook' },
  { label: 'Instagram', href: 'https://www.instagram.com/', icon: 'instagram' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: 'linkedin' },
  { label: 'Twitter', href: 'https://twitter.com/', icon: 'twitter' },
  { label: 'Blogger', href: 'https://www.blogger.com/', icon: 'blogger' },
] as const;

export const contact = {
  address: 'Construction and renovation',
  phone: 'Open Monday to Friday',
  email: 'Contact us',
};

export interface Service {
  title: string;
  text: string;
  icon: ImageMetadata | 'helmet' | 'crane' | 'roller';
}

export const services: Service[] = [
  {
    title: 'Building new homes',
    text: 'Vehicula at eget a arcu neque, ultricies liquet tempus vel amet eget egestas arcu non.',
    icon: iconHome,
  },
  {
    title: 'Designing spaces',
    text: 'Vehicula at eget a arcu neque, ultricies liquet tempus vel amet eget egestas arcu non.',
    icon: iconSketch,
  },
  {
    title: 'Road maintenance',
    text: 'Vehicula at eget a arcu neque, ultricies liquet tempus vel amet eget egestas arcu non.',
    icon: iconTools,
  },
  {
    title: 'Site safety audits',
    text: 'Pretium curabitur fames est, gravida feugiat viverra porttitor semper in faucibus ut.',
    icon: 'helmet',
  },
  {
    title: 'Heavy structures',
    text: 'Ipsum vel aliquet purus urna placerat convallis felis, enim leo leo non in viverra.',
    icon: 'crane',
  },
  {
    title: 'Renovation work',
    text: 'Adipiscing nisi sed dictum nisi blandit, vehicula at eget a arcu neque ultricies.',
    icon: 'roller',
  },
];

export const projectCategories = ['Buildings', 'Interior & Exterior', 'Renovate', 'Industry', 'Road'] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export interface Project {
  title: string;
  category: ProjectCategory;
  image: ImageMetadata;
  alt: string;
}

export const projects: Project[] = [
  {
    title: 'Jaguare garment industry',
    category: 'Industry',
    image: project1,
    alt: 'Factory roof with yellow ventilation pipes and a steel staircase',
  },
  {
    title: 'Outbox creatives building',
    category: 'Interior & Exterior',
    image: project2,
    alt: 'Angular glass and metal building against a cloudy sky',
  },
  {
    title: 'Slova private residence',
    category: 'Renovate',
    image: project3,
    alt: 'Dark wooden house with a steep metal roof',
  },
  {
    title: 'Northgate business park',
    category: 'Buildings',
    image: project4,
    alt: 'Tower cranes above a building site',
  },
  {
    title: 'Eastline steel bridge',
    category: 'Road',
    image: project5,
    alt: 'Two workers welding a steel bridge structure',
  },
];

export interface Article {
  title: string;
  date: string;
  isoDate: string;
  category: string;
  image: ImageMetadata;
  alt: string;
}

export const articles: Article[] = [
  {
    title: 'Top 10 mindblowing architecture buildings in the world',
    date: 'Feb 1, 2022',
    isoDate: '2022-02-01',
    category: 'Buildings',
    image: news1,
    alt: 'Glass skyscraper seen from below',
  },
  {
    title: 'Amazing technologies that helped to create creatives works',
    date: 'Feb 2, 2022',
    isoDate: '2022-02-02',
    category: 'Construction',
    image: news2,
    alt: 'Tower crane behind a tree on a building site',
  },
  {
    title: 'Top 100 best construction company around the world',
    date: 'Feb 3, 2022',
    isoDate: '2022-02-03',
    category: 'Company',
    image: news3,
    alt: 'Worker in a yellow helmet tying steel reinforcement bars',
  },
  {
    title: 'How our crews stay safe when working at height',
    date: 'Feb 8, 2022',
    isoDate: '2022-02-08',
    category: 'Safety',
    image: news4,
    alt: 'Workers in helmets hammering on a steel beam',
  },
  {
    title: 'Planning a large site: cranes, access and timing',
    date: 'Feb 12, 2022',
    isoDate: '2022-02-12',
    category: 'Construction',
    image: news5,
    alt: 'Yellow tower crane above concrete floors under construction',
  },
  {
    title: 'Why curved facades are coming back in city centers',
    date: 'Feb 17, 2022',
    isoDate: '2022-02-17',
    category: 'Buildings',
    image: news6,
    alt: 'Round glass tower photographed in black and white',
  },
];

export const testimonials = [
  {
    quote:
      'At the core of our practice is the idea that cities are the incubators of our greatest achievements, and the best hope for a sustainable future.',
    name: 'John Geoffrey',
    company: 'Hexagon Builders inc., USA',
  },
  {
    quote:
      'They delivered our warehouse two weeks early, kept the site spotless and answered every call. We already booked them for phase two.',
    name: 'Laura Mendes',
    company: 'Northgate Logistics, Canada',
  },
  {
    quote:
      'Clear budget, clear schedule, no surprises. The renovation of our family house went exactly as planned on paper.',
    name: 'Daniel Okafor',
    company: 'Private client, United Kingdom',
  },
  {
    quote:
      'Their safety culture is the best we have seen on a shared site. Every subcontractor followed the same rules from day one.',
    name: 'Sofia Lindqvist',
    company: 'Eastline Infrastructure, Sweden',
  },
  {
    quote:
      'From the first sketch to the final inspection, one team owned the whole project. That is rare, and it shows in the result.',
    name: 'Marco Bellini',
    company: 'Outbox Creatives, Italy',
  },
];

export const stats = [
  { value: '780', label: 'Projects done' },
  { value: '28', label: 'Awards' },
  { value: '127', label: 'Total members' },
  { value: '627', label: 'Happy customers' },
];
