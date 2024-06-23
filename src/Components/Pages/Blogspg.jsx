import React from "react";
// import SEO from "../SEO/SEO";
import AppLayout from "../AppLayout";
import slidesData from "../Mock/Blog";
import { useParams } from "react-router-dom";
import imgblog from "../assites/blog.jpg";
const Blogspg = () => {
  const { id } = useParams();
  const Bloge = slidesData.find((p) => p.id === parseInt(id));

  if (!Bloge) {
    return <div>not found....</div>;
  }
  return (
    <div>
      {/* <SEO
        title="Blog"
        description="Welcome to Bizzata Bizzata—a trailblazing platform redefining the
            landscape of online commerce and business management. In an
            ever-evolving digital marketplace, where competition is fierce and
            consumer expectations are at an all-time high, Bizzata Bizzata
            emerges as a beacon of innovation, seamlessly integrating diverse
            facets of business operations onto a single, intuitive interface."
        name="Your Twitter Handle"
        type="article"
        keyword="hst,pst,akst,sst"
      /> */}

      <div className="">
        <AppLayout>
          <div className="md:mx-4 mx-2 sm:mx-3">
            <div className=" grid grid-cols-1 sm:grid-cols-2  gap-2 mt-8">
              <div className="">
                <img src={imgblog} alt="" className="h-[90%] w-[90%] rounded" />
              </div>
              <div className="my-5 text-[18px] font-normal">
                <li className="pb-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo, eum illum iste voluptate asperiores corrupti eius
                  suscipit numquam omnis alias consequuntur ut, sequi, corporis
                  quibusdam. Vel excepturi officia reprehenderit animi.
                </li>

                <li className="pb-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo, eum illum iste voluptate asperiores corrupti eius
                  suscipit numquam omnis alias consequuntur ut, sequi, corporis
                  quibusdam. Vel excepturi officia reprehenderit animi.
                </li>

                <li className="pb-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo, eum illum iste voluptate asperiores corrupti eius
                  suscipit numquam omnis alias consequuntur ut, sequi, corporis
                  quibusdam. Vel excepturi officia reprehenderit animi.
                </li>
              </div>
            </div>
            <li className="pb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo, eum illum iste voluptate asperiores corrupti eius
              suscipit numquam omnis alias consequuntur ut, sequi, corporis
              quibusdam. Vel excepturi officia reprehenderit animi.
            </li>

            <li className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo, eum illum iste voluptate asperiores corrupti eius
              suscipit numquam omnis alias consequuntur ut, sequi, corporis
              quibusdam. Vel excepturi officia reprehenderit animi.
            </li>

            <li className="pb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo, eum illum iste voluptate asperiores corrupti eius
              suscipit numquam omnis alias consequuntur ut, sequi, corporis
              quibusdam. Vel excepturi officia reprehenderit animi.
            </li>

            <li className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo, eum illum iste voluptate asperiores corrupti eius
              suscipit numquam omnis alias consequuntur ut, sequi, corporis
              quibusdam. Vel excepturi officia reprehenderit animi.
            </li>

            <li className="pb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo, eum illum iste voluptate asperiores corrupti eius
              suscipit numquam omnis alias consequuntur ut, sequi, corporis
              quibusdam. Vel excepturi officia reprehenderit animi.
            </li>

            <li className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo, eum illum iste voluptate asperiores corrupti eius
              suscipit numquam omnis alias consequuntur ut, sequi, corporis
              quibusdam. Vel excepturi officia reprehenderit animi.
            </li>

            <li className="pb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo, eum illum iste voluptate asperiores corrupti eius
              suscipit numquam omnis alias consequuntur ut, sequi, corporis
              quibusdam. Vel excepturi officia reprehenderit animi.
            </li>

            <li className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo, eum illum iste voluptate asperiores corrupti eius
              suscipit numquam omnis alias consequuntur ut, sequi, corporis
              quibusdam. Vel excepturi officia reprehenderit animi.
            </li>

            <li className="pb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo, eum illum iste voluptate asperiores corrupti eius
              suscipit numquam omnis alias consequuntur ut, sequi, corporis
              quibusdam. Vel excepturi officia reprehenderit animi.
            </li>
          </div>
        </AppLayout>
      </div>
    </div>
  );
};

export default Blogspg;
