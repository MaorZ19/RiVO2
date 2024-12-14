import { Building, Globe, Target, Users, Briefcase, ChartBar } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Vision Section */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">Our Vision</h2>
          <p className="text-lg text-secondary">
            To empower businesses, professionals, and job seekers to thrive in the digital world by revolutionizing how meaningful professional connections are made and nurtured on LinkedIn.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-6 lg:px-8 bg-surface">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-6 text-center">Our Mission</h2>
          <div className="space-y-6 text-secondary">
            <p>
              At RiVO, our mission is to transform LinkedIn lead generation through innovative automation and precision targeting. We're committed to helping our clients build meaningful professional relationships that drive success.
            </p>
            <p>
              We achieve this by providing cutting-edge tools and strategies that simplify the complex process of lead generation, enabling professionals to focus on what matters most - building authentic connections and growing their business.
            </p>
            <p>
              Through our advanced technology and data-driven approach, we're dedicated to fostering career advancement and business growth while maintaining the human touch that makes professional networking truly valuable.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Our Solution</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8 text-accent" />,
                title: "Targeted Lead Generation",
                description: "Advanced filtering and A/B testing to reach your ideal prospects",
              },
              {
                icon: <Globe className="w-8 h-8 text-accent" />,
                title: "24/7 Accessibility",
                description: "Cloud-based platform accessible anytime, anywhere",
              },
              {
                icon: <ChartBar className="w-8 h-8 text-accent" />,
                title: "Advanced Analytics",
                description: "Comprehensive insights and performance metrics",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-border hover:border-accent transition-colors"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-primary">{feature.title}</h3>
                <p className="text-secondary">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About RiVO Section */}
      <section className="py-16 px-6 lg:px-8 bg-surface">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">About RiVO</h2>
          <p className="text-lg text-secondary mb-8">
            RiVO is a cutting-edge lead generation service that combines advanced technology with human insight to help businesses and professionals maximize their LinkedIn presence. We understand the challenges of modern professional networking and provide solutions that make it easier to connect, engage, and grow.
          </p>
          
          <h3 className="text-xl font-semibold mb-4 text-primary">Who We Serve</h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                icon: <Building className="w-6 h-6 text-accent" />,
                title: "Sales Teams",
                description: "Streamline lead generation and boost conversion rates",
              },
              {
                icon: <Briefcase className="w-6 h-6 text-accent" />,
                title: "Small Businesses",
                description: "Expand client base and market presence efficiently",
              },
              {
                icon: <Users className="w-6 h-6 text-accent" />,
                title: "Professionals",
                description: "Enhance networking and career opportunities",
              },
              {
                icon: <Target className="w-6 h-6 text-accent" />,
                title: "Job Seekers",
                description: "Connect with potential employers and recruiters",
              },
            ].map((audience, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="mt-1">{audience.icon}</div>
                <div>
                  <h4 className="font-semibold text-primary">{audience.title}</h4>
                  <p className="text-secondary">{audience.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;