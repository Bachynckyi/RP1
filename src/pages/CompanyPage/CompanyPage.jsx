import scss from './CompanyPage.module.scss';
import Footer from "components/Footer/Footer";

const CompanyPage = () => {

    return (
      <>
        <div className={scss.container}>
          <h1>Про компанію</h1>
        </div>
        <Footer/>
      </>
    );
  };
  
  export default CompanyPage;