import '../styles/globals.css';
import { NotificationsProvider } from '@mantine/notifications';
import Script from 'next/script';
import '../public/static/css/magnific-popup.css';
import '../public/static/bootstrap/css/bootstrap.css';
import '../public/static/fonts/elegant-fonts.css';
import '../public/static/fonts/font-awesome.css';
import '../public/static/css/style.css';

function MyApp({ Component, pageProps }) {
  return <NotificationsProvider>
            <Component {...pageProps} />
            <Script src='/static/js/jquery-2.2.1.min.js' strategy='beforeInteractive'  />
            <Script src='/static/js/owl.carousel.min.js'  />
            <Script src='/static/js/custom.js'  />
            <Script src='/static/js/pace.min.js'  />
            <Script src='/static/js/readmore.min.js'  />
            <Script src='/static/js/scrollReveal.min.js'  strategy='beforeInteractive'  />
            <Script src='/static/js/jquery.magnific-popup.min.js' strategy='beforeInteractive'  />
          </NotificationsProvider>
}

export default MyApp
