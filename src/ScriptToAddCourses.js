import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebase.config.js";

const courses = [
    {
        id: 2,
        name: 'Advanced JavaScript for Web Development',
        instructor: 'Jane Smith',
        description: 'Dive deep into advanced JavaScript concepts for web development.',
        enrollmentStatus: 'Open',
        thumbnail: 'your.image.here',
        duration: '10 weeks',
        schedule: 'Mondays and Wednesdays, 7:00 PM - 9:00 PM',
        location: 'Online',
        prerequisites: ['Intermediate JavaScript knowledge', 'HTML and CSS basics'],
        syllabus: [
            {
                week: 1,
                topic: 'Closures and Prototypes',
                content: 'Understanding JavaScript closures and working with prototypes.'
            },
            {
                week: 2,
                topic: 'Asynchronous Programming',
                content: 'Exploring asynchronous programming with Promises and async/await.'
            },
        ],
    },
    {
        id: 3,
        name: 'Data Science Fundamentals',
        instructor: 'Alice Johnson',
        description: 'Explore the fundamentals of data science and statistical analysis.',
        enrollmentStatus: 'Closed',
        thumbnail: 'your.image.here',
        duration: '12 weeks',
        schedule: 'Fridays, 6:30 PM - 8:30 PM',
        location: 'Onsite',
        prerequisites: ['Basic knowledge of programming', 'Statistics basics'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to Data Science',
                content: 'Overview of data science, its applications, and tools.'
            },
            {
                week: 2,
                topic: 'Statistical Analysis with Python',
                content: 'Using Python for statistical analysis and visualization.'
            },

        ],
    },
    {
        id: 4,
        name: 'Machine Learning Essentials',
        instructor: 'Robert Anderson',
        description: 'Learn the essentials of machine learning and its practical applications.',
        enrollmentStatus: 'In Progress',
        thumbnail: 'your.image.here',
        duration: '10 weeks',
        schedule: 'Wednesdays, 5:00 PM - 7:00 PM',
        location: 'Online',
        prerequisites: ['Understanding of linear algebra', 'Programming experience in Python'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to Machine Learning',
                content: 'Overview of machine learning concepts and types.'
            },
            {
                week: 2,
                topic: 'Supervised Learning Algorithms',
                content: 'Exploring supervised learning algorithms like regression and classification.'
            },

        ],
    },
    {
        id: 5,
        name: 'Full Stack Web Development',
        instructor: 'Michael Brown',
        description: 'Become a full-stack web developer with hands-on projects and real-world applications.',
        enrollmentStatus: 'Open',
        thumbnail: 'your.image.here',
        duration: '16 weeks',
        schedule: 'Mondays and Thursdays, 6:30 PM - 8:30 PM',
        location: 'Onsite',
        prerequisites: ['HTML, CSS, and JavaScript proficiency', 'Basic understanding of databases'],
        syllabus: [
            {
                week: 1,
                topic: 'Frontend Development Basics',
                content: 'Building responsive and interactive user interfaces.'
            },
            {
                week: 2,
                topic: 'Backend Development with Node.js',
                content: 'Creating server-side applications using Node.js.'
            },

        ],
    },
    {
        id: 6,
        name: 'Cybersecurity Fundamentals',
        instructor: 'Emily White',
        description: 'Gain foundational knowledge in cybersecurity and protect against online threats.',
        enrollmentStatus: 'Open',
        thumbnail: 'your.image.here',
        duration: '14 weeks',
        schedule: 'Tuesdays and Fridays, 7:00 PM - 9:00 PM',
        location: 'Online',
        prerequisites: ['Basic understanding of networking', 'Familiarity with computer systems'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to Cybersecurity',
                content: 'Understanding the importance of cybersecurity and common threats.'
            },
            {
                week: 2,
                topic: 'Network Security',
                content: 'Securing computer networks and preventing unauthorized access.'
            },

        ],
    },
    {
        id: 7,
        name: 'Mobile App Design',
        instructor: 'David Miller',
        description: 'Learn the principles of mobile app design and create visually appealing interfaces.',
        enrollmentStatus: 'Open',
        thumbnail: 'your.image.here',
        duration: '10 weeks',
        schedule: 'Thursdays, 5:30 PM - 7:30 PM',
        location: 'Onsite',
        prerequisites: ['Basic knowledge of graphic design', 'Familiarity with user experience (UX) design'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to Mobile App Design',
                content: 'Understanding the fundamentals of designing for mobile platforms.'
            },
            {
                week: 2,
                topic: 'User Interface (UI) Design Principles',
                content: 'Creating intuitive and user-friendly interfaces for mobile apps.'
            },

        ],
    },
    {
        id: 8,
        name: 'Blockchain Technology',
        instructor: 'Sophie Turner',
        description: 'Explore the principles of blockchain technology and its applications in various industries.',
        enrollmentStatus: 'Open',
        thumbnail: 'your.image.here',
        duration: '12 weeks',
        schedule: 'Wednesdays, 6:00 PM - 8:00 PM',
        location: 'Online',
        prerequisites: ['Basic understanding of cryptography', 'Programming experience is a plus'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to Blockchain',
                content: 'Overview of blockchain technology and its key components.'
            },
            {
                week: 2,
                topic: 'Smart Contracts',
                content: 'Creating and deploying smart contracts on blockchain platforms.'
            },

        ],
    },
    {
        id: 9,
        name: 'Artificial Intelligence in Healthcare',
        instructor: 'Alexandra Garcia',
        description: 'Discover how artificial intelligence is transforming the healthcare industry.',
        enrollmentStatus: 'Open',
        thumbnail: 'your.image.here',
        duration: '14 weeks',
        schedule: 'Mondays and Thursdays, 7:30 PM - 9:30 PM',
        location: 'Onsite',
        prerequisites: ['Basic understanding of healthcare systems', 'Interest in artificial intelligence'],
        syllabus: [
            {
                week: 1,
                topic: 'Overview of AI in Healthcare',
                content: 'Understanding the impact of AI on healthcare and patient outcomes.'
            },
            {
                week: 2,
                topic: 'Medical Imaging and Diagnosis',
                content: 'Applying AI techniques to medical imaging for diagnosis.'
            },

        ],
    },
    {
        id: 10,
        name: 'DevOps for Continuous Delivery',
        instructor: 'Daniel Brown',
        description: 'Learn the principles of DevOps and implement continuous delivery pipelines.',
        enrollmentStatus: 'In Progress',
        thumbnail: 'your.image.here',
        duration: '10 weeks',
        schedule: 'Fridays, 6:30 PM - 8:30 PM',
        location: 'Online',
        prerequisites: ['Basic knowledge of software development', 'Understanding of version control systems'],
        syllabus: [
            {
                week: 1,
                topic: 'Introduction to DevOps',
                content: 'Understanding the cultural and technical aspects of DevOps.'
            },
            {
                week: 2,
                topic: 'Continuous Integration and Deployment',
                content: 'Implementing CI/CD pipelines for efficient software delivery.'
            },

        ],
    },
];

const addCoursesToFirebase = async () => {
    const coursesCollection = collection(db, "courses")
    courses.forEach(async (course) => {
        await addDoc(coursesCollection, course)
    })
}

addCoursesToFirebase()