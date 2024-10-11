// src/components/SocialIcons.js
import React from "react";
import "./SocialIcons.css";

const SocialIcons = () => {
  return (
    <div className="social-icons">
      <a
        href="https://github.com/fadymorcos21"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <svg
          className="icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 0C5.373 0 0 5.373 0 12c0 5.304 3.438 9.8 8.207 11.387.6.111.82-.26.82-.578 0-.286-.01-1.043-.015-2.05-3.338.725-4.042-1.61-4.042-1.61-.546-1.386-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.204.084 1.838 1.236 1.838 1.236 1.07 1.834 2.808 1.304 3.49.997.108-.776.418-1.305.76-1.605-2.665-.303-5.466-1.332-5.466-5.93 0-1.31.468-2.381 1.236-3.221-.124-.303-.536-1.52.117-3.167 0 0 1.008-.323 3.302 1.23.96-.267 1.987-.4 3.008-.404 1.02.004 2.047.137 3.008.404 2.293-1.553 3.3-1.23 3.3-1.23.655 1.647.243 2.864.12 3.167.77.84 1.235 1.911 1.235 3.221 0 4.61-2.804 5.624-5.475 5.92.43.37.816 1.1.816 2.22 0 1.606-.015 2.898-.015 3.293 0 .32.218.694.825.576C20.565 21.795 24 17.3 24 12 24 5.373 18.627 0 12 0z" />
        </svg>
      </a>

      <a
        href="https://www.linkedin.com/in/fady-morcos-b6b507170/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <svg
          className="icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.172c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.172h-3v-5.646c0-1.351-.025-3.089-1.883-3.089-1.883 0-2.172 1.469-2.172 2.987v5.748h-3v-10h2.871v1.354h.041c.399-.757 1.375-1.553 2.832-1.553 3.027 0 3.586 1.993 3.586 4.584v5.615z" />
        </svg>
      </a>

      <a
        href="https://leetcode.com/fadym12/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LeetCode"
      >
        <img src="/images/leetcode.svg" alt="LeetCode" className="icon" />
      </a>
    </div>
  );
};

export default SocialIcons;
