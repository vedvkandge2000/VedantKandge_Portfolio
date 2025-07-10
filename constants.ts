import { EducationItem, ExperienceItem, ProjectItem, SkillCategory } from './types';
import { Code2, Library, Database, Cloud, DraftingCompass } from 'lucide-react';

export const educationData: EducationItem[] = [
  {
    institution: 'Santa Clara University',
    degree: 'Master of Science in Computer Science and Engineering',
    gpa: 'GPA: 3.91/4.0',
    date: 'Expected: June 2026',
    specialization: 'Courses : Design Analysis and Algorithms, Pattern Recognition, Computer Architecture, Object Oriented Design and Analysis, Design Pattern, Data Visualization.'
  },
  {
    institution: 'College of Engineering Pune',
    degree: 'Bachelor of Technology in Computer Engineering',
    gpa: 'CGPA: 3.75/4.0',
    date: 'Graduated: 2022',
    specialization: 'Courses : Data Structures & Algorithms, Operating Systems, Computer Organization, Databases, Data Science, Natural Language Processing, Linear Algebra, Probability and Statistics for Computing, Theory of Computing'
  }
];

export const experienceData: ExperienceItem[] = [
  {
    role: 'Software Development Intern',
    company: 'Lam Research Corporation',
    date: 'Jun 2025 – Present',
    points: [
      'Developed architectural proposals to replace Kafka with a lightweight messaging solution, improving system performance and maintainability.',
      'Designed and implemented an end-to-end pipeline using Apache Airflow to orchestrate sequential task execution, including SSH operations and containerized workloads.',
      'Created comprehensive setup guides and Confluence documentation to drive cross-team adoption of the new solution.'
    ]
  },
  {
    role: 'Graduate Research Assistant',
    company: 'Human Computer Interaction Lab, SCU',
    date: 'Mar 2025 – Present',
    points: [
        'Developed a web-based tool with React.js, Node.js, and Express.js to help non-technical researchers scrape and analyze mobile app data from Google Play and the App Store.',
        'Leveraged AWS for scalable infrastructure and Git for version control, ensuring robust and maintainable deployment.',
        'Conducted literature reviews and collaborated with external researchers to design user-friendly features and streamline onboarding for thousands of users.'
    ]
  },
  {
    role: 'Senior Software Engineer',
    company: 'Persistent Systems',
    date: 'Jun 2022 – Jul 2024',
    points: [
      'Enhanced a low-code insurance platform by developing 5+ complex features with Java, Spring Boot, PostgreSQL, and microservices, improving performance and scalability.',
      'Led the creation of a Time Machine feature for seamless rollbacks and optimized workflows, achieving 88% faster queries and a 30% boost in platform stability.',
      'Implemented distributed locking with Redis, applied design patterns, maintained 90%+ test coverage, and automated CI/CD pipelines using Jenkins and Docker.'
    ]
  }
];

export const projectsData: ProjectItem[] = [
  {
    title: 'MilkMate – Delivery Management System',
    techStack: 'React Native, Java, Spring Boot, PostgreSQL',
    description: 'End-to-end platform for milk delivery automation in Tier 2/3 Indian cities. Implemented 18 design patterns including Observer, Mediator, and Strategy patterns for scalable architecture.',
    githubUrl: 'https://github.com/vedvkandge2000/Milkman'
  },
  {
    title: 'QueryLens – RAG Chat Application',
    techStack: 'Python, LlamaIndex, Pinecone, Streamlit',
    description: 'PDF query chatbot integrating local LLM models and embeddings. Built retrieval-augmented generation system for intelligent document analysis and question answering.',
    githubUrl: 'https://github.com/vedvkandge2000/QueryLens-RAG-Based-Chat-Application'
  },
  {
    title: 'Social Media Application',
    techStack: 'Node.js, Express.js, MongoDB, React.js, Bootstarp, Git',
    description: 'Created a full stack application that helps users create and share content with the MERN stack. \n This portal had different key features such as liking or disliking a post, sharing a post, updating a profile, connecting with other users, along with user authentication with JWT and password reset functionality using Gmail.',
    githubUrl: 'https://github.com/vedvkandge2000/Blog-Project'
  },
  {
    title: 'Loan status prediction',
    techStack: 'scikit-learn, Keras, Pandas, Numpy, Python',
    description: 'Developed and compared different machine learning models using scikit-learn and tensorflow to classify loans as ”Fully Paid” or ”Charged Off,” achieving a 92% accuracy through cross-validation and hyperparameter tuning. Utilized pandas, NumPy, matplotlib, and seaborn to visualize and preprocess data, handling missing values and encoding categorical variables.',
    githubUrl: 'https://github.com/vedvkandge2000/Loan_Status_Prediction/blob/main/Loan_Status_Prediction.ipynb'
  },
  {
    title: 'Image Captioning using Pytorch',
    techStack: 'PyTorch, Pandas, Numpy, Python',
    description: 'This project worked on the Flickr 8k dataset to generate captions for a given image using a model that generates sequences using an Encoder-Decoder architecture with ResNet101 as the pre-trained Encoder.',
    githubUrl: 'https://github.com/vedvkandge2000/Deep-Learning-Project/blob/master/Image_Captioning_using_pytorch.ipynb'
  },
  {
    title: 'XV6 Kernel Threads - Operating Systems ',
    techStack: 'C, Operating systems, Git',
    description: 'In this project, I have added kernel threads to xv6 by adding different system calls like Clone(), Join(), gettid() and by using different operating systems concepts. Also added different user-space functions thread_create,thread_join, thread kill. Also created test code file for automatic testing of all implemented features',
    githubUrl: 'https://github.com/vedvkandge2000/XV6_Kernel_threads'
  }
];

export const skillsData: SkillCategory[] = [
    { 
      title: 'Programming Languages', 
      skills: ['Primary: Python, Java, JavaScript, TypeScript', 'Systems: C++, Go, SQL'],
      icon: Code2 
    },
    { 
      title: 'Frameworks & Libraries', 
      skills: ['Backend: Node.js, Express.js, Spring Boot, Quarkus', 'Frontend: React.js, React Native', 'AI/ML: TensorFlow, LlamaIndex, Pinecone'],
      icon: Library 
    },
    { 
      title: 'Databases & Storage', 
      skills: ['PostgreSQL, MySQL, MongoDB, Redis'],
      icon: Database 
    },
    { 
      title: 'Cloud & DevOps', 
      skills: ['AWS, Docker, Kubernetes, Jenkins, Apache Airflow'],
      icon: Cloud
    },
    { 
      title: 'Architecture & Design', 
      skills: ['Design Patterns, Multi-threading, Microservices, Distributed Systems'],
      icon: DraftingCompass 
    },
];

export const socialLinks = {
    email: 'vedant.kandge30@gmail.com',
    linkedin: 'https://www.linkedin.com/in/vedant-kandge-917123174/',
    github: 'https://github.com/vedvkandge2000',
    leetcode: 'https://leetcode.com/u/vedvkandge2000/',
};