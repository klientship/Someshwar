import SiteNav from '../frontend/UI/SiteNav';
import Footer from '../frontend/UI/Footer';

const WebLayout = (props) => {
  return (
    <div className="page-wrapper" id="page-top">

    <header id="page-header">
      <SiteNav settings={props.settings}/>
    </header>
    <div id="page-content" style={{paddingTop:"30px"}}>
       {props.children}
    </div>  
    <Footer settings={props.settings} />
  </div>
  )
}

export default WebLayout