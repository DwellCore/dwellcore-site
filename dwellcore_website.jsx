import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Globe, Building2, Leaf, PenTool, Lightbulb, Layers, Menu } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* Navigation Bar */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-gray-200 sticky top-0 bg-white z-50">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-black"></div>
          <span className="text-xl font-bold">Dwellcore</span>
        </div>
        <nav className="flex gap-6 text-sm font-medium">
          <a href="#about" className="hover:underline">About</a>
          <a href="#approach" className="hover:underline">Approach</a>
          <a href="#services" className="hover:underline">What We Do</a>
          <a href="#portfolio" className="hover:underline">Portfolio</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <div className="relative h-screen bg-black text-white">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black/90"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold">Where legacy meets innovation</h1>
          <p className="mt-4 text-lg text-white/80">Timeless architecture, reimagined for tomorrow</p>
        </div>
        <div className="absolute bottom-10 w-full flex justify-center">
          <button className="animate-bounce text-white">↓ Scroll</button>
        </div>
      </div>

      <main className="grid gap-24 px-6 py-20 max-w-6xl mx-auto">
        {/* About Section */}
        <section id="about" className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold">About Dwellcore</h2>
            <p className="text-lg text-gray-800">
              Dwellcore is a design studio rooted in timeless architectural principles,
              reimagined for the spaces of tomorrow. Like BIG, we embrace a pragmatic utopian
              approach—balancing heritage and innovation to create environments that respond to how
              people live, evolve, and connect.
            </p>
            <p className="text-lg text-gray-800">
              Our focus on <strong>information‑driven design</strong> means every decision stems from
              context: culture, climate, program, ecology and economy. We mix elements—residential,
              public, commercial—into harmonious architectural alchemy.
            </p>
          </div>

          <div className="space-y-6 text-gray-800">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Our Studio at a Glance</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Users className="text-black" /> <span><strong>Team:</strong> XX architects, designers & thinkers</span>
                </li>
                <li className="flex items-start gap-3">
                  <Globe className="text-black" /> <span><strong>Locations:</strong> Conroe TX • [future offices]</span>
                </li>
                <li className="flex items-start gap-3">
                  <Building2 className="text-black" /> <span><strong>Disciplines:</strong> Architecture, Urbanism, Visualization</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">Our Philosophy</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Leaf className="text-black" /> <span><strong>Pragmatic utopia:</strong> form follows function + delight.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Leaf className="text-black" /> <span><strong>Contextual depth:</strong> local history, climate & culture.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Leaf className="text-black" /> <span><strong>Programmatic mix:</strong> living, working, relaxing, socialising.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Leaf className="text-black" /> <span><strong>Sustainability:</strong> eco-conscious materials & energy.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section id="approach" className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">Our Approach</h2>
            <p className="text-lg text-gray-800">
              At Dwellcore, every project starts with a dialogue. Our collaborative process ensures the client’s story is not only heard—but built into the very bones of the design. We bridge tradition and innovation through intentional research and iterative creation.
            </p>
          </div>

          <div className="space-y-6">
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <PenTool className="text-black" />
                <div>
                  <strong>Heritage-Inspired Design</strong>
                  <p className="text-gray-800">We draw from classical architecture, artisanal methods, and regional character.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Lightbulb className="text-black" />
                <div>
                  <strong>Future-Focused Solutions</strong>
                  <p className="text-gray-800">Leveraging design thinking and materials for sustainable, modern living.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Users className="text-black" />
                <div>
                  <strong>Client-Centered Process</strong>
                  <p className="text-gray-800">Collaboration is key—your vision is the blueprint for our creative process.</p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">What We Do</h2>
            <p className="text-lg text-gray-800">
              From the foundations of a private residence to the pulse of urban planning, our multidisciplinary services offer depth, vision, and technical precision across architectural fields.
            </p>
          </div>

          <div className="space-y-6">
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <Building2 className="text-black" />
                <div>
                  <strong>Residential Architecture</strong>
                  <p className="text-gray-800">Spaces tailored to lifestyle, context, and personal vision.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Globe className="text-black" />
                <div>
                  <strong>Urban & Suburban Planning</strong>
                  <p className="text-gray-800">Designs that shape how communities live, move, and thrive.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <PenTool className="text-black" />
                <div>
                  <strong>Concept Design & Visualization</strong>
                  <p className="text-gray-800">From ideation to immersive previews, we give form to the future.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Layers className="text-black" />
                <div>
                  <strong>Interior & Exterior Detailing</strong>
                  <p className="text-gray-800">Artful finishes and purposeful construction come together seamlessly.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Lightbulb className="text-black" />
                <div>
                  <strong>3D Rendering & Walkthroughs</strong>
                  <p className="text-gray-800">See the vision before it’s built with vivid digital experiences.</p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio">
          <Card className="bg-gray-50 border border-gray-200 text-black">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-2">Portfolio</h2>
              <p className="mb-4">Explore our projects that exemplify the harmony between historic influences and contemporary needs.</p>
              <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white">View Portfolio</Button>
            </CardContent>
          </Card>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <Card className="bg-gray-50 border border-gray-200 text-black">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-2">Let’s Build Your Vision</h2>
              <p className="mb-2">Whether you’re breaking ground or reimagining a space, we’re here to bring thoughtful architecture to life.</p>
              <p className="text-sm mb-4">Contact us: <a href="mailto:dwellcore.connect@gmail.com" className="underline">dwellcore.connect@gmail.com</a></p>
              <div className="flex gap-4">
                <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white">Instagram</Button>
                <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white">LinkedIn</Button>
                <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white">Behance</Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
