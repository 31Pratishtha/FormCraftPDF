import { ICASoleProprietership } from '../../interfaces/CASoleProprietership'

interface CASoleProprietershipTemplateProps {
  data: ICASoleProprietership;
}

const CASoleProprietershipTemplate: React.FC<CASoleProprietershipTemplateProps> = ({ data }) => {
  return (
    <div className="w-[800px] p-10 bg-white">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-xl font-bold text-blue-950 mb-2">
          CURRENT ACCOUNT OPENING FORM
        </h1>
        <h2 className="text-xl text-blue-900">
          SOLE PROPRIETERSHIP FIRM
        </h2>
        <div className="h-0.5 bg-blue-950 w-full mt-4"></div>
      </div>

      {/* Basic Information Section */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-blue-900 border-b border-gray-200 pb-2 mb-4">
          Basic Information
        </h2>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="text-gray-700 mb-2">
              <span className="font-medium">Name:</span> {data.name}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-medium">Email:</span> {data.email}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-medium">Phone:</span> {data.phone}
            </p>
          </div>
          <div>
            <p className="text-gray-700 mb-2">
              <span className="font-medium">Business Name:</span> {data.businessName}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-medium">PAN Number:</span> {data.panNumber}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-medium">Date of Birth:</span> {' '}
              {data.dateOfBirth?.toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>

      {/* Address Section */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-blue-900 border-b border-gray-200 pb-2 mb-4">
          Address Details
        </h2>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="text-gray-700 mb-2">
              <span className="font-medium">Street:</span> {data.street}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-medium">City:</span> {data.city}
            </p>
          </div>
          <div>
            <p className="text-gray-700 mb-2">
              <span className="font-medium">State:</span> {data.state}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-medium">Pincode:</span> {data.pincode}
            </p>
          </div>
        </div>
      </div>

      {/* More Section */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-blue-900 border-b border-gray-200 pb-2 mb-4">
          Business Details
        </h2>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="text-gray-700 mb-2">
              <span className="font-medium">BusinessName:</span> {data.businessName}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-medium">GSTN:</span> {data.gstn}
            </p>
          </div>
          <div>
            <p className="text-gray-700 mb-2">
              <span className="font-medium">Industry:</span> {data.industry}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-medium">FounderName:</span> {data.founderName}
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-12 pt-4 border-t border-gray-200">
        <p className="text-sm text-gray-500 text-center">
          Generated on {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default CASoleProprietershipTemplate;