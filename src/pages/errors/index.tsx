import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';
import { FiExternalLink } from 'react-icons/fi';

import SimpleLayout from '../../components/layouts/SimpleLayout';

const ErrorsPage: NextPage = () => (
  <SimpleLayout title="Errors examples">
    <main className="max-w-4xl mx-auto px-4">
      <h2 className="font-thin text-4xl mb-2">Sentry error examples</h2>
      <p className="mb-2">
        This example demonstrates how to record unhandled exceptions in your code with Sentry. There are several test
        pages below that result in various kinds of unhandled exceptions.
      </p>
      <p className="mb-2">
        <strong>Important:</strong> exceptions in development mode take a different path than in production. These tests
        should be run on a production build (i.e. <code>next build</code>).
      </p>

      <ul>
        <li className="text-3xl mb-2">Server exceptions</li>
        <ul className="list-disc pl-6 mb-2">
          <li>
            <code>getServerSideProps</code> throws an Error. This should record{' '}
            <strong>Error(&quot;Server Test 1&quot;)</strong> in Sentry.
            <br />
            <a href="/errors/server/test1" target="_blank" className="text-blue-600">
              Open in a new tab <FiExternalLink className="inline" />
            </a>
          </li>
          <li>
            <code>getServerSideProps</code> returns a Promise that rejects. This should record{' '}
            <strong>Error(&quot;Server Test 2&quot;)</strong> in Sentry.
            <br />
            <a href="/errors/server/test2" target="_blank" className="text-blue-600">
              Open in a new tab <FiExternalLink className="inline" />
            </a>
          </li>
          <li>
            <code>getServerSideProps</code> calls a Promise that rejects, but does not handle the rejection nor await
            its result (returning synchronously). Sentry should record <strong>Error(&quot;Server Test 3&quot;)</strong>
            .
            <br />
            <a href="/errors/server/test3" target="_blank" className="text-blue-600">
              Open in a new tab <FiExternalLink className="inline" />
            </a>
          </li>
        </ul>

        <li className="text-3xl mb-2">Client exceptions</li>
        <ul className="list-disc pl-6 mb-2">
          <li>
            There is a top-of-module Promise that rejects, but its result is not awaited. Sentry should record{' '}
            <strong>Error(&quot;Client Test 1&quot;)</strong>.
            <br />
            <Link href="/errors/client/test1">
              <a className="text-blue-600">Perform client side navigation</a>
            </Link>{' '}
            or{' '}
            <a href="/errors/client/test1" target="_blank" className="text-blue-600">
              Open in a new tab <FiExternalLink className="inline" />
            </a>
          </li>
          <li>
            There is a top-of-module exception. Sentry should record{' '}
            <strong>ReferenceError(&quot;process is not defined&quot;)</strong>.
            <br />
            <Link href="/errors/client/test2">
              <a className="text-blue-600">Perform client side navigation</a>
            </Link>{' '}
            or{' '}
            <a href="/errors/client/test2" target="_blank" className="text-blue-600">
              Open in a new tab <FiExternalLink className="inline" />
            </a>
          </li>
          <li>
            There is an exception during React lifecycle that is caught by Next.js&apos;s React Error Boundary. In this
            case, when the component mounts. This should record <strong>Error(&quot;Client Test 3&quot;)</strong> in
            Sentry.
            <br />
            <Link href="/errors/client/test3">
              <a className="text-blue-600">Perform client side navigation</a>
            </Link>{' '}
            or{' '}
            <a href="/errors/client/test3" target="_blank" className="text-blue-600">
              Open in a new tab <FiExternalLink className="inline" />
            </a>
          </li>
          <li>
            There is an unhandled Promise rejection during React lifecycle. In this case, when the component mounts.
            Sentry should record <strong>Error(&quot;Client Test 4&quot;)</strong>.
            <br />
            <Link href="/errors/client/test4">
              <a className="text-blue-600">Perform client side navigation</a>
            </Link>{' '}
            or{' '}
            <a href="/errors/client/test4" target="_blank" className="text-blue-600">
              Open in a new tab <FiExternalLink className="inline" />
            </a>
          </li>
          <li>
            An Error is thrown from an event handler. Sentry should record{' '}
            <strong>Error(&lsquo;Client Test 5&rsquo;)</strong>.
            <br />
            <Link href="/errors/client/test5">
              <a className="text-blue-600">Perform client side navigation</a>
            </Link>{' '}
            or{' '}
            <a href="/errors/client/test5" target="_blank" className="text-blue-600">
              Open in a new tab <FiExternalLink className="inline" />
            </a>
          </li>
        </ul>
      </ul>
    </main>
  </SimpleLayout>
);

export default ErrorsPage;
