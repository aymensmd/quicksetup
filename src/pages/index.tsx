import Container from "@/components/Container";
import { useEffect, useRef, Suspense, useState } from "react";
import styles from "@/styles/Home.module.css";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  Code2,
  Frame,
  SearchCheck,
  Eye,
  MonitorSmartphone,
  Globe,
  Layers,
} from "lucide-react";
import { TriangleDownIcon } from "@radix-ui/react-icons";
import Spline from "@splinetool/react-spline";
import Link from "next/link";
import { cn, scrollTo } from "@/lib/utils";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import VanillaTilt from "vanilla-tilt";
import { motion } from "framer-motion";

/** * ACTION: Replace these with your actual resume data 
 */
const aboutStats = [
  { label: "Years of Experience", value: "4+" },
  { label: "Projects Completed", value: "25+" },
  { label: "Happy Clients", value: "10+" },
];

const projects = [
  {
    title: "Project Name One",
    description: "Built a high-performance SaaS dashboard using Next.js 14 and tRPC.",
    image: "/assets/project1.webm", // Ensure these paths exist or use .jpg
    href: "https://yourlink.com",
  },
  {
    title: "Project Name Two",
    description: "Architected a custom e-commerce solution with Stripe integration.",
    image: "/assets/project2.webm",
    href: "https://yourlink.com",
  },
  // Add more from your resume here
];

const services = [
  {
    service: "Full-Stack Development",
    description: "End-to-end web applications built with React, Node.js, and PostgreSQL.",
    icon: Code2,
  },
  {
    service: "Mobile First Design",
    description: "Ensuring flawless performance across all screen sizes and modern browsers.",
    icon: MonitorSmartphone,
  },
  {
    service: "API Architecture",
    description: "Designing scalable RESTful and GraphQL APIs for seamless data flow.",
    icon: Layers,
  },
  {
    service: "Cloud Infrastructure",
    description: "Deployment and management using AWS, Vercel, and Docker containers.",
    icon: Globe,
  },
];

