import { LargestSection, LargeSection, MiniSection } from './index';



const HomepageUser = () => {
  return (
    <div className='flex flex-col justify-start items-center xl:gap-2 gap-3 xl:pr-14 lg:pr-10'>
      <LargestSection />
      <div className='grid lg:grid-cols-3 grid-cols-1 xl:gap-8 lg:gap-6 gap-3 w-full'>
        <LargeSection />
        <MiniSection />
      </div>
    </div>
  )
}

export default HomepageUser;