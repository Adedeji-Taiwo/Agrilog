import React, { useContext, useState } from 'react'
import EditableParagraph from '../components/EditableParagraph';
import PayrollContainer from '../components/PayrollContainer';
import { Button } from '../../../../../hrStaff/components';
import { DashboardContext, DashboardContextType } from '../../../../../../context/dashboard.context';
import NewAccountInfoAlert from './../components/NewAccountAlert'



type NewAccountInfo = {
  accountType: string;
  accountNo: string;
 accountName: string;
}



type Deduction = {
    pension: string,
    nationalHousingFund: string,
    pensionAccountInfo: string,
    incomeTax: string,
    HMO: string,
    HNSAccountInfo: string,
  }
  

type DeductionContainerProps = {
    deduction: Deduction;
  }
  

  const DeductionContainer = ({  deduction }: DeductionContainerProps) => {
    const {setShowNewAccountInfoAlert, showNewAccountInfoAlert} = useContext(DashboardContext) as DashboardContextType;
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [newDeduction, setNewDeduction] = useState<Deduction>(deduction);
    const [newAccountInfo, setNewAccountInfo] = useState<NewAccountInfo>({accountType: "", accountNo: "", accountName: ""})
  

    const handleSave = () => {
        !isEditing 
        ? setIsEditing(!isEditing)
        : setIsEditing(false);
       
       //send content to backend
       isEditing && console.log(newDeduction);
    };
  
    return (
      <PayrollContainer
        title="Deductions"
        buttons={
          <div className={`justify-self-end flex items-start justify-end ${isEditing && 'md:flex-nowrap flex-wrap'} xl:gap-4 lg:gap-3 gap-2`}>
            <Button
            type="button"
            className={`bg-primary hover:bg-opacity-90`}
            onClick={() => setShowNewAccountInfoAlert(true)}
            children={
              <span className={`font-poppins font-medium xl:text-[15px] leading-4 lg:text-[13px] text-[11px] text-white`}>
                Add Account Info
              </span>
            }
          />
            <Button
            type="button"
            className={`bg-primary hover:bg-opacity-90`}
            onClick={handleSave}
            children={
              <span className={`font-poppins font-medium xl:text-[15px] leading-4 lg:text-[13px] text-[11px] text-white`}>
                {isEditing ? 'Save' : 'Edit'}
              </span>
            }
          />
          <Button
            type="button"
            className={`bg-[#d2d7db] hover:bg-opacity-90 ${!isEditing && "hidden" }`}
            onClick={() => setIsEditing(false)}
            children={
              <span className="font-poppins font-medium xl:text-[15px] leading-4 lg:text-[13px] text-[11px] text-black">
                Cancel
              </span>
            }
          />
          </div>
        }
      >
        {/*add new info alert */}
        <NewAccountInfoAlert 
          showNewAccountInfoAlert={showNewAccountInfoAlert}
          setShowNewAccountInfoAlert={setShowNewAccountInfoAlert}
          newAccountInfo={newAccountInfo}
          setNewAccountInfo={setNewAccountInfo}
          setNewDeduction={setNewDeduction}
        />
         {Object.entries(newDeduction).map(([key, value]) => (
          <EditableParagraph
            key={key}
            header={key.replace(/([A-Z])(?![A-Z0-9_])/g, " $1")} //regex capitalizes first letters and provide spaces between camel-cased words
            isEditing={isEditing && key !== "pension" && key !== "nationalHousingFund" && key !== "incomeTax" && key !== "HMO" } //listed keys are uneditable
            content={value}
            onChange={(newContent) =>
              setNewDeduction((prevDeduction) => ({
                ...prevDeduction,
                [key]: newContent,
              }))
            }
            className='inline-block font-semibold xl:w-48 w-36 text-left xl:mr-6 lg:mr-4 mr-4 capitalize'
          />
        ))}
      </PayrollContainer>
    );
  };

export default DeductionContainer