import React from 'react';
import carrot from "../../../assets/images/carrot_header_image.jpg";

const Banner = () => {
  const listItemClassName = 'text-2xl';

  return (
    <div className="flex w-full h-auto gap-36">
      <img src={carrot} className="w-auto" style={{height: '530px'}} alt="Carrots"></img>

      <div className="flex flex-col gap-12">
        <h1 className="text-5xl font-bold">Morkva Enterprise</h1>

        <ul className="flex flex-col gap-6 list-disc ml-8">
          <li className={ listItemClassName }><strong>Morkva Enterprise</strong> is a company that specializes in selling high-quality carrots and carrot products.</li>
          <li className={ listItemClassName }> <strong>Morkva Enterprise</strong> offers a variety of carrots, from fresh and organic to processed and flavored, to suit your needs and preferences.</li>
          <li className={ listItemClassName }> <strong>Morkva Enterprise</strong> delivers carrots to your doorstep, with fast and reliable service and competitive prices.</li>
          <li className={ listItemClassName }> <strong>Morkva Enterprise</strong> is more than just a carrot seller. It is a community of carrot lovers who share recipes, tips, and stories about their favorite vegetable.</li>
        </ul>
      </div>
    </div>
  );
};

export default Banner;