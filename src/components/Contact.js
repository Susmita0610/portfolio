import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-5">Get In Touch</h2>
          <p className="mb-5">
            Feel free to reach out for collaborations or just a friendly chat.
          </p>
          <a
            href="mailto:your.email@example.com"
            className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-transform transform hover:scale-105"
          >
            Say Hello
          </a>
        </div>
      </section>
  )
}

export default Contact