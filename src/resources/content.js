import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Thomas",
  lastName: "Patterson",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Product Executive",
  avatar: "/images/avatar.jpg",
  email: "thomasjpatterson@gmail.com",
  location: "America/New_York", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to my Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/thomasjpatterson",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/thomjpatterson/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}&apos;s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Architecting Tomorrow&apos;s Products Today</>,
  subline: (
    <>
      I&apos;m Thomas, from systems administrator to AI pioneer I build the platforms that protect what matters most
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
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
        As a passionate product leader with deep experience in cybersecurity, I am driven by my
        enthusiasm for technology and my desire to drive innovation and growth. With a strong
        understanding of the latest technologies and a track record of successful product launches
        and growth strategies, I am highly skilled in identifying new opportunities and developing
        effective solutions.
        <br />
        <br />
        In addition to my technical expertise, I have also served on advisory boards and as a
        mentor, sharing my knowledge and experience with others in the industry. I am constantly
        seeking out new challenges and am committed to continuing my growth and development as a
        product leader in the dynamic field of cybersecurity and technology.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "VikingCloud",
        timeframe: "2023 - Present",
        role: "Vice President, Product Management",
        achievements: [
          <>
            Responsible for the entire platform strategies for all products and services.
          </>,
          <>
            Doubled revenue by introducing an evolution of several product lines into a single platform
            empowering customers to manage their entire cybersecurity program from a single console.
          </>,
        ],
        images: [],
      },
      {
        company: "Confidential 3D Printing Company",
        timeframe: "2022 - Present",
        role: "Product Advisor & Mentor",
        achievements: [
          <>
            Provided expertise in product, marketing, and launch of two successful products.
          </>,
          <>
            Continuing to provide subject matter expertise for a yet to be announced new product.
          </>,
        ],
        images: [],
      },
      {
        company: "Vectra AI",
        timeframe: "2022 - 2023",
        role: "Principal Product Manager",
        achievements: [
          <>
            Productized interal tooling into a full fledged Managed Detection and Response service.
          </>,
        ],
        images: [],
      },
      {
        company: "Other Notable Companies",
        timeframe: "2011 - 2022",
        role: "Product Management",
        achievements: [
          <>
            SecurityScorecard, GoSecure, Trustwave, & ManTech
          </>,
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
        name: "Western Governors University",
        description: <>MBA with concentration in IT Management</>,
      },
      {
        name: "Winthrop University",
        description: <>Business Administration with concentration in Computer Information Systems.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Published Articles",
    skills: [
      {
        title: "RT Insights",
        description: <><a href="https://www.rtinsights.com/how-real-time-cyber-risk-intelligence-is-transforming-enterprise-security/">How Real-Time Cyber Risk Intelligence is Transforming Enterprise Security</a></>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Government Fleet",
        description: <><a href="https://www.government-fleet.com/10241456/third-party-risk-in-government-fleet-operations-whos-really-behind-your-data">Third-Party Risk in Government Fleet Operations: Who is Really Behind Your Data?</a></>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Technology Reseller News",
        description: <><a href="https://telecomreseller.com/2025/05/27/how-to-spot-and-fix-cyber-risks-in-your-telecom-supply-chain/">How to Spot and Fix Cyber Risks in Your Telecom Supply Chain</a></>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Industry Today",
        description: <><a href="https://industrytoday.com/building-cyber-resilience-in-manufacturing/">Building Cyber Resilience in Manufacturing</a></>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "The HR Director",
        description: <><a href="https://www.thehrdirector.com/predictive-analytics-can-enhance-talent-management-employee-retention/">Predictive Analytics Can Enhance Talent Management and Employee Retention</a></>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "VikingCloud Blog Articles",
        description: <>
        <a href="https://www.vikingcloud.com/blog/focus-where-it-matters-the-power-of-prioritization-for-risk-based-security/">Focus Where It Matters: The Power of Prioritization for Risk-Based Security</a>
        <br />
        <a href="https://www.vikingcloud.com/blog/from-chaos-to-clarity-taming-the-cyber-storm">From Chaos to Clarity: Taming the Cyber Storm</a>
        <br />
        <a href="https://www.vikingcloud.com/blog/the-human-element-in-risk-based-security-building-a-culture-of-cyber-resilience">The Human Element in Risk-Based Security: Building a Culture of Cyber Resilience</a>
        <br />
        <a href="https://www.vikingcloud.com/blog/risk-based-vs-compliance-based-security-why-one-size-doesnt-fit-all">Risk-Based vs. Compliance-Based Security: Why One Size Doesn’t Fit All</a>
        <br />
        <a href="https://www.vikingcloud.com/blog/product-team-spotlight-thomas-patterson">Product Team Spotlight: Thomas Patterson</a>
        </>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
