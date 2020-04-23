import React from "react";
import { SocialIcon } from "react-social-icons";

import { Layout } from "../components/layout";

import "./index.css";

const Home = () => (
  <Layout>
    <div className="home-background">
      <div className="home-container">
        <h1 className="home-title">
          <span className="has-secondary-color">Hello,</span> I'm
          <br /> Alex Vladut
        </h1>
        <div className="home-social-media">
          <span>
            {"/ "}
            <SocialIcon
              url="https://www.linkedin.com/in/alexandru-vladut/"
              style={{ height: "1.25em", width: "1.25em" }}
            />
            {" LinkedIn"}
          </span>
          <span>
            /{" "}
            <SocialIcon
              url="https://github.com/alex-vladut"
              style={{ height: "1.25em", width: "1.25em" }}
            />
            {" GitHub"}
          </span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
          dignissimos aut consequuntur aspernatur corrupti ratione, odit
          similique tenetur accusantium, est nostrum esse minus iure voluptatum
          nihil cumque blanditiis non? Odit.
        </p>
      </div>
    </div>

    <div className="home-services">
      <span>services</span>
      <h2>
        <span className="has-secondary-color">Our</span> Services
      </h2>
      <section className="home-services-items">
        <div>
          <div className="icon has-secondary-color">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              {" "}
              <path
                fill="currentColor"
                d="M11.5 14h-8c-0.827 0-1.5-0.673-1.5-1.5v-8c0-0.827 0.673-1.5 1.5-1.5h13c0.827 0 1.5 0.673 1.5 1.5v1c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5v-1c0-0.276-0.224-0.5-0.5-0.5h-13c-0.276 0-0.5 0.224-0.5 0.5v8c0 0.276 0.224 0.5 0.5 0.5h8c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
              ></path>{" "}
              <path
                fill="currentColor"
                d="M11.5 18h-10c-0.827 0-1.5-0.673-1.5-1.5v-1c0-0.276 0.224-0.5 0.5-0.5h11c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-10.5v0.5c0 0.276 0.224 0.5 0.5 0.5h10c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
              ></path>{" "}
              <path
                fill="currentColor"
                d="M18.5 18h-4c-0.827 0-1.5-0.673-1.5-1.5v-8c0-0.827 0.673-1.5 1.5-1.5h4c0.827 0 1.5 0.673 1.5 1.5v8c0 0.827-0.673 1.5-1.5 1.5zM14.5 8c-0.276 0-0.5 0.224-0.5 0.5v8c0 0.276 0.224 0.5 0.5 0.5h4c0.276 0 0.5-0.224 0.5-0.5v-8c0-0.276-0.224-0.5-0.5-0.5h-4z"
              ></path>{" "}
              <path
                fill="currentColor"
                d="M16.5 16c-0.132 0-0.26-0.053-0.353-0.147s-0.147-0.222-0.147-0.353 0.053-0.261 0.147-0.353c0.093-0.093 0.222-0.147 0.353-0.147s0.261 0.053 0.353 0.147c0.093 0.093 0.147 0.222 0.147 0.353s-0.053 0.261-0.147 0.353c-0.093 0.093-0.222 0.147-0.353 0.147z"
              ></path>{" "}
            </svg>
          </div>
          <h4 className="title">WEB DESIGN</h4>
          <div className="content">
            Working with client and community, we deliver masterplans that
            create vibrant new places and spaces, attract people, and encourage
            investment through.
          </div>
        </div>
        <div>
          <div className="icon has-secondary-color">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <path
                d="M13.5 16h-7c-0.276 0-0.5-0.224-0.5-0.5v-1c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v0.5h6v-0.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v1c0 0.276-0.224 0.5-0.5 0.5z"
                fill="currentColor"
              ></path>
              <path
                d="M13.5 5c-0.276 0-0.5-0.224-0.5-0.5v-1.5h-6v1.5c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5v-2c0-0.276 0.224-0.5 0.5-0.5h7c0.276 0 0.5 0.224 0.5 0.5v2c0 0.276-0.224 0.5-0.5 0.5z"
                fill="currentColor"
              ></path>
              <path
                d="M10.5 18h-1c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h1c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
                fill="currentColor"
              ></path>
              <path
                d="M14.5 20h-9c-0.827 0-1.5-0.673-1.5-1.5v-4c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v4c0 0.276 0.224 0.5 0.5 0.5h9c0.276 0 0.5-0.224 0.5-0.5v-4c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5v4c0 0.827-0.673 1.5-1.5 1.5z"
                fill="currentColor"
              ></path>
              <path
                d="M15.5 5c-0.276 0-0.5-0.224-0.5-0.5v-3c0-0.276-0.224-0.5-0.5-0.5h-9c-0.276 0-0.5 0.224-0.5 0.5v3c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5v-3c0-0.827 0.673-1.5 1.5-1.5h9c0.827 0 1.5 0.673 1.5 1.5v3c0 0.276-0.224 0.5-0.5 0.5z"
                fill="currentColor"
              ></path>
              <path
                d="M6 13c-0.128 0-0.256-0.049-0.354-0.146l-3-3c-0.195-0.195-0.195-0.512 0-0.707l3-3c0.195-0.195 0.512-0.195 0.707 0s0.195 0.512 0 0.707l-2.646 2.646 2.646 2.646c0.195 0.195 0.195 0.512 0 0.707-0.098 0.098-0.226 0.146-0.354 0.146z"
                fill="currentColor"
              ></path>
              <path
                d="M14 13c-0.128 0-0.256-0.049-0.354-0.146-0.195-0.195-0.195-0.512 0-0.707l2.646-2.646-2.646-2.646c-0.195-0.195-0.195-0.512 0-0.707s0.512-0.195 0.707 0l3 3c0.195 0.195 0.195 0.512 0 0.707l-3 3c-0.098 0.098-0.226 0.146-0.354 0.146z"
                fill="currentColor"
              ></path>
              <path
                d="M8.5 13c-0.075 0-0.151-0.017-0.223-0.053-0.247-0.123-0.347-0.424-0.224-0.671l3-6c0.123-0.247 0.424-0.347 0.671-0.224s0.347 0.424 0.224 0.671l-3 6c-0.088 0.175-0.264 0.277-0.448 0.277z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <h4 className="title">WEB DESIGN</h4>
          <div className="content">
            Working with client and community, we deliver masterplans that
            create vibrant new places and spaces, attract people, and encourage
            investment through.
          </div>
        </div>
        <div>
          <div className="icon has-secondary-color">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              {" "}
              <path
                fill="currentColor"
                d="M11.5 14h-8c-0.827 0-1.5-0.673-1.5-1.5v-8c0-0.827 0.673-1.5 1.5-1.5h13c0.827 0 1.5 0.673 1.5 1.5v1c0 0.276-0.224 0.5-0.5 0.5s-0.5-0.224-0.5-0.5v-1c0-0.276-0.224-0.5-0.5-0.5h-13c-0.276 0-0.5 0.224-0.5 0.5v8c0 0.276 0.224 0.5 0.5 0.5h8c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
              ></path>{" "}
              <path
                fill="currentColor"
                d="M11.5 18h-10c-0.827 0-1.5-0.673-1.5-1.5v-1c0-0.276 0.224-0.5 0.5-0.5h11c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5h-10.5v0.5c0 0.276 0.224 0.5 0.5 0.5h10c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"
              ></path>{" "}
              <path
                fill="currentColor"
                d="M18.5 18h-4c-0.827 0-1.5-0.673-1.5-1.5v-8c0-0.827 0.673-1.5 1.5-1.5h4c0.827 0 1.5 0.673 1.5 1.5v8c0 0.827-0.673 1.5-1.5 1.5zM14.5 8c-0.276 0-0.5 0.224-0.5 0.5v8c0 0.276 0.224 0.5 0.5 0.5h4c0.276 0 0.5-0.224 0.5-0.5v-8c0-0.276-0.224-0.5-0.5-0.5h-4z"
              ></path>{" "}
              <path
                fill="currentColor"
                d="M16.5 16c-0.132 0-0.26-0.053-0.353-0.147s-0.147-0.222-0.147-0.353 0.053-0.261 0.147-0.353c0.093-0.093 0.222-0.147 0.353-0.147s0.261 0.053 0.353 0.147c0.093 0.093 0.147 0.222 0.147 0.353s-0.053 0.261-0.147 0.353c-0.093 0.093-0.222 0.147-0.353 0.147z"
              ></path>{" "}
            </svg>
          </div>
          <h4 className="title">WEB DESIGN</h4>
          <div className="content">
            Working with client and community, we deliver masterplans that
            create vibrant new places and spaces, attract people, and encourage
            investment through.
          </div>
        </div>
      </section>
      <p>
        <a className="has-line-before" href="#">
          Download Resume
        </a>
      </p>
    </div>
  </Layout>
);

export default Home;
