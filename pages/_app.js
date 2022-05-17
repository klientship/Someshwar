import '../styles/globals.css';
import { NotificationsProvider } from '@mantine/notifications';
import Script from 'next/script';
import '../public/css/magnific-popup.css';
import '../public/bootstrap/css/bootstrap.css';
import '../public/fonts/elegant-fonts.css';
import '../public/fonts/font-awesome.css';
import '../public/css/style.css';
import SiteScripts from './scripts';


function MyApp({ Component, pageProps }) {
  return <NotificationsProvider>
            <Component {...pageProps} />
            <SiteScripts />

          </NotificationsProvider>
}

export default MyApp
