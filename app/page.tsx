'use client';

import { BookOpen, Brain, Target, Zap, Award, Users, ChevronRight, Check } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="w-8 h-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">VocabMaster</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">How It Works</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
            <button className="text-gray-600 hover:text-gray-900 transition-colors">Sign In</button>
            <button className="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              Master vocabulary 3x faster
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transform Your Vocabulary Learning Journey
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Learn new words effortlessly through engaging interactive quizzes, personalized learning paths, and scientifically-proven spaced repetition techniques.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2">
                Start Learning Free
                <ChevronRight className="w-5 h-5" />
              </button>
              <button className="bg-white text-gray-900 px-8 py-4 rounded-lg border-2 border-gray-200 hover:border-gray-300 transition-all font-semibold text-lg">
                Watch Demo
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-6">No credit card required • 7-day free trial</p>
          </div>

          <div className="mt-16 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 via-green-50 to-blue-100 rounded-3xl transform -rotate-1"></div>
            <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">10,000+</div>
                  <div className="text-gray-600">Active Learners</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">50M+</div>
                  <div className="text-gray-600">Words Learned</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-600 mb-2">4.9/5</div>
                  <div className="text-gray-600">User Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Everything You Need to Excel
            </h2>
            <p className="text-xl text-gray-600">
              Powerful features designed to accelerate your vocabulary mastery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Brain className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Smart Adaptive Learning</h3>
              <p className="text-gray-600 leading-relaxed">
                Our AI-powered system adapts to your learning pace and focuses on words you need to practice most.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Interactive Quizzes</h3>
              <p className="text-gray-600 leading-relaxed">
                Engage with dynamic quizzes featuring multiple choice, fill-in-the-blank, and context-based questions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Spaced Repetition</h3>
              <p className="text-gray-600 leading-relaxed">
                Scientifically proven method that helps you remember words longer by reviewing them at optimal intervals.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <Award className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Progress Tracking</h3>
              <p className="text-gray-600 leading-relaxed">
                Monitor your improvement with detailed analytics, streaks, and achievement badges to stay motivated.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-pink-100 rounded-xl flex items-center justify-center mb-6">
                <BookOpen className="w-7 h-7 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Curated Word Lists</h3>
              <p className="text-gray-600 leading-relaxed">
                Access thousands of professionally curated word lists organized by topics, difficulty, and exam prep.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Community Challenges</h3>
              <p className="text-gray-600 leading-relaxed">
                Join group challenges, compete on leaderboards, and learn together with a supportive community.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Start your vocabulary journey in three simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="relative">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  1
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Choose Your Path</h3>
                <p className="text-gray-600 leading-relaxed">
                  Select from pre-made word lists or create your own. Set your daily learning goals and preferred difficulty level.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  2
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Learn & Practice</h3>
                <p className="text-gray-600 leading-relaxed">
                  Complete interactive quizzes daily. Our adaptive algorithm personalizes your learning experience in real-time.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  3
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Master & Achieve</h3>
                <p className="text-gray-600 leading-relaxed">
                  Watch your vocabulary grow. Earn achievements, maintain streaks, and see measurable improvements in your language skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Expand Your Vocabulary?
          </h2>
          <p className="text-xl mb-10 text-blue-100">
            Join thousands of learners who are already mastering new words every day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-50 transition-all font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2">
              Start Free Trial
              <ChevronRight className="w-5 h-5" />
            </button>
            <button className="bg-blue-700 text-white px-8 py-4 rounded-lg hover:bg-blue-800 transition-all font-semibold text-lg border-2 border-blue-500">
              Contact Sales
            </button>
          </div>
          <div className="mt-10 flex items-center justify-center gap-8 text-sm text-blue-100">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" />
              <span>Free for 7 days</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" />
              <span>No credit card</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Word Lists</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mobile App</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Guides</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Docs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <BookOpen className="w-6 h-6 text-blue-500" />
              <span className="text-white font-bold">VocabMaster</span>
            </div>
            <p className="text-sm">© 2024 VocabMaster. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
