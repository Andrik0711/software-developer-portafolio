import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Andrik",
  lastName: "Rodriguez",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer",
  location: "America/Monterrey", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Spanish"], // optional: Leave the array empty if you don't want to display languages
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Andrik0711",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/jos%C3%A9-andrik-mart%C3%ADnez-rodr%C3%ADguez-756a08228/",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:mtzrdz19.jandrik71@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Software Developer</>,
  subline: (
    <>
      I'm Andrik Rodríguez <InlineCode>Software Developer</InlineCode>, with expertise in web and mobile development.
      I thrive on creating scalable solutions using frameworks like Django and Laravel, and collaborating with teams to
      deliver impactful results. Passionate about innovative projects, I aim to turn challenges into opportunities.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: false,
    subItems: false,
  },
  avatar: {
    display: false,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Andrik is a Software Developer with a solid foundation in full-stack development and a passion for crafting innovative web and mobile solutions.
        I specialize in using technologies like Django, Flask, Laravel, Python, PHP and PostgreSQL to deliver scalable and efficient applications.
        With hands-on experience from professional roles and academic projects, I thrive on solving complex challenges and
        collaborating with teams to create impactful results.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "High Technologies Analytics (HTA)",
        timeframe: "August 2024 - Present",
        role: "Junior Software Developer",
        achievements: [
          "Actively contribute to the development of complex web applications as part of a multidisciplinary team, focused on improving system scalability, performance, and robustness.",
          "Participate in version control tasks, including system version updates, branch creation, change management, and commit reversion, ensuring an efficient workflow.",
          "Designed and implemented innovative modules using a diverse tech stack including Django, Flask, Python, Bootstrap, PostgreSQL, JavaScript, CSS, HTML, jQuery and APIs, achieving functional and sustainable solutions.",
          "Collaborate directly with the development team and the manager to identify and apply innovative solutions that enhance system functionality and product quality.",
          "Attend meetings with clients alongside the team to clarify requirements, provide technical explanations, and propose functional improvements, strengthening the client-developer relationship."
        ],
        images: [],
      },
      {
        company: "College of Bachelors of the State of Tamaulipas (COBAT)",
        timeframe: "January 2024 - April 2024",
        role: "Junior FullStack Developer",
        achievements: [
          "Developed modules for the institutional website, optimizing internal processes and improving user experience.",
          "Implemented and maintained the academic module using technologies such as CakePHP, Bootstrap, JavaScript, PHP, MySQL, HTML, CSS, and jQuery.",
          "Integrated external services to expand system functionality.",
          "Reduced site load times by 30% and improved security by implementing middleware.",
          "Performed database updates and continuous improvements to the user interface and experience."
        ],
        images: [],
      },
      {
        company: "Polytechnic University of Victoria",
        timeframe: "January 2023 - April 2023",
        role: "FullStack Developer Intern",
        achievements: [
            "Designed and developed two systems: a Point of Sale and an Inventory System, focused on optimizing operational and administrative management.",
            "Designed system layouts using advanced tools such as Figma and Adobe XD, ensuring an intuitive and professional interface.",
            "Built an optimized database, focused on scalability and high performance to support future growth.",
            "Developed systems using Laravel 10, MySQL, Tailwind CSS, CSS, HTML, JavaScript, and PHP, achieving functional and efficient applications.",
            "Worked directly with the client to fully understand requirements and translate them into effective technical solutions."
        ],
        images: [],
      },
      {
        company: "Polytechnic University of Victoria",
        timeframe: "November 2023",
        role: "Mobile App Project Participant",
        achievements: [
          "Actively participated in the design and development of a mobile application capable of identifying five types of food, focused on providing accurate and reliable results.",
          "Implemented technical solutions using Python, Android Studio, and Kotlin, achieving over 90% detection accuracy.",
          "Gained experience solving problems under pressure and tight deadlines, collaborating effectively with the team in challenging environments."
        ],
        images: [],
      },
      {
        company: "Polytechnic University of Victoria",
        timeframe: "March 2023",
        role: "Web Development Hackathon Participant",
        achievements: [
          "Collaborated in a team to design and develop a functional web application in less than 48 hours.",
          "Implemented technical solutions using Django and PostgreSQL, optimizing the prototype's speed and functionality.",
          "Gained hands-on experience in problem-solving under pressure and collaborative work in competitive environments."
        ],
        images: [],
      },
      {
        company: "Polytechnic University of Victoria",
        timeframe: "September 2022 – December 2022",
        role: "Academic Platform Project Leader",
        achievements: [
          "Coordinated a team of five developers to build an academic platform from scratch.",
          "Designed the project structure and defined main modules using Laravel and MySQL.",
          "Facilitated weekly meetings to review progress and resolve technical issues."
        ],
        images: [],
      },
      {
        company: "Polytechnic University of Victoria",
        timeframe: "September 2021 - December 2021",
        role: "FullStack Developer Intern",
        achievements: [
          "Developed complementary modules for an in-development tool, optimizing internal processes and improving code scalability and quality.",
          "Implemented new features and performed bug fixes using technologies such as Python and MySQL.",
          "Integrated automated services to increase system efficiency.",
          "Improved code performance and readability through optimization and refactoring practices.",
          "Interpreted and understood requirements and system functionality."
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Polytechnic University of Victoria",
        description: <>Bachelor's Degree in Information Technology Engineering (2020 - 2024).</>,
      },
      {
        name: "Industrial and Services Technological Baccalaureate Center NO. 119",
        description: <>Programming Technician (2017 - 2020).</>,
      },
      {
        name: "Google UX Design (Coursera)",
        description: <>Completed an intensive UX Design program (2023 - 2024).</>,
      },
      {
        name: "CISCO Net Acad",
        description: <>Completed an Intensive Networking Course (2023 - 2024).</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical Skills",
    skills: [
      {
        title: "Git",
        description: <>Version control and collaboration.</>,
      },
      {
        title: "Django",
        description: <>Expertise in web application development.</>,
      },
      {
        title: "Laravel",
        description: <>Experience in building scalable platforms.</>,
      },
      {
        title: "MySQL & PostgreSQL",
        description: <>Proficient in database management and optimization.</>,
      },
    ],
  },
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, home, about, work , blog, gallery };
