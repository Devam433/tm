"use client";
import { motion} from "framer-motion";
const MotionImage = motion.img;
export default function AboutUs() {
  return (
    <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-5xl font-bold text-center mb-8">About Us</h1>

      <section className="space-y-6 flex flex-col gap-6">
        {/* Overview */}
        <div>
          <h2 className="text-3xl font-semibold mb-4">Overview</h2>
          <p className="text-lg text-gray-200">
            TM Talent Management is a talent agency that exclusively manages and
            represents musical talents from India's Bollywood playback and live
            entertainment industry. We focus on building personal relationships
            with our clients and nurturing their talents to bring out the best
            opportunities. Our mission is to become the best talent management
            agency in India, and we prioritise transparency and honesty in our
            relationships with our artists, clients, and employees. The company
            was founded in 2005 and has grown to have an exalted list of talent
            from the Indian entertainment industry. Through our passion and
            unwavering dedication, we aim to leave a lasting impact on Bollywood
            & India’s entertainment landscape and inspire the next generation of
            talent.
          </p>
        </div>

        {/* Tarsame Mittal | Founder */}
        <div>
          <h2 className="text-3xl font-semibold mb-4">Tarsame Mittal | Founder</h2>
          <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
            <div className="space-y-4 text-gray-200 text-lg">
              <div className="w-[200px] h-[200px] float-left">
                <MotionImage
                  src="/images/OwnerImage.jpeg"
                  alt="Tarsame Mittal Event"
                  className="w-full h-full object-contain rounded-[50%] mr-3"
                />
              </div>
              <p>
                Tarsame Mittal is a music industry visionary and entrepreneur
                who founded TM Talent Management. Over the past two decades, he
                has built a reputation for exceptional leadership and passion
                for creating innovative solutions in the entertainment industry.
              </p>
              <p>
                Under his leadership, TM Venture has developed a diverse
                portfolio of businesses, ranging from music artist management
                and event production to building B2B and B2C IPs. TM Talent
                Management, in particular, has become a powerhouse in the
                Indian Music and Live Entertainment Industry, managing some of
                the most successful artists in the business.
              </p>
              <p>
                Universal Music Group recently acquired a stake in TM ventures,
                recognising the company’s outstanding track record of success
                and potential for future growth. With a laser focus on nurturing
                talent and building strong relationships with clients and
                partners, Mittal is poised to continue disrupting the music
                industry and inspiring a new generation of artists and
                entrepreneurs.
              </p>
            </div>
          </div>
        </div>

        {/* Alaap Gosher | Co-Founder */}
        <div>
          <h2 className="text-3xl font-semibold mb-4">Alaap Gosher | Co-Founder</h2>
          <p className="text-lg text-gray-200">
            TM Talent Management is a talent agency that exclusively manages and
            represents musical talents from India's Bollywood playback and live
            entertainment industry. We focus on building personal relationships
            with our clients and nurturing their talents to bring out the best
            opportunities. Our mission is to become the best talent management
            agency in India, and we prioritise transparency and honesty in our
            relationships with our artists, clients, and employees. The company
            was founded in 2005 and has grown to have an exalted list of talent
            from the Indian entertainment industry. Through our passion and
            unwavering dedication, we aim to leave a lasting impact on Bollywood
            & India’s entertainment landscape and inspire the next generation of
            talent.
          </p>
        </div>

        {/* Saurabh Abbi | CEO */}
        <div>
          <h2 className="text-3xl font-semibold mb-4">Saurabh Abbi | CEO</h2>
          <p className="text-lg text-gray-200">
            Saurabh Abbi is an accomplished business leader with a wealth of
            experience in the music and entertainment industry. As the Partner
            & co-CEO of TM Ventures, Abbi oversees various functions, including
            talent management, intellectual property creation, and consulting.
          </p>
          <p className="text-lg text-gray-200">
            Abbi's keen sense of the industry's pulse has enabled him to
            identify and develop several successful IPs resonating with
            audiences worldwide. Under his leadership, TM Talent Management has
            emerged as one of the leading talent agencies in India,
            representing some of the biggest names in the industry.
          </p>
        </div>
      </section>
    </div>
  );
}
