import React, {useRef, FC, useState} from 'react'
import { Button } from '../../../../..'

type UploaderProps = {
    isSaved: boolean
    setIsSaved: React.Dispatch<React.SetStateAction<boolean>>
    selectedFile: File | null
    setSelectedFile: React.Dispatch<React.SetStateAction<File | null>>
  }

const DocumentUploader:FC<UploaderProps> = ({ isSaved, setIsSaved, selectedFile, setSelectedFile }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];
        if (file) {
          setSelectedFile(file);
        }
       
      }

      const fileUpload = () => {
        (inputRef.current as HTMLInputElement)?.click();
      };

      //to server
      const handleSubmit = () => {
        console.log(`${selectedFile?.name} to server`)
        setIsSaved(true)
      }
  

  return (
    <>
      {selectedFile && !isSaved ? (
               <Button onClick={handleSubmit} type='button' className='flex items-center justify-start xl:gap-[7.5px] lg:gap-[6px] gap-2 rounded-[7.5px] xl:px-[23px] xl:py-3 px-[18px] py-[9px]  bg-primary hover:bg-opacity-90'>
               <svg className='xl:w-[23px] xl:h-4 lg:w-[18px] lg:h-3 w-3 h-2' viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M6 15.9996C4.48333 15.9996 3.18767 15.4746 2.113 14.4246C1.03767 13.3746 0.5 12.0913 0.5 10.5746C0.5 9.27461 0.891667 8.11628 1.675 7.09961C2.45833 6.08294 3.48333 5.43294 4.75 5.14961C5.03333 3.94961 5.74167 2.80794 6.875 1.72461C8.00833 0.641276 9.21667 0.0996094 10.5 0.0996094C11.05 0.0996094 11.521 0.295276 11.913 0.686609C12.3043 1.07861 12.5 1.54961 12.5 2.09961V8.14961L14.1 6.59961L15.5 7.99961L11.5 11.9996L7.5 7.99961L8.9 6.59961L10.5 8.14961V2.09961C9.23333 2.33294 8.25 2.94528 7.55 3.93661C6.85 4.92861 6.5 5.94961 6.5 6.99961H6C5.03333 6.99961 4.20833 7.34128 3.525 8.02461C2.84167 8.70794 2.5 9.53294 2.5 10.4996C2.5 11.4663 2.84167 12.2913 3.525 12.9746C4.20833 13.6579 5.03333 13.9996 6 13.9996H18C18.7 13.9996 19.2917 13.7579 19.775 13.2746C20.2583 12.7913 20.5 12.1996 20.5 11.4996C20.5 10.7996 20.2583 10.2079 19.775 9.72461C19.2917 9.24128 18.7 8.99961 18 8.99961H16.5V6.99961C16.5 6.19961 16.3167 5.45361 15.95 4.76161C15.5833 4.07028 15.1 3.48294 14.5 2.99961V0.67461C15.7333 1.25794 16.7083 2.12061 17.425 3.26261C18.1417 4.40394 18.5 5.64961 18.5 6.99961C19.65 7.13294 20.6043 7.62861 21.363 8.48661C22.121 9.34528 22.5 10.3496 22.5 11.4996C22.5 12.7496 22.0627 13.8123 21.188 14.6876C20.3127 15.5623 19.25 15.9996 18 15.9996H6Z" fill="white"/>
               </svg>
         
               <span className='font-poppins font-medium xl:text-[15px] leading-4 lg:text-[13px] text-[11px] text-white'>Save</span>
             </Button>
            ) : (
           
           <Button onClick={() => {fileUpload(); setIsSaved(false)}} type='button' className='flex items-center justify-start xl:gap-[7.5px] lg:gap-[6px] gap-2 rounded-[7.5px] xl:px-[23px] xl:py-3 px-[18px] py-[9px]  bg-primary hover:bg-opacity-90'>
           <svg className='xl:w-[23px] xl:h-4 lg:w-[18px] lg:h-3 w-3 h-2' viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M6 15.9996C4.48333 15.9996 3.18767 15.4746 2.113 14.4246C1.03767 13.3746 0.5 12.0913 0.5 10.5746C0.5 9.27461 0.891667 8.11628 1.675 7.09961C2.45833 6.08294 3.48333 5.43294 4.75 5.14961C5.03333 3.94961 5.74167 2.80794 6.875 1.72461C8.00833 0.641276 9.21667 0.0996094 10.5 0.0996094C11.05 0.0996094 11.521 0.295276 11.913 0.686609C12.3043 1.07861 12.5 1.54961 12.5 2.09961V8.14961L14.1 6.59961L15.5 7.99961L11.5 11.9996L7.5 7.99961L8.9 6.59961L10.5 8.14961V2.09961C9.23333 2.33294 8.25 2.94528 7.55 3.93661C6.85 4.92861 6.5 5.94961 6.5 6.99961H6C5.03333 6.99961 4.20833 7.34128 3.525 8.02461C2.84167 8.70794 2.5 9.53294 2.5 10.4996C2.5 11.4663 2.84167 12.2913 3.525 12.9746C4.20833 13.6579 5.03333 13.9996 6 13.9996H18C18.7 13.9996 19.2917 13.7579 19.775 13.2746C20.2583 12.7913 20.5 12.1996 20.5 11.4996C20.5 10.7996 20.2583 10.2079 19.775 9.72461C19.2917 9.24128 18.7 8.99961 18 8.99961H16.5V6.99961C16.5 6.19961 16.3167 5.45361 15.95 4.76161C15.5833 4.07028 15.1 3.48294 14.5 2.99961V0.67461C15.7333 1.25794 16.7083 2.12061 17.425 3.26261C18.1417 4.40394 18.5 5.64961 18.5 6.99961C19.65 7.13294 20.6043 7.62861 21.363 8.48661C22.121 9.34528 22.5 10.3496 22.5 11.4996C22.5 12.7496 22.0627 13.8123 21.188 14.6876C20.3127 15.5623 19.25 15.9996 18 15.9996H6Z" fill="white"/>
           </svg>
     
           <span className='font-poppins font-medium xl:text-[15px] leading-4 lg:text-[13px] text-[11px] text-white'>Upload</span>
         </Button>
            )}
    <input
        hidden
        ref={inputRef}
        name=''
        type="file"
        accept=".docx,.pdf,image/*"
        onChange={handleFileSelect}
        />
    </>
  )
}

export default DocumentUploader