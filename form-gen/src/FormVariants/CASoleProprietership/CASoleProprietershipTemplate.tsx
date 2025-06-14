import { ICASoleProprietership } from '../../interfaces/CASoleProprietership'
import FormHeader from '../../templateUIComponents/FormHeader';
import DataField from '../../templateUIComponents/DataField';
import GeneralInstructionsBox from '../../templateUIComponents/GeneralInstructionsBox';

interface CASoleProprietershipTemplateProps {
  data: ICASoleProprietership;
}

const CASoleProprietershipTemplate: React.FC<CASoleProprietershipTemplateProps> = ({ data }) => {
  return (
    <div>
      <FormHeader heading="CURRENT ACCOUNT OPENING FORM FOR SOLE PROPRIETORSHIP FIRM"/>
      
      {/* Basic Information Section */}
      <div className="mb-6 grid grid-cols-3 gap-3 items-start justify-start">
        <div className="col-span-2 flex flex-wrap gap-2">
          <DataField label="Application Type" required value={data.applicationType} />
          <DataField label="Date" value={data.applicationDate} />
          <DataField label="CIF No." value={data.cifNo} />
          <DataField label="Current a/c No." value={data.currentAccNo} />
          <DataField label="CKYC number (mandatory for ckyc update request)" value={data.ckycNo} />
          <DataField label="Account Holder Type" required value={data.accountHolderType} />
          <DataField label="US Reportable" value={data.usReportable} fieldHelper="Other reportable (Please refer to general instructions point 'A')" />
        </div>
        <div >
          <GeneralInstructionsBox />
        </div>
      </div>
    </div>
  );
};

export default CASoleProprietershipTemplate;