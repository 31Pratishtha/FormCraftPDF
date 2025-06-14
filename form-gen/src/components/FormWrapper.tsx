import React from 'react'

interface IFormTemplateContainerProps {
  children: React.ReactNode;
}

const FormTemplateContainer: React.FC<IFormTemplateContainerProps> = ({ children }) => {
  return (
    <div className='border-black border-2 w-[800px] bg-white p-5'>
      {children}
    </div>
  );
};

export default FormTemplateContainer