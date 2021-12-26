import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import { PageSeo } from '@/components/SEO'

export default function About() {
  return (
    <>
      <PageSeo
        title={`About - ${siteMetadata.author}`}
        description={`About me - ${siteMetadata.author}`}
        url={`${siteMetadata.siteUrl}/about`}
      />
      <div className="divide-y">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8 space-x-2">
            <img src={siteMetadata.image} alt="avatar" className="w-48 h-48 rounded-full" />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
              {siteMetadata.author}
            </h3>
            <div className="text-gray-500 dark:text-gray-400">Software Engineer</div>
            <div className="text-gray-500 dark:text-gray-400">Super Secret Company Ltd</div>
            <div className="flex pt-6 space-x-3">
              <SocialIcon kind="linkedin" href={siteMetadata.linkedin} />
              <SocialIcon kind="twitter" href={siteMetadata.twitter} />
            </div>
          </div>
          <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">
            <p>
              Vishal Soomaney is a Software Engineer at the London tech startup "".
              In his current role he primarily works on Python backends running on GCP
              and is involved in development of logistics and payment systems.
            </p>
            <p>
              He has previously worked as an award-winning Software Engineer at Amadeus IT where he worked on Seat Allocation and
              Boarding systems for airlines as well as development infrastructure, application toolchain, Kafka and CI/CD across the London, 
              Nice (France) and Sydney (Australia) sites.    
            </p>
            <p>
              He's also been the CTO of the Northern Blockchain Group where he organised conferences, gave trainings and did 
              Solidity Blockchain development for the Hamburg Chamber of Commerce and VeridenKey, placing 2nd at a ECB competition in the process.
            </p>
            <p>
              Vishal is a University of York graduate where he was the Computer Science Course Representative,
              President of the Blockchain Development and Research Society and Vice-President of the Japanese Society.
            </p>
            <p>
              If attempting to track him down, he can often be found rock climbing, kickboxing or playing tennis across London!
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
