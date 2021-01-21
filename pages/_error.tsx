import { NextPageContext } from 'next';
import NextErrorComponent, { ErrorProps } from 'next/error';
import * as Sentry from '@sentry/node';

interface Props extends ErrorProps {
  hasGetInitialPropsRun: boolean;
  err: Record<string, unknown>;
}

const MyError = ({ statusCode, hasGetInitialPropsRun, err }: Props): JSX.Element => {
  // getInitialProps is not called in case of https://github.com/vercel/next.js/issues/8592
  // As a workaround, we pass err via _app.js so it can be captured
  if (!hasGetInitialPropsRun && err) {
    Sentry.captureException(err);
    // Flushing is not required in this case as it only happens on the client
  }

  return <NextErrorComponent statusCode={statusCode} />;
};

MyError.getInitialProps = async ({ AppTree, asPath, err, pathname, query, res }: NextPageContext) => {
  const errorInitialProps = (await NextErrorComponent.getInitialProps({ AppTree, err, pathname, query, res })) as Props;

  errorInitialProps.hasGetInitialPropsRun = true;

  if (err) {
    Sentry.captureException(err);

    // Flushing before returning is necessary if deploying to Vercel
    // see https://vercel.com/docs/platform/limits#streaming-responses
    await Sentry.flush(2000);

    return errorInitialProps;
  }

  // If this point is reached, getInitialProps was called without any
  // information about what the error might be. This is unexpected and may
  // indicate a bug introduced in Next.js, so record it in Sentry
  Sentry.captureException(new Error(`_error.js getInitialProps missing data at path: ${asPath}`));
  await Sentry.flush(2000);

  return errorInitialProps;
};

export default MyError;
