import { Hero } from '@/components/sections/Hero';
import { Testimonial } from '@/components/sections/Testimonial';

export default function HomePage() {
  return (
    <main>
      <Hero 
        title="Welcome to Next.js Boilerplate"
        subtitle="A comprehensive starter template for your Next.js projects"
        ctaText="Get Started"
        ctaLink="/register"
      />
      <Testimonial 
        testimonials={[
          {
            id: 1,
            name: "John Doe",
            role: "Full Stack Developer",
            content: "This boilerplate saved me weeks of development time!",
            avatar: "/images/avatar1.jpg"
          },
          {
            id: 2,
            name: "Jane Smith",
            role: "Product Manager",
            content: "The role-based access control is exactly what we needed.",
            avatar: "/images/avatar2.jpg"
          }
        ]}
      />
    </main>
  );
}