// mockData.ts
// Simple local dataset representing the items shown on the Home screen.
// The structure mirrors what the Redux store or backend might provide; for our
// prototype it lives entirely in memory. Each object includes a title,
// subtitle and a longer description for the detail view.

export interface Item {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl?: string;
  backgroundColor?: string;
}

export const items: Item[] = [
  {
    id: '1',
    title: 'Wellness Journey',
    subtitle: 'Your path to health',
    description: 'Start your personal wellness journey with guided lessons, expert advice, and a supportive community. Track your progress and celebrate milestones.',
    imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=300&fit=crop',
    backgroundColor: '#E3F2FD',
  },
  {
    id: '2',
    title: 'Meditation & Mindfulness',
    subtitle: 'Find inner peace',
    description: 'Learn meditation techniques to reduce stress and improve focus. Daily guided sessions help you develop a consistent practice.',
    imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=300&fit=crop',
    backgroundColor: '#FFF3E0',
  },
  {
    id: '3',
    title: 'Nutrition Basics',
    subtitle: 'Eat for your health',
    description: 'Discover nutrition fundamentals and build healthy eating habits. Learn about foods that support your wellness goals.',
    imageUrl: 'https://images.unsplash.com/photo-1490515846006-25ce56e7bcb7?w=400&h=300&fit=crop',
    backgroundColor: '#F1F8E9',
  },
];

// --- additional mock types for wellness app ---

export interface Notification {
  id: string;
  message: string;
  timestamp: string;
}

export const notifications: Notification[] = [
  { id: 'n1', message: 'New course available: Advanced Meditation', timestamp: '2h ago' },
  { id: 'n2', message: 'Complete today\'s wellness check-in', timestamp: '1d ago' },
  { id: 'n3', message: 'Expert article: Sleep Quality Tips', timestamp: '3d ago' },
];

export interface Course {
  id: string;
  title: string;
  duration: string;
  videoDuration: string;
  imageUrl?: string;
}

export const courses: Course[] = [
  { 
    id: 'c1', 
    title: 'Meditation Basics', 
    duration: '5 lessons',
    videoDuration: '09:51',
    imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=300&fit=crop'
  },
  { 
    id: 'c2', 
    title: 'Yoga for Wellness', 
    duration: '8 lessons',
    videoDuration: '12:30',
    imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=300&fit=crop'
  },
  { 
    id: 'c3', 
    title: 'Nutrition Fundamentals', 
    duration: '6 lessons',
    videoDuration: '08:15',
    imageUrl: 'https://images.unsplash.com/photo-1490515846006-25ce56e7bcb7?w=400&h=300&fit=crop'
  },
];

export interface Post {
  id: string;
  author: string;
  time: string;
  title: string;
  body: string;
  likes: number;
  comments: number;
  views: number;
}

export const homeworkPosts: Post[] = [
  {
    id: 'p1',
    author: 'Sarah M.',
    time: '3h ago',
    title: 'Weekly Wellness Check-in',
    body: 'I have been tracking my meals and feeling more energetic after adding morning walks to my routine.',
    likes: 12,
    comments: 4,
    views: 120,
  },
  {
    id: 'p2',
    author: 'James K.',
    time: '1d ago',
    title: 'Yoga Progress Update',
    body: 'Managed to hold the pose for 30 seconds today! The flexibility exercises are really helping.',
    likes: 8,
    comments: 2,
    views: 80,
  },
];

export interface InfoCard {
  id: string;
  title: string;
  preview: string;
  likes: number;
  comments: number;
  imageUrl?: string;
}

export const infoCards: InfoCard[] = [
  {
    id: 'i1',
    title: 'Benefits of Hydration',
    preview: 'Drinking water boosts blood circulation and improves skin health...',
    likes: 24,
    comments: 5,
    imageUrl: 'https://images.unsplash.com/photo-1517457373614-b7152f800fd1?w=400&h=250&fit=crop',
  },
  {
    id: 'i2',
    title: 'Stress Reduction Techniques',
    preview: 'Try deep breathing exercises and mindfulness meditation daily...',
    likes: 18,
    comments: 3,
    imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=250&fit=crop',
  },
  {
    id: 'i3',
    title: 'Sleep Quality Tips',
    preview: 'Establish a consistent bedtime routine and create a calm sleep environment...',
    likes: 31,
    comments: 7,
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop',
  },
];

export const forumRecipients = ['All Members', 'Wellness Experts', 'Nutrition Coach'];
