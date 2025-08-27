import React from 'react'
import Navbar from './components/Navbar.jsx'
import Slider from './components/Slider.jsx'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="grow">
        <section className="container mt-6">
          <Slider />
        </section>

        <section className="container mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1,2,3,4,5,6].map((i) => (
            <div key={i} className="rounded-2xl bg-white p-6 shadow-soft ring-1 ring-black/5">
              <div className="h-40 rounded-xl bg-gradient-to-tr from-indigo-100 to-indigo-50"></div>
              <h3 className="mt-4 text-lg font-semibold">Featured Card {i}</h3>
              <p className="mt-1 text-sm text-neutral-600">Use this space for product previews or promo tiles.</p>
              <button className="btn-primary mt-4 bg-indigo-600 text-white">Explore</button>
            </div>
          ))}
        </section>
      </main>

      <footer className="mt-16 border-t border-neutral-200 py-8 text-center text-sm text-neutral-600">
        © {new Date().getFullYear()} ecommerce-f. All rights reserved.
      </footer>
    </div>
  )
}
