/* 
JavaScript
Write a next.js page component for an Contact Me Page.\n1. Import React library and useState/useEffect hooks.\n2. Import Link component from next/link\n3. Create a functional component that includes a useEffect hook.\n4. The useEffect hook should check for successful page load. Update state variable on success.\n5. The about page content should be wrapped in a main tag. Actual content should include div/p tags as well.\n6. Include a link to the home page within the page content. 7. Include a form that that has two inputs (name, email) and one textarea (message), and a submit butt.
*/
###

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