import React from 'react'
import Image from 'next/image';

const imageSrc = [
    {
        title: 'pic1',
        src: 'https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fprovider-static.plex.tv%2Fepg%2Fcms%2Fproduction%2Fd0cdfa86-4137-4921-b590-7904a34f4867%2FIon_Mystery_PLEX_1920x1080.jpg'
    },
    {
        title: 'pic1',
        src: 'https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fprovider-static.plex.tv%2Fepg%2Fimages%2Fott_channels%2Farts%2FstoriesbyAMC_artwork_horizontal.jpg'
    },
    {
        title: 'pic1',
        src: 'https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fprovider-static.plex.tv%2Fepg%2Fcms%2Fproduction%2Fd99b63d5-c093-49b2-8e24-db251e5280c0%2FIon-Horizontal-Default-Art---3840x2160px.jpg'
    },
    {
        title: 'pic1',
        src: 'https://images.plex.tv/photo?size=medium-360&scale=1&url=https%3A%2F%2Fprovider-static.plex.tv%2Fepg%2Fcms%2Fproduction%2F8f37157f-c4ef-4931-8c0f-79c2d1f7102c%2FHMMore_PLEX_Evergreen_Refresh_3840x2160.jpg'
    }
]

const ExploreMore = () => {
    return (
      <div 
        className='
            p-4 
            font-bold 
            rounded-lg 
            flex 
            items-center 
            justify-center 
            mt-10
            w-full
            sm:w-1/3
            text-white
            font-serif
             bg-orange-500
          '
      >
        Explore More
      </div>
    )
  }

const ContentSection = () => {
    return (
        <div
            className='
                flex
                flex-col
                gap-8
                mt-10
                items-center
                p-10
                relative
                bg-neutral-300
        '
        >
            <div className='text-4xl font-serif text-center'>
                Become a member of Screenflicks!
            </div>
            <div className='text-lg font-serif text-center'>
                Enjoy instant access to 600+ channels for the whole family anywhere, on any device, only $9.99 a month!
            </div>
            <div className='flex items-center justify-center'>
                <div
                    className='
                        grid 
                        grid-cols-1 
                        sm:grid-cols-2 
                        md:grid-cols-4
                        gap-4 
                        px-10
                '
                >
                    {
                        imageSrc.map((item, index) => {
                            return (
                                <Image
                                    width={300}
                                    height={200}
                                    src={item.src}
                                    alt='pic1'
                                    key={index}
                                />
                            )
                        })
                    }
                </div>
            </div>
            <div className="flex items-center justify-center w-full">
                <ExploreMore/>
            </div>
        </div>
    )
}

export default ContentSection;
