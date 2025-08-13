import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Sameer",
  lastName: "F.",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Product Designer",
  avatar: "/images/avatar.jpg",
  email: "imrtls00@gmail.com",
  location: "Asia/Karachi", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Urdu"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity, technology and psychology.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://instagram.com/imrtls00",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/imrtls00",
  },
  {
    name: "X",
    icon: "x",
    link: "",
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
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>👋🏼 Sameer Faisal</>,
  featured: {
    display: true,
    title: (
      <>
        Currently at ― <strong className="ml-4">Blink</strong>
      </>
    ),
    href: "https://blink.global/vip",
  },
  subline: (
    <>
      A {person.role} with half a decade of experience, building digital products that delight users
      and drive business results.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About ― ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  gallery: {
    display: true,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: `mailto:${person.email}`,
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Sameer has been breathing life into interfaces since 2020. His attention to detail is just
        awesome. He has a depth of knowledge with passion to solve problems creatively and always
        eager to look for a uniquely, optimized solution.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Blink Global",
        timeframe: "2023 - Present",
        role: `${person.role}`,
        achievements: [
          <>
            SXSW London
            <ul>
              <li>
                Successfully supported the launch of Blink at SXSW London, powering over $2.1
                million in pass sales.
              </li>
              <li>
                Introduced an entirely new product, Blink Shop, optimizing and reiterating along the
                way.
              </li>
            </ul>
          </>,
          <>
            Sportico World Summit (Doha)
            <ul>
              <li>Delivered our technology for a high-profile VVIP summit with 130+ attendees.</li>
              <li>Achieved a 90% app download rate.</li>
              <li>
                Notable attendees included Ryan Reynolds, Barack Obama, Magic Johnson, and more.
              </li>
            </ul>
          </>,
          <>
            Blink at the World Cup (Qatar)
            <ul>
              <li>Launched Blink at the World Cup, achieving a 90% app download rate.</li>
              <li>Facilitated over $1 million in ticket sales.</li>
            </ul>
          </>,
          <>
            Qatar Grand Prix Formula 1
            <ul>
              <li>
                Immediately following the Sportico Summit, supported VIPs at the F1 event in Qatar.
              </li>
              <li>Actor Anthony Anderson was among the VIPs who used the Blink app.</li>
            </ul>
          </>,
          <>
            Super Bowl LIX
            <ul>
              <li>Kicked off 2025 by supporting VIPs at the Super Bowl.</li>
              <li>Attendees included Serena Williams, Ludacris, and Stormzy.</li>
              <li>
                We had the pleasure of hosting 18 kids from a local charitable organization, giving
                them an unforgettable Super Bowl experience of a lifetime.
              </li>
            </ul>
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
        ],
      },
      {
        company: "Falcon Consulting",
        timeframe: "2021 - 2023",
        role: "Sr. UI/UX Designer",
        achievements: [
          <>
            Developed a design system that unified the brand across multiple platforms, improving
            design consistency by 40%.
          </>,
          <>
            Led a cross-functional team to launch a new product line, contributing to a 15% increase
            in overall company revenue.
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
        name: "COMSATS University Islamabad",
        description: <>Studied software engineering. Specializing in Human Computer Interaction.</>,
      },
      {
        name: "Google Career Certification",
        description: <>Completed Google UX Design Professional Certificate.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "My Toolkit",
    skills: [
      {
        title: "Figma",
        description: (
          <>
            From designing pixel perfect designs to advanced prototyping, to designing icons and
            illustrations, Figma is my go-to tool
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Notion",
        description: (
          <>
            My go-to tool for organizing projects, documenting processes, and collaborating with
            teams efficiently.
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Framer",
        description: <>Bringing designs to life</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Webflow",
        description: (
          <>
            Empowers me to turn designs into fully functional, responsive websites without writing
            code.
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Spline 3D",
        description: <>Bringing 3D designs and interactions to web experiences.</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design, tech and humans...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects ― ${person.name}`,
  description: `Design projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery ― ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/about/imrtls00-speak-big.png",
      alt: "Sameer Faisal speaking at SMIU Karachi",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/about/imrtls00-speak-notion.png",
      alt: "Sameer Faisal speaking about Notion",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/about/cbtl-meetup.png",
      alt: "Notion Workshop at CBTL",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/about/imrtls00-speak-tech.png",
      alt: "Sameer Faisal speaking at Tech Conference",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/about/notion-com.png",
      alt: "Notion COMSATS - Community",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/about/notion-ninjas.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/about/devfest22-community.png",
      alt: "Sameer attending GDG Lahore DevFest22",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/about/imrtls00-speak-pro.png",
      alt: "Sameer Faisal speaking about Prototyping",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/about/attendee-tech.png",
      alt: "Sameer Faisal attending Tech Conference",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/about/app-devfest.png",
      alt: "Sameer receiving sovenier from GDG Cloud Lahore",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
