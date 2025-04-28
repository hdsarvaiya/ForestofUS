import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

export const forestImages = {
  hero: "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080&q=80",
  forestNature1: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80",
  forestNature2: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80",
  forestNature3: "https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80",
  forestNature4: "https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80",
  forestNature5: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80",
  forestNature6: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80",
  
  community1: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80",
  community2: "https://images.unsplash.com/photo-1513159446162-54eb8bdaa79b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80",
  community3: "https://images.unsplash.com/photo-1560252829-804f1aedf1be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80",
  community4: "https://images.unsplash.com/photo-1603826773127-13956407c8ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80",
  community5: "https://images.unsplash.com/photo-1599909142854-f991f1780d76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80",
  
  jamming1: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80",
  jamming2: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80",
  jamming3: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80",
  jamming4: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80",
  
  education1: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80",
  education2: "https://images.unsplash.com/photo-1580894742597-87bc8789db3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80",
  education3: "https://images.unsplash.com/photo-1541883556-ef0a243bc231?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80",
  education4: "https://images.unsplash.com/photo-1612831818583-8f345c41e92d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80",
  
  sustainability1: "https://images.unsplash.com/photo-1604187350708-51102a3f6e6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80",
  sustainability2: "https://images.unsplash.com/photo-1609151376730-f246ec0b99e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80",
  sustainability3: "https://images.unsplash.com/photo-1507654304600-18d902b183b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80",
  sustainability4: "https://images.unsplash.com/photo-1530533718754-001d2668365a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80",
  
  cabin1: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80",
  cabin2: "https://images.unsplash.com/photo-1614267157481-ca2b81ac6fcc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80",
  cabin3: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80",
  cabin4: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80",
  
  team1: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80",
  team2: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80",
  team3: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80",
  team4: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80",

  festival: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=800&q=80"
};

export const teamMembers = [
  {
    id: 1,
    name: "Maya Sharma",
    role: "Founder & Community Lead",
    bio: "Passionate about bringing people together through music and meaningful connections.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80",
    social: {
      instagram: "#",
      linkedin: "#",
      email: "#"
    }
  },
  {
    id: 2,
    name: "Rahul Patel",
    role: "Educational Programs Director",
    bio: "Former teacher dedicated to creating accessible learning opportunities for all children.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80",
    social: {
      twitter: "#",
      linkedin: "#",
      email: "#"
    }
  },
  {
    id: 3,
    name: "Priya Singh",
    role: "Music & Events Coordinator",
    bio: "Professional musician with a passion for creating inclusive community gatherings.",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80",
    social: {
      instagram: "#",
      spotify: "#",
      email: "#"
    }
  },
  {
    id: 4,
    name: "Arjun Kapoor",
    role: "Sustainability Manager",
    bio: "Environmental scientist committed to creating eco-friendly community initiatives.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80",
    social: {
      twitter: "#",
      linkedin: "#",
      email: "#"
    }
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Anjali Mehta",
    role: "Community Member",
    content: "The jamming sessions have become my weekend therapy. I've met the most amazing people and found a community that feels like home.",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100&q=80",
    rating: 5
  },
  {
    id: 2,
    name: "Mark Johnson",
    role: "Airbnb Guest",
    content: "Staying at their Airbnb was an experience beyond just accommodation. The community atmosphere, music, and connections made our trip unforgettable.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100&q=80",
    rating: 5
  },
  {
    id: 3,
    name: "Sunita Rao",
    role: "Parent",
    content: "The educational workshops they conduct have made such a difference for my daughter. She's more confident and excited about learning than ever before.",
    image: "https://images.unsplash.com/photo-1581403341630-a6e0b9d2d257?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100&q=80",
    rating: 5
  },
  {
    id: 4,
    name: "Vikram Singh",
    role: "Volunteer",
    content: "Volunteering with Forrest of Us has been transformative. The community's dedication to social causes and sustainability is truly inspiring.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100&q=80",
    rating: 5
  }
];

export const galleryImages = [
  {
    id: 1,
    src: forestImages.jamming1,
    alt: "Jamming Session",
    category: "music"
  },
  {
    id: 2,
    src: forestImages.education1,
    alt: "Educational Workshop",
    category: "education"
  },
  {
    id: 3,
    src: forestImages.community1,
    alt: "Community Activity",
    category: "community"
  },
  {
    id: 4,
    src: forestImages.forestNature1,
    alt: "Festival Celebration",
    category: "festival"
  },
  {
    id: 5,
    src: forestImages.forestNature2,
    alt: "Nature Scene",
    category: "nature"
  },
  {
    id: 6,
    src: forestImages.sustainability1,
    alt: "Tree Planting",
    category: "sustainability"
  },
  {
    id: 7,
    src: forestImages.education3,
    alt: "Children Learning",
    category: "education"
  },
  {
    id: 8,
    src: forestImages.cabin1,
    alt: "Airbnb Cabin",
    category: "airbnb"
  }
];

export const blogPosts = [
  {
    id: 1,
    title: "The Healing Power of Forest Therapy",
    excerpt: "Discover how spending time in nature can reduce stress and improve your overall well-being.",
    category: "Nature",
    date: "April 2, 2023",
    image: forestImages.forestNature3
  },
  {
    id: 2,
    title: "Building Bridges Through Community Service",
    excerpt: "How our recent volunteer initiative helped connect diverse groups within our community.",
    category: "Community",
    date: "March 25, 2023",
    image: forestImages.community2
  },
  {
    id: 3,
    title: "The Magic of Unplugged Jamming Sessions",
    excerpt: "Reflections on how music brings people together and creates lasting bonds in our community.",
    category: "Music",
    date: "March 18, 2023",
    image: forestImages.jamming2
  }
];

export const initiatives = [
  {
    id: 1,
    title: "Jamming Sessions",
    description: "Unplugged, soulful music gatherings where members bond over rhythms and melodies.",
    image: forestImages.jamming1
  },
  {
    id: 2,
    title: "Festival Celebrations",
    description: "Inclusive and joyous events celebrating culture, unity, and traditions.",
    image: forestImages.festival
  },
  {
    id: 3,
    title: "Educational Outreach",
    description: "Volunteering to teach underprivileged students, offering mentorship, and organizing learning workshops.",
    image: forestImages.education1
  },
  {
    id: 4,
    title: "Social Activities",
    description: "Clean-up drives, tree plantations, community kitchen events, and more – all aimed at uplifting society.",
    image: forestImages.community1
  }
];

export const upcomingEvents = [
  {
    id: 1,
    title: "Spring Jamming Festival",
    description: "Join us for a day of music, community, and positive vibes as we celebrate the arrival of spring.",
    date: "April 15, 2023",
    time: "2:00 PM - 8:00 PM",
    location: "Community Garden",
    isFeatured: true,
    image: forestImages.festival
  },
  {
    id: 2,
    title: "Tree Plantation Drive",
    description: "Help us make our community greener by planting trees.",
    date: "May 5, 2023",
    time: "9:00 AM - 12:00 PM",
    location: "City Park",
    isFeatured: false,
    image: forestImages.sustainability1
  },
  {
    id: 3,
    title: "Kids Art Workshop",
    description: "A creative workshop for children to explore their artistic talents.",
    date: "May 12, 2023",
    time: "3:00 PM - 5:00 PM",
    location: "Community Center",
    isFeatured: false,
    image: forestImages.education2
  }
];
