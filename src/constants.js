const userDetails = {
  name: 'Rahul Bansal',
  firstName: 'Rahul',
  lastName: 'Bansal',
  email: '42.rahulbansal@gmail.com',
  imgUrl: 'https://i.ibb.co/VVbGN5x/Pro-Photo.png',
  address: 'Gurugram, India',
  education: [
    {
      course: 'B.Tech',
      specialisation: 'CSE',
      college: 'Sushant University',
      cgpa: '7.3',
      courseStart: 2020,
      courseEnd: 2024,
      courseType: 'Full Time',
    },
  ],
  technicalSkills: [
    'Frontend',
    'Web Development',
    'Typescript',
    'Web Developer',
    'React.js',
    'Tailwind CSS',
    'HTML and CSS',
    'Javascript',
  ],
  internships: [
    {
      companyName: 'VDoIt',
      profile: 'React Native Intern',
      location: 'Gurugram',
      timeline: {
        startYear: 2024,
        endYear: 2024,
        startMonth: 'Mar',
        endMonth: 'June',
      },
      description:
        'Id eiusmod sit incididunt qui amet ea consequat elit nisi enim. Velit ullamco velit sint ut minim. Labore voluptate proident elit adipisicing nulla dolore voluptate aliqua cupidatat eu exercitation. Ea nulla esse Lorem qui deserunt aute. Dolore nulla commodo occaecat sit do ex id esse nostrud fugiat Lorem.',
      kra: [
        'Aliqua quis ex consectetur pariatur cupidatat officia.',
        'Aliqua quis ex consectetur pariatur cupidatat officia.',
      ],
      keySkills: ['skill1', 'skill2'],
    },
  ],
  experience: [
    {
      companyName: 'VDoit',
      profile: 'Developer',
      location: 'Gurugram',
      timeline: {
        startYear: 2024,
        endYear: 2024,
        startMonth: 'Mar',
        endMonth: 'June',
      },
      description:
        'Id eiusmod sit incididunt qui amet ea consequat elit nisi enim. Velit ullamco velit sint ut minim. Labore voluptate proident elit adipisicing nulla dolore voluptate aliqua cupidatat eu exercitation. Ea nulla esse Lorem qui deserunt aute. Dolore nulla commodo occaecat sit do ex id esse nostrud fugiat Lorem.',
      kra: [
        'Aliqua quis ex consectetur pariatur cupidatat officia.',
        'Aliqua quis ex consectetur pariatur cupidatat officia.',
      ],
      keySkills: ['skill1', 'skill2'],
    },
  ],
};

const listings = [
  {
    ListingID: 1,
    company_name: 'Acme Corporation',
    job_title: 'Software Engineer',
    location: 'San Francisco, CA',
    salary: '$120,000 - $150,000 per year',
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      '2+ years of experience in software development',
      'Proficiency in Java, Python, or C++',
    ],
  },
  {
    ListingID: 2,
    company_name: 'Tech Innovators',
    job_title: 'Data Scientist',
    location: 'New York, NY',
    salary: '$100,000 - $130,000 per year',
    requirements: [
      "Master's degree in Data Science, Statistics, or related field",
      'Strong analytical and problem-solving skills',
      'Experience with machine learning algorithms and tools',
    ],
  },
  {
    ListingID: 3,
    company_name: 'Global Enterprises',
    job_title: 'Marketing Manager',
    location: 'London, UK',
    salary: '£50,000 - £70,000 per year',
    requirements: [
      "Bachelor's degree in Marketing or related field",
      '5+ years of experience in marketing',
      'Excellent communication and leadership skills',
    ],
  },
  {
    ListingID: 4,
    company_name: 'InnovateTech',
    job_title: 'UX/UI Designer',
    location: 'Berlin, Germany',
    salary: '€60,000 - €80,000 per year',
    requirements: [
      "Bachelor's degree in Design or related field",
      'Proficiency in UX/UI design tools like Sketch, Figma, or Adobe XD',
      'Portfolio showcasing previous design projects',
    ],
  },
  {
    ListingID: 5,
    company_name: 'HealthCare Solutions',
    job_title: 'Medical Researcher',
    location: 'Tokyo, Japan',
    salary: '¥8,000,000 - ¥10,000,000 per year',
    requirements: [
      'PhD in Medicine, Biology, or related field',
      'Experience in medical research',
      'Ability to work independently and collaboratively',
    ],
  },
];

export {userDetails, listings};
