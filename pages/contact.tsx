import { useState } from 'react';
import Head from 'next/head';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    });

    setIsLoading(false);

    if (response.ok) {
      setResponseMessage('Message sent successfully!');
      setName('');
      setEmail('');
      setMessage('');
    } else {
      const data = await response.json();
      setResponseMessage(`Failed to send message. Error: ${data.error}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full flex-1 px-6 text-center pt-16 md:pt-24 text-soft-white">
      <Head>
        <title>Contact Jus Buckingham</title>
        <meta name="description" content="Contact Jus Buckingham, a Renaissance man with diverse talents in software engineering, technology, music, and more." />
      </Head>

      <h1 className="text-4xl md:text-6xl font-bold my-4 text-beige">
        Contact Jus Buckingham
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full max-w-md bg-dark-green p-6 rounded-lg shadow-lg">
        <div>
          <label htmlFor="name" className="block text-lg font-medium text-light-beige">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-dark-blue text-light-beige"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-lg font-medium text-light-beige">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-dark-blue text-light-beige"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-lg font-medium text-light-beige">Message</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            required
            className="mt-1 p-2 border border-gray-300 rounded-md w-full bg-dark-blue text-light-beige"
          ></textarea>
        </div>
        <button
          type="submit"
          className="py-2 px-4 bg-beige text-dark-blue rounded-md hover:bg-light-beige focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-beige"
          disabled={isLoading}
        >
          {isLoading ? 'Sending...' : 'Send'}
        </button>
      </form>

      {responseMessage && <p className="mt-4 text-lg">{responseMessage}</p>}
    </div>
  );
};

export default Contact;
