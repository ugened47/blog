import Image from '@/components/Image'

const Hero = () => {
  return (
    <section className="grid lg:grid-rows-1 lg:grid-cols-2 items-center justify-between py-8 min-w-screen">
      <div className="flex flex-col items-start justify-center w-full h-full pr-8 mb-10 xl:mb-0">
        <div className="flex flex-col md:flex-row justify-start md:items-center">
          <div className="w-30 h-30">
            <Image
              src="/static/images/avatar.jpeg"
              alt="Eugene Domotenko"
              className="border-2 border-gray-200 rounded-full w-32 h-32 shadow-md"
              width={96}
              height={96}
              layout="fixed"
              quality={60}
              priority
              loading="eager"
            />
          </div>
          <h2 className="md:ml-2 text-2xl font-extrabold font-display leading-tight sm:text-3xl sm:leading-none md:text-4xl">
            Eugene Domotenko
          </h2>
        </div>
        <p className="mt-6 text-lg ">
          Professional full-stack web developer who loves building things using Ruby on Rails,
          Node.js, React and Flutter
        </p>
        <p className="mt-8 text-sm text-gray-400 dark:text-gray-400">
          Topics: React/Next.js, Ruby on Rails, Flutter, marketplace development, Sharetribe Flex.
        </p>
      </div>
    </section>
  )
}

export default Hero
