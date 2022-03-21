import SiteNav from '../frontend/UI/SiteNav';
import Footer from '../frontend/UI/Footer';

const WebLayout = (props) => {
  return (
    <div className="page-wrapper" id="page-top">

    <header id="page-header">
      <SiteNav />
    </header>
    <div id="page-content" style={{paddingTop:"30px"}}>
       {props.children}
    </div>  
    <Footer />
  </div>
  )
}

export default WebLayout