export default function Home() {
  const refScrollContainer = useRef(null);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState<number>(0);
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    async function getLocomotive() {
      const Locomotive = (await import("locomotive-scroll")).default;
      new Locomotive({
        el: refScrollContainer.current ?? new HTMLElement(),
        smooth: true,
      });
    }

    function handleScroll() {
      let currentSection = "";
      setIsScrolled(window.scrollY > 0);

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 250) {
          currentSection = section.getAttribute("id") ?? "";
        }
      });

      navLinks.forEach((li) => {
        li.classList.remove("nav-active");
        if (li.getAttribute("href") === `#${currentSection}`) {
          li.classList.add("nav-active");
        }
      });
    }

    void getLocomotive();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!carouselApi) return;
    setCount(carouselApi.scrollSnapList().length);
    setCurrent(carouselApi.selectedScrollSnap() + 1);
    carouselApi.on("select", () => {
      setCurrent(carouselApi.selectedScrollSnap() + 1);
    });
  }, [carouselApi]);

  useEffect(() => {
    const tilt: HTMLElement[] = Array.from(document.querySelectorAll("#tilt"));
    VanillaTilt.init(tilt, {
      speed: 300,
      glare: true,
      "max-glare": 0.1,
      gyroscope: true,
      perspective: 900,
      scale: 0.95,
    });
  }, []);

  return (
    <Container>
      <div ref={refScrollContainer}>
        <Gradient />

        {/* Intro */}
        <section
          id="home"
          data-scroll-section
          className="mt-40 flex w-full flex-col items-center xl:mt-0 xl:min-h-screen xl:flex-row xl:justify-between"
        >
          <div className={styles.intro}>
            <div
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed=".09"
              className="flex flex-row items-center space-x-1.5"
            >
              <span className={styles.pill}>React</span>
              <span className={styles.pill}>TypeScript</span>
              <span className={styles.pill}>Node.js</span>
              <span className={styles.pill}>PostgreSQL</span>
            </div>
            <div>
              <h1
                data-scroll
                data-scroll-enable-touch-speed
                data-scroll-speed=".06"
                data-scroll-direction="horizontal"
              >
                <span className="text-6xl tracking-tighter text-foreground 2xl:text-8xl">
                  Hello, I&apos;m
                  <br />
                </span>
                <span className="clash-grotesk text-gradient text-6xl 2xl:text-8xl">
                  Your Name.
                </span>
              </h1>
              <p
                data-scroll
                data-scroll-enable-touch-speed
                data-scroll-speed=".06"
                className="mt-1 max-w-lg tracking-tight text-muted-foreground 2xl:text-xl"
              >
                I am a Full-Stack Developer specializing in building scalable, 
                high-performance web applications with modern design systems.
              </p>
            </div>
            <span
              data-scroll
              data-scroll-enable-touch-speed
              data-scroll-speed=".06"
              className="flex flex-row items-center space-x-1.5 pt-6"
            >
              <Link href="mailto:your-email@example.com" passHref>
                <Button>
                  Let&apos;s Talk <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
              <Button
                variant="outline"
                onClick={() => scrollTo(document.querySelector("#about"))}
              >
                View My Work
              </Button>
            </span>

            <div className={cn(styles.scroll, isScrolled && styles["scroll--hidden"])}>
              Scroll to discover <TriangleDownIcon className="mt-1 animate-bounce" />
            </div>
          </div>
          <div
            data-scroll
            data-scroll-speed="-.01"
            id={styles["canvas-container"]}
            className="mt-14 h-full w-full xl:mt-0"
          >
            <Suspense fallback={<span>Loading...</span>}>
              <Spline scene="/assets/scene.splinecode" />
            </Suspense>
          </div>
        </section>

        {/* About */}
        <section id="about" data-scroll-section>
          <div
            data-scroll
            data-scroll-speed=".4"
            data-scroll-position="top"
            className="my-14 flex max-w-6xl flex-col justify-start space-y-10"
          >
            <h2 className="py-16 pb-2 text-3xl font-light leading-normal tracking-tighter text-foreground xl:text-[40px]">
              With a foundation in software engineering and a keen eye for UX, I bridge the gap between 
              <span className="underline italic ml-2">complex logic and elegant design.</span> 
              I focus on creating maintainable codebases and engaging user experiences 
              that help businesses thrive in the digital age.
            </h2>
            <div className="grid grid-cols-2 gap-8 xl:grid-cols-3">
              {aboutStats.map((stat) => (
                <div key={stat.label} className="flex flex-col items-center text-center xl:items-start xl:text-start">
                  <span className="clash-grotesk text-gradient text-4xl font-semibold tracking-tight xl:text-6xl">
                    {stat.value}
                  </span>
                  <span className="tracking-tight text-muted-foreground xl:text-lg">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" data-scroll-section>
          <div data-scroll data-scroll-speed=".4" className="my-64">
            <span className="text-gradient clash-grotesk text-sm font-semibold tracking-tighter">
              ✨ Selected Works
            </span>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight xl:text-6xl">
              Proven results for modern brands.
            </h2>
            
            <div className="mt-14">
              <Carousel setApi={setCarouselApi} className="w-full">
                <CarouselContent>
                  {projects.map((project) => (
                    <CarouselItem key={project.title} className="md:basis-1/2">
                      <Card id="tilt" className="overflow-hidden border-white/10">
                        <CardHeader className="p-0">
                          <Link href={project.href} target="_blank">
                            {project.image.endsWith(".webm") ? (
                              <video src={project.image} autoPlay loop muted className="aspect-video w-full object-cover" />
                            ) : (
                              <Image src={project.image} alt={project.title} width={600} height={300} className="aspect-video w-full object-cover" />
                            )}
                          </Link>
                        </CardHeader>
                        <CardContent className="p-6 bg-background/80 backdrop-blur-sm">
                          <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                          <p className="text-sm text-muted-foreground">{project.description}</p>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="hidden md:block">
                  <CarouselPrevious />
                  <CarouselNext />
                </div>
              </Carousel>
              <div className="py-4 text-center text-sm text-muted-foreground">
                <span className="font-semibold">{current} / {count}</span> projects
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" data-scroll-section>
          <div data-scroll data-scroll-speed=".4" className="my-24 flex flex-col justify-start space-y-10">
            <motion.div 
              initial={{ opacity: 0 }} 
              whileInView={{ opacity: 1 }} 
              viewport={{ once: true }}
              className="grid items-center gap-4 md:grid-cols-2 xl:grid-cols-4"
            >
              <div className="flex flex-col py-6">
                <h2 className="text-4xl font-medium tracking-tight">Expertise.</h2>
                <p className="mt-2 text-muted-foreground">Core technical competencies and professional services.</p>
              </div>
              {services.map((service) => (
                <div key={service.service} className="flex flex-col items-start rounded-md bg-white/5 p-8 border border-white/5 transition hover:bg-white/10">
                  <service.icon className="mb-4 text-primary" size={24} />
                  <span className="text-lg font-medium">{service.service}</span>
                  <span className="mt-2 text-sm text-muted-foreground leading-relaxed">{service.description}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" data-scroll-section className="my-64">
          <div className="flex flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border border-white/5 px-8 py-20 text-center">
            <h2 className="text-4xl font-medium tracking-tighter xl:text-6xl">
              Ready to start a <span className="text-gradient clash-grotesk">new project?</span>
            </h2>
            <p className="mt-4 max-w-md text-muted-foreground">
              I am currently accepting new freelance opportunities and full-time roles.
            </p>
            <Link href="mailto:your-email@example.com" passHref>
              <Button size="lg" className="mt-8 px-10">Hire Me</Button>
            </Link>
          </div>
        </section>
      </div>
    </Container>
  );
}

// ... Gradient function remains the same as your original code
