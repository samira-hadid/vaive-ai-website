
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Mail, Lock } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
            Welcome Back
          </h1>
          <p className="text-white/70 text-lg font-light leading-relaxed max-w-md">
            Your AI co-pilot for modern GST litigation practice management.
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
                Sign In
              </h2>
              <p className="text-gray-600">
                Access your VAIVE.AI account
              </p>
            </div>
          </div>

          <Card className="bg-white border border-gray-200 shadow-sm p-8">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white border-gray-300 text-gray-900 pl-12 focus:border-black focus:ring-black"
                    placeholder="Enter your email"
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-white border-gray-300 text-gray-900 pl-12 focus:border-black focus:ring-black"
                    placeholder="Enter your password"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2 accent-black" />
                  <span className="text-sm text-gray-600">Remember me</span>
                </label>
                <a href="#" className="text-sm text-black hover:underline font-medium">
                  Forgot password?
                </a>
              </div>

              <Button className="w-full bg-black text-white hover:bg-gray-800" size="lg">
                Sign In
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Don't have an account?{" "}
                <a href="/signup" className="text-black hover:underline font-medium">
                  Sign up
                </a>
              </p>
            </div>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-gray-500">OR</span>
              </div>
            </div>

            {/* Google Sign In */}
            <Button 
              variant="outline" 
              className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-gray-900" 
              size="lg"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continue with Google
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;
