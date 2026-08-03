import React from 'react';
import { MapPin, Navigation, Landmark, Compass, Award, ExternalLink } from 'lucide-react';
import sipnaCampus from '../assets/sipna-campus.jpg';

export const VenueSection: React.FC = () => {
  return (
    <section id="venue" className="py-20 bg-slate-50/50 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-crypto text-xs font-bold uppercase tracking-wider">
            Campus & Venue
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
            Location & Campus Infrastructure
          </h2>
          <p className="max-w-3xl mx-auto text-slate-655 text-sm sm:text-base font-semibold">
            Find the venue details and coordinate coordinates for the SCOET CSE Department.
          </p>
        </div>

        {/* 2. Split Card Banner Container */}
        <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 max-w-6xl mx-auto mb-12">
          
          {/* Left Side (7 Columns) - Image Side with Hover Lens & Badge */}
          <div className="lg:col-span-7 relative overflow-hidden group cursor-pointer">
            <img
              src={sipnaCampus}
              alt="Sipna Campus"
              className="w-full h-full min-h-[320px] object-cover transition-transform duration-700 ease-out group-hover:scale-108"
              loading="lazy"
            />
            
            {/* Hover Spotlight Lens */}
            <div className="group-hover:opacity-100 opacity-0 transition-opacity duration-500 pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_0%,transparent_70%)] z-10" />

            {/* Bottom Gradient Location Badge (Absolute overlay on hover) */}
            <div className="flex items-center gap-2 bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold px-4 py-2 rounded-full absolute bottom-4 left-4 border border-white/20 group-hover:opacity-100 opacity-0 transition-opacity duration-300 z-20">
              <MapPin className="w-3.5 h-3.5 text-blue-500 shrink-0" />
              <span>SCOET Main Academic Campus</span>
            </div>
          </div>

          {/* Right Side (5 Columns) */}
          <div className="lg:col-span-5 p-8 flex flex-col justify-center bg-slate-50/50 space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-black text-slate-900 flex items-center gap-2 border-b border-slate-200/60 pb-3">
                <Landmark className="w-5 h-5 text-primary" />
                Department of CSE
              </h3>

              <div className="space-y-3">
                <div className="flex gap-2.5 items-start">
                  <MapPin className="w-4.5 h-4.5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[10px] font-black text-slate-400 uppercase tracking-wide">
                      Full Address
                    </span>
                    <p className="text-xs sm:text-sm font-extrabold text-slate-800 leading-normal mt-0.5">
                      Sipna College of Engineering & Technology, <br />
                      Infront of Nemani Godown, Badnera Road, <br />
                      Amravati - 444701, Maharashtra, India.
                    </p>
                  </div>
                </div>

                <div className="flex gap-2.5 items-start border-t border-slate-100 pt-3">
                  <Compass className="w-4.5 h-4.5 text-indigo-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[10px] font-black text-slate-400 uppercase tracking-wide">
                      Hall Location
                    </span>
                    <p className="text-xs sm:text-sm font-extrabold text-slate-705 mt-0.5">
                      CSE Seminar Hall, Ground Floor, Academic Block B
                    </p>
                  </div>
                </div>
              </div>

              {/* Institutional Credentials */}
              <div className="border-t border-slate-150 pt-4 space-y-2.5">
                <h4 className="text-xl md:text-2xl font-black text-[#0F172A] tracking-tight mb-4">
                  Autonomous Institute Accreditation & Academic Distinction
                </h4>
                <div className="space-y-1.5 text-xs md:text-sm font-medium text-slate-600 leading-relaxed">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-amber-650 shrink-0" />
                    <span>UGC-Autonomous Status</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-amber-650 shrink-0" />
                    <span>Accredited with Grade A+ by NAAC</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-amber-650 shrink-0" />
                    <span>Accredited by NBA (UG CSE Program)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-amber-650 shrink-0" />
                    <span>ISO 9001:2015 Certified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-amber-650 shrink-0" />
                    <span>Mentee of COEP Technological University</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Embed and External Action Button */}
        <div className="max-w-6xl mx-auto space-y-4">
          <div className="bg-white rounded-3xl border border-slate-200 p-4 shadow-xl overflow-hidden relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3727.8767984183885!2d77.74459807593672!3d20.88186999296561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd6a4c211111111%3A0x133c1d9f8c6fb25b!2sSipna%20College%20of%20Engineering%20%26%20Technology!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="350"
              style={{ border: 0, borderRadius: '1rem' }}
              allowFullScreen={false}
              loading="lazy"
              title="SCOET Google Maps Coordinates"
            ></iframe>
          </div>

          <div className="flex justify-center">
            <a
              href="https://www.google.com/maps?cid=7496395861405588599"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#0F172A] hover:bg-[#1D4ED8] text-white font-semibold px-6 py-3 rounded-xl shadow-md transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] cursor-pointer text-xs uppercase tracking-wider"
            >
              <Navigation className="w-4 h-4 shrink-0" />
              Open in Google Maps
              <ExternalLink className="w-3.5 h-3.5 shrink-0" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
