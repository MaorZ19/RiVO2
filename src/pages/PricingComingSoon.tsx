import { Clock, Gift, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const PricingComingSoon = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 md:p-8">
      <div className="max-w-4xl w-full text-center space-y-8">
        {/* Header Section */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-primary">
            Pricing & Features
            <span className="block text-accent">Coming Soon</span>
          </h1>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            We're working hard to bring you the best pricing plans and exciting features. Stay tuned!
          </p>
        </div>

        {/* Features Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
          <div className="p-6 rounded-2xl bg-background border border-border hover:border-accent transition-colors">
            <Clock className="w-12 h-12 text-accent mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Launch Date</h3>
            <p className="text-secondary">Coming Q2 2024</p>
          </div>
          <div className="p-6 rounded-2xl bg-background border border-border hover:border-accent transition-colors">
            <Gift className="w-12 h-12 text-accent mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Early Bird Offers</h3>
            <p className="text-secondary">Special pricing for early adopters</p>
          </div>
          <div className="p-6 rounded-2xl bg-background border border-border hover:border-accent transition-colors">
            <CalendarDays className="w-12 h-12 text-accent mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Feature Updates</h3>
            <p className="text-secondary">Regular new feature releases</p>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="max-w-xl mx-auto p-8 rounded-2xl glass">
          <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
          <p className="text-secondary mb-6">
            Be the first to know when we launch our pricing plans and new features.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => navigate("/")}
              className="bg-accent text-primary hover:bg-accent/90"
            >
              Back to Home
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingComingSoon;