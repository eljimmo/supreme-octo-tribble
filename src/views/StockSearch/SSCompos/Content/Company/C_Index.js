// import CompanyProfile from './CompanyProfile/CO_Index';
import CompanyDescription from './CompanyDescription/CD_Index';
import './style.css';

const CompanyInfo = ({ general, quote }) => {
  return (
    <section id="company-section">
      {/* <h3>Company Profile</h3> */}
      <div className="flex">
        {/* <CompanyProfile data={general} /> */}
        <CompanyDescription description={general.description} />
      </div>
    </section>
  );
};

export default CompanyInfo;