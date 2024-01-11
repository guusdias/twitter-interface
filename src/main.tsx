import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import TwitterLogo from "./assets/twitter-logo.svg";
import { Bell, BookmarkSimple, DotsThreeCircle, Envelope, FileText, Hash, House, Sparkle, User } from "phosphor-react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="layout">
      <aside className="sidebar">
        <img className="logo" src={TwitterLogo} alt="Logo" />
        <nav className="main-navigation">
          <a className="active" href="">
            <House weight="fill"/>
            Home</a>
          <a href="">
            <Hash />
            Explore</a>
          <a href="">
            <Bell/>
            Notifications</a>
          <a href="">
            <Envelope/>
            Messages</a>
          <a href="">
            <BookmarkSimple/>
            Bookmarks</a>
          <a href="">
            <FileText/>
            Lists</a>
          <a href="">
            <User/>
            Profile</a>
          <a href="">
            <DotsThreeCircle/>
            More</a>
        </nav>
        <button className="new-tweet">Tweet</button>
      </aside>
      <div className="content">
        <main className="timeline">
          <div className="timeline-header">Home
          <Sparkle/></div>
          <form action="" className="new-tweet-form">
            <label htmlFor="tweet">
              <img src="https://github.com/guusdias.png" alt="Gustavo Dias" />
              <textarea id="tweet" placeholder="What's happening?"></textarea>
            </label>
            <button type="submit">Tweet</button>
          </form>
        </main>
      </div>
    </div>
  </React.StrictMode>
);
