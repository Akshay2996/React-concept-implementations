import React from "react";
import "../styles/Home.css";

export default function Home() {
  localStorage.removeItem("token");
  return (
    <div className="image-carousel">
      <div className="slider">
        <a href="#slide-1">1</a>
        <a href="#slide-2">2</a>
        <a href="#slide-3">3</a>
        <a href="#slide-4">4</a>
        <a href="#slide-5">5</a>

        <div className="slides">
          <div id="slide-1">
            <img
              alt="image1"
              src="https://images.unsplash.com/photo-1609265875325-fa17bee068d7?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8NnNNVmpUTFNrZVF8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            />
          </div>
          <div id="slide-2">
            <img
              alt="landscape"
              src="https://images.unsplash.com/photo-1609349915355-9c132d7d09f6?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8NnNNVmpUTFNrZVF8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            />
          </div>
          <div id="slide-3">
            <img
              alt="landscape"
              src="https://images.unsplash.com/photo-1609004150882-eb9bbe5beef0?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfDZzTVZqVExTa2VRfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            />
          </div>
          <div id="slide-4">
            <img
              alt="landscape"
              src="https://images.unsplash.com/photo-1609058760892-f01c6b9d0d75?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDE5fDZzTVZqVExTa2VRfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            />
          </div>
          <div id="slide-5">
            <img
              alt="landscape"
              src="https://images.unsplash.com/photo-1604567222864-0416964276a4?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDI3fDZzTVZqVExTa2VRfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
