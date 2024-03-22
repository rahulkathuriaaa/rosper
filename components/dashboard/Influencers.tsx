import React from 'react'
import CardsInfluencersForBrands from '../cards/CardsInfluencersForBrands'

function Influencers() {
  return (
    <div className='w-[98%] flex flex-col pt-10 pb-6 gap-6'>
      <div className='text-white text-3xl font-semibold'>Influencers Portfolio</div>
      <div className='flex gap-6 flex-wrap'>
        <CardsInfluencersForBrands image={"/icons/ProfileIcon.svg"} name="Micheal Wong" description="An example description will go here" followers={"45689"} />
        <CardsInfluencersForBrands image={"HiredCharts.svg"} name="Yugank" description="An example description will go here" followers={"45689"} />
        <CardsInfluencersForBrands image={"/icons/ProfileIcon.svg"} name="Rahul" description="An example description will go here" followers={"45689"} />
        <CardsInfluencersForBrands image={"/icons/ProfileIcon.svg"} name="Ansh" description="An example description will go here" followers={"45689"} />
        <CardsInfluencersForBrands image={"/icons/ProfileIcon.svg"} name="Kishen" description="An example description will go here" followers={"45689"} />
        <CardsInfluencersForBrands image={"/icons/ProfileIcon.svg"} name="Saksham" description="An example description will go here" followers={"45689"} />
        <CardsInfluencersForBrands image={"/icons/ProfileIcon.svg"} name="Saksham" description="An example description will go here" followers={"45689"} />
        <CardsInfluencersForBrands image={"/icons/ProfileIcon.svg"} name="Saksham" description="An example description will go here" followers={"45689"} />
        <CardsInfluencersForBrands image={"/icons/ProfileIcon.svg"} name="Saksham" description="An example description will go here" followers={"45689"} />
      </div>
    </div>
  )
}

export default Influencers
