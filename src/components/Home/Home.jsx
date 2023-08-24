import React from "react";
import "./Home.scss";
import vg from "../../assests/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillCodepenCircle,
  AiFillMediumCircle,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>HarryTech</h1>
          <p>Solution to all you problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            We are your one and only solution to tech problems you face eveny
            day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who are we?</h1>
          <p>
            Round-Robin scheduling ensures even distribution of calls across
            your team. Collective availability makes it easy to book your team
            when everyone is available.Ensure every booker is connected to the
            right person with Routing Forms. Ask screening questions and
            automatically connect bookers to the right person, event or even to
            a link.Limit people from overbooking you on a weekly or daily basis.
            Put breathing room between meetings with buffers either side and
            prevent surprises with minimum notice periods.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{
                animationDelay: "0.3s"
            }}>
                <AiFillGoogleCircle />
                <p>Google</p>
            </div>
            <div style={{
                animationDelay: "0.5s"
            }}>
                <AiFillAmazonCircle />
                <p>Amazon</p>
            </div>
            <div style={{
                animationDelay: "0.7s"
            }}>
                <AiFillCodepenCircle />
                <p>CodePen</p>
            </div>
            <div style={{
                animationDelay: "1s"
            }}>
                <AiFillMediumCircle />
                <p>Medium</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
