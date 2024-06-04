import ESGHead from '@/components/PageComponents/BuyerDashboard/Micro/ESGHelpHead';


const Question = ({ question, answer }: { question: string; answer: string }) => {
  return (
    <div>
      <p className='text-pri font-semibold'>{question}</p>
      <p className='text-white mt-[1rem]'>
        {answer}
      </p>
    </div>
  )
}

const ESGHelp = () => {
  return (
    <div className='bg-black w-full min-h-[100vh] px-[5vw] py-[5vh] '>
      <ESGHead />
      <div className='w-full md:flex-row flex-col flex gap-[1rem] mt-[2rem]'>
        <div className='md:w-[50%] w-full flex flex-col gap-[2rem] bg-[#2d2d2d] p-[5%]'>
          <Question
            question='How to build an ESG Report on Zero Carbon One platform'
            answer='Building an ESG (Environmental, Social, and Governance) report can be a complex process, but Zero Carbon One simplifies it with an AI-assisted online report generator.'
          />
          <Question
            question='Understand the Standards'
            answer={`Zero Carbon One's platform automatically aligns with international standards such as GRI, SASB, TCFD, BRSR, and UN SDGs, removing the need for brands to familiarize themselves with these complexities.`}
          />
          <Question
            question='Input Business Information'
            answer='Enter your company’s business activity and industry details. The AI tool uses this information to tailor the report to your specific business context.'
          />
          <Question
            question='Utilize the AI Tool'
            answer='Zero Carbon One’s advanced AI LLM tool, trained on over One million tokens, intelligently assists in constructing your report.'
          />
          <Question
            question='Work at Your Pace'
            answer='You can begin your report and save your progress, ensuring you can conveniently complete it at your own pace, all the way to the "Generate Report" tab.'
          />
        </div>
        <div className='md:w-[50%] w-full flex flex-col gap-[2rem] bg-[#2d2d2d] p-[5%]'>
          <Question
            question='Access Detailed Insights'
            answer='The platform provides a thorough breakdown of sections such as IT security, supply chain management, UN SDGs, and Gap analysis without needing in-depth expertise.'
          />
          <Question
            question='Manage Carbon Accounting Effortlessly'
            answer='Calculate your Scope 1, 2, and 3 GHG emissions with the tool’s assistance. It simplifies carbon accounting and offers options to offset emissions directly on the platform.'
          />
          <Question
            question='Automatic Emission Offsetting'
            answer='Once emissions are calculated, you can offset them, and the platform will include the certified token hash in the report for transparency.'
          />
          <Question
            question='Generate Your Report'
            answer='With all the necessary data entered, generate your comprehensive ESG report with the click of a button.'
          />
          <Question
            question='Refine and Improve'
            answer='Review the generated report, refine it as needed, and take advantage of AI-driven suggestions for continuous improvement.'
          />
          <Question
            question='Finalize and Publish'
            answer='Finalize your report, ensuring all data is accurate and well-presented. Publish it to share with stakeholders and the public.'
          />
        </div>
      </div>
    </div>
  )
}

export default ESGHelp