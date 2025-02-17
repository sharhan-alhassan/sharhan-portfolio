/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Sharhan",
  title: "Hi, I'm Sharhan",
  subTitle: emoji(
    "A passionate Software Engineer 🚀 with focus on backend development, DevOps & SRE. I have experience in building microservices with Python / Go / Typescript / FastAPI / Django RF / Gin automating with CICD and Kubernetes"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/sharhan-alhassan",
  linkedin: "https://www.linkedin.com/in/sharhan-alhassan1/",
  gmail: "sharhanalhassan@gmail.com",
  gitlab: "https://gitlab.com/sharhan-alhassan",
  facebook: "https://www.facebook.com/sharhanalhassan",
  medium: "https://medium.com/@sharhanalhassan",
  stackoverflow: "https://stackoverflow.com/users/16069603/sam-hassan",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "PASSIONATE DEVOPS PRACTIONER WITH LOVE FOR BACKEND ENGINEERING",
  skills: [
    emoji(
      "⚡ Build resilient and scalable microservices with FastAPI, Django RF, Express & Typescript"
    ),
    emoji("⚡ Automate as much as I can with CICD pipelines"),
    emoji(
      "⚡ Orchestrate microserives deployment with Docker / Kubernetes / Rancher / Openshift"
    ),
    emoji(
      "⚡ Build and deploy Infrastructure with Terraform / Pulumi to AWS / Azure / GCP with cost-effective services"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "azure",
      fontAwesomeClassname: "fab fa-cloud"
    },
    {
      skillName: "golang",
      fontAwesomeClassname: "fab fa-golang"
    },
    {
      skillName: "kubernetes",
      fontAwesomeClassname: "fab fa-kubernetes"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Ghana",
      logo: require("./assets/images/ug.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2022 - January 2024",
      desc: "Excelled in the below cources with 2 publications under review.",
      descBullets: [
        "Data Structures and Algorithms",
        "Distributed Systems",
        "Advanced Database Systems",
        "Intelligent Systems",
        "Graduate Research Assistant - Data Intelligence and Swarm Analytics Laboratory",
        "Paper under review - A hybrid Merkle tree cluster algorithm for improved performance and energy optimization in blockchain systems",
        "Paper under review - LIoTBChain: A Novel Lightweight IoT Blockchain Framework for Secure Data and Optimized Throughput"
      ]
    },
    {
      schoolName: "Ashesi University",
      logo: require("./assets/images/ashesi.png"),
      subHeader: "Bachelor of Science in Electrical & Electronics Engineering",
      duration: "September 2016 - June 2020",
      desc: "Notable Achievements",
      descBullets: [
        "The Mastercard Foundation Scholar",
        "Dean List (Awarded to studentss with a minimum GPA of 3.50) - Spring 2020",
        "Member of Parliament MP for c2020",
        "Winner of Local Wikipedia Essay Contest",
        "The Resolution Project Finalist"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "DevOps & SRE (Kubernetes, CICD, Terraform, ELK)", //Insert stack or technology you have experience in
      progressPercentage: "98%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend development (FastAPI, Django RF, Gin, Express)",
      progressPercentage: "96%"
    },
    {
      Stack: "Programming (Python, Golang, Typescript)",
      progressPercentage: "94%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Tech Lead (Dev and SRE)",
      company: "Tiaspaces, Accra - Ghana",
      companylogo: require("./assets/images/tiaspaces.png"),
      date: "September 2023 – Present",
      desc: "Led a cross-functional team of frontend, backend and devops engineers.",
      descBullets: [
        "Cut down infra cost by 40%",
        "Handled PCI-compliant third-party payments integration",
        "Reduced SRT by 50% with asynchronous processing"
      ]
    },
    {
      role: "Snr. DevOps Engineer",
      company: "Daba, FL - USA (Remote)",
      companylogo: require("./assets/images/dabalogo.png"),
      date: "July 2021 – August 2023",
      desc: "Architected and deploy Kubernetes clusters. Automated the build and release processes",
      descBullets: [
        "Augmented EKS clusters with Karpenter to cut down costs by 50%",
        "Automated deployment of microservices with ArgoCD"
      ]
    },
    {
      role: "DevOPs Engineer",
      company: "CloudF, Essex - UK (Remote)",
      companylogo: require("./assets/images/cloudfruition.png"),
      date: "August 2020 – July 2021",
      desc: "Worked on paired-client environment to achieve the following.",
      descBullets: [
        "Configured ansible- playbook to provision a Ceph cluster of osds, monitors, managers, and a Grafana server to monitor real-time server metrics of clusters with over 99% up-time"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "AWS Certified Solutions Architect - Professional",
      subtitle: " ",
      image: require("./assets/images/awsSAPro.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "http://aws.amazon.com/verification"
        },
        {
          name: "Code - LKXD14XL3NQQQVWK",
          url: ""
        }
      ]
    },
    {
      title: "AWS Certified Solutions Architect - Associate",
      subtitle: " ",
      image: require("./assets/images/awsSAA.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certification",
          url: "http://aws.amazon.com/verification"
        },
        {
          name: "Code - 08S0CCWJ2FQ11D9P",
          url: ""
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+233 542 747 110",
  email_address: "sharhanalhassan@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "Sharhan_08", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
