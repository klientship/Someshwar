import '../styles/globals.css';
import { NotificationsProvider } from '@mantine/notifications';
import Script from 'next/script';
import '../public/static/css/magnific-popup.css';
import '../public/static/bootstrap/css/bootstrap.css';
import '../public/static/fonts/elegant-fonts.css';
import '../public/static/fonts/font-awesome.css';
import '../public/static/css/style.css';
import SiteScripts from './scripts';

function MyApp({ Component, pageProps }) {
  return <NotificationsProvider>
            <Component {...pageProps} />
            <SiteScripts />

          </NotificationsProvider>
}

export default MyApp
