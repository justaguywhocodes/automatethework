import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Contact = () => {
  const [ready, setReady] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setReady(true);
    return () => {
      setReady(false);
    };
  }, []);

  return (
    <main>
      {ready && (
        <>
          <p>
            Welcome to my next.js website! To go back to my home page, click{' '}
            <Link href="/">
              <a>here</a>
            </Link>
            .
          </p>
          <p>
            For quick contact, please use the form below to send me an email.
          </p>
          <form>
            <div>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" cols="30" rows="10" />
            </div>
            <div>
              <input type="submit" value="Send Message" />
            </div>
          </form>
        </>
      )}
    </main>
  );
};

export default Contact;
