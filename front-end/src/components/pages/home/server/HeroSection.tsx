import React from 'react';

export const HeroSection = () => {
  return (
    <section className="section pt-14">
      <div className="container mx-auto">
        <div className="flex flex-col gap-4 items-center">
          {/* Heading and Description */}
          <div className="lg:w-7/12 md:w-9/12 mb-8 text-center">
            <h1 className="mb-4 text-3xl lg:text-5xl font-bold">The Ultimate Platform for Online English B2 Tests</h1>
            <p className="mb-8 text-lg text-gray-600">
              TestMaster is a comprehensive online platform designed to help users practice and improve their English B2 level skills,
              offering full support for the four key areas: Listening, Speaking, Reading, and Writing.
            </p>
            <a
              className="btn btn-primary inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
              href="https://github.com/zeon-studio/hugoplate"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Started for Free
              <i className="fa fa-arrow-right pl-2"></i>
            </a>
          </div>

          {/* Banner Image */}
          <div className="w-full">
            <picture>
              {/* For small devices */}
              <source srcSet="https://hugoplate.netlify.app/images/banner_hu13533946027924257200.webp" media="(max-width: 575px)" />
              {/* For tablets */}
              <source srcSet="https://hugoplate.netlify.app/images/banner_hu13533946027924257200.webp" media="(max-width: 767px)" />
              {/* For medium devices */}
              <source srcSet="https://hugoplate.netlify.app/images/banner_hu13533946027924257200.webp" media="(max-width: 991px)" />
              {/* Default large image */}
              <source srcSet="https://hugoplate.netlify.app/images/banner_hu13533946027924257200.webp" />
              <img
                loading="eager"
                decoding="async"
                src="https://hugoplate.netlify.app/images/banner_hu13533946027924257200.webp"
                className="mx-auto lg:max-w-4xl"
                alt="Banner image"
                width="1206"
                height="553"
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
};
