import { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Testimonial = () => {
  useEffect(() => {
    new Swiper('.swiper-container', {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 32,
      autoplay: {
        delay: 8000,
      },
      breakpoints: {
        640: {
          centeredSlides: true,
          slidesPerView: 1.25,
        },
        1024: {
          centeredSlides: false,
          slidesPerView: 1.5,
        },
      },
      navigation: {
        nextEl: '.next-button',
        prevEl: '.prev-button',
      },
    });
  }, []);

  return (
    <section className="bg-gray-100">
      <div className="mx-auto max-w-[1340px] px-4 py-16 sm:px-6 sm:py-24 lg:me-0 lg:pe-0 lg:ps-8">
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-3 lg:items-center lg:gap-x-16">
          <div className="text-center ltr:sm:text-left rtl:sm:text-right mx-auto max-w-screen-xl">
          <h2 className="text-2xl font-bold tracking-tight sm:text-4xl">
            Don't just take our word for it...
            <br className="hidden sm:block" />
            <span className="hidden sm:block lg:hidden">Read reviews from our clients</span>
            </h2>

            <p className="mt-4 text-gray-500">
            Discover your perfect university match on our website. Book your spot now and unlock a world of transformative educational experiences and endless opportunities for growth.
            </p>
          </div>

          <div className="-mx-6 lg:col-span-2 lg:mx-0">
            <div className="swiper-container overflow-hidden">
              <div className="swiper-wrapper">
                {/* Slide 1 */}
                <div className="swiper-slide">
                  <blockquote className="flex h-full flex-col justify-between bg-white p-12">
                    <div>
                      <div className="flex gap-0.5 text-green-500">
                        {/* Stars or other icons */}
                      </div>

                      <div className="mt-4">
                        <p className="text-2xl font-bold text-pink-600 sm:text-3xl">Stayin' Alive</p>

                        <p className="mt-4 leading-relaxed text-gray-500">
                          No, Rose, they are not breathing. And they have no arms or legs…
                          Where are they? You know what? If we come across somebody
                          with no arms or legs, do we bother resuscitating them? I mean,
                          what quality of life do we have there?
                        </p>
                      </div>
                    </div>

                    <footer className="mt-8 text-sm text-gray-500">&mdash; Michael Scott</footer>
                  </blockquote>
                </div>

                {/* Slide 2 */}
                <div className="swiper-slide">
                  <blockquote className="flex h-full flex-col justify-between bg-white p-12">
                    <div>
                      <div className="flex gap-0.5 text-green-500">
                        {/* Stars or other icons */}
                      </div>

                      <div className="mt-4">
                        <p className="text-2xl font-bold text-pink-600 sm:text-3xl">Stayin' Alive</p>

                        <p className="mt-4 leading-relaxed text-gray-500">
                          No, Rose, they are not breathing. And they have no arms or legs…
                          Where are they? You know what? If we come across somebody
                          with no arms or legs, do we bother resuscitating them? I mean,
                          what quality of life do we have there?
                        </p>
                      </div>
                    </div>

                    <footer className="mt-8 text-sm text-gray-500">&mdash; Michael Scott</footer>
                  </blockquote>
                </div>

                {/* Slide 3 */}
                <div className="swiper-slide">
                  <blockquote className="flex h-full flex-col justify-between bg-white p-12">
                    <div>
                      <div className="flex gap-0.5 text-green-500">
                        {/* Stars or other icons */}
                      </div>

                      <div className="mt-4">
                        <p className="text-2xl font-bold text-pink-600 sm:text-3xl">Stayin' Alive</p>

                        <p className="mt-4 leading-relaxed text-gray-500">
                          No, Rose, they are not breathing. And they have no arms or legs…
                          Where are they? You know what? If we come across somebody
                          with no arms or legs, do we bother resuscitating them? I mean,
                          what quality of life do we have there?
                        </p>
                      </div>
                    </div>

                    <footer className="mt-8 text-sm text-gray-500">&mdash; Michael Scott</footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
