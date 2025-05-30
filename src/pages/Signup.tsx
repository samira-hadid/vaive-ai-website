
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Mail, Lock, User, Building } from "lucide-react";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Black with Logo */}
      <div className="hidden lg:flex lg:w-1/2 bg-black flex-col justify-center items-center p-12">
        <div className="text-center">
          <img 
            src="/lovable-uploads/c034295e-0f3f-4ce7-9391-9f4852421390.png" 
            alt="VAIVE.AI" 
            className="h-12 w-auto mx-auto mb-8"
          />
          <h1 className="text-4xl font-light text-white mb-6 tracking-wide">
            Get Started
          </h1>
          <p className="text-white/70 text-lg font-light leading-relaxed max-w-md">
            Join hundreds of CA firms already using professional-class AI for GST litigation.
          </p>
        </div>
      </div>

      {/* Right Side - White with Form */}
      <div className="w-full lg:w-1/2 bg-white flex items-center justify-center p-6 lg:p-12">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden text-center mb-8">
            <img 
              src="/lovable-uploads/c034295e-0f3f-4ce7-9391-9f4852421390.png" 
              alt="VAIVE.AI" 
              className="h-8 w-auto mx-auto mb-4"
            />
          </div>

          <div className="mb-8">
            <Button 
              variant="ghost" 
              className="text-gray-600 hover:text-gray-900 p-0 mb-6"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to home
            </Button>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Create Account
              </h2>
              <p className="text-gray-600">
                Start your journey with VAIVE.AI
              </p>
            </div>
          </div>

          <Card className="bg-white border border-gray-200 shadow-sm p-8">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={handleChange('name')}
                    className="bg-white border-gray-300 text-gray-900 pl-12 focus:border-black focus:ring-black"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={handleChange('email')}
                    className="bg-white border-gray-300 text-gray-900 pl-12 focus:border-black focus:ring-black"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company/Firm Name
                </label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    type="text"
                    value={formData.company}
                    onChange={handleChange('company')}
                    className="bg-white border-gray-300 text-gray-900 pl-12 focus:border-black focus:ring-black"
                    placeholder="Enter your company name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    type="password"
                    value={formData.password}
                    onChange={handleChange('password')}
                    className="bg-white border-gray-300 text-gray-900 pl-12 focus:border-black focus:ring-black"
                    placeholder="Create a password"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleChange('confirmPassword')}
                    className="bg-white border-gray-300 text-gray-900 pl-12 focus:border-black focus:ring-black"
                    placeholder="Confirm your password"
                  />
                </div>
              </div>

              <div className="flex items-start">
                <input type="checkbox" className="mt-1 mr-3 accent-black" />
                <span className="text-sm text-gray-600">
                  I agree to the{" "}
                  <a href="#" className="text-black hover:underline font-medium">Terms of Service</a>
                  {" "}and{" "}
                  <a href="#" className="text-black hover:underline font-medium">Privacy Policy</a>
                </span>
              </div>

              <Button className="w-full bg-black text-white hover:bg-gray-800" size="lg">
                Create Account
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Already have an account?{" "}
                <a href="/login" className="text-black hover:underline font-medium">
                  Sign in
                </a>
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Signup;
