const AnimatedBackground = () => {
    return (
      <div className="absolute inset-0 -z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          viewBox="0 0 1440 600"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop
                offset="0%"
                style={{ stopColor: "rgb(10,29,55)", stopOpacity: 1 }}
              >
                <animate
                  attributeName="stop-color"
                  values="rgb(10,29,55);rgb(50,75,110);rgb(10,29,55)"
                  dur="5s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop
                offset="100%"
                style={{ stopColor: "rgb(5,15,40)", stopOpacity: 1 }}
              >
                <animate
                  attributeName="stop-color"
                  values="rgb(5,15,40);rgb(20,40,80);rgb(5,15,40)"
                  dur="5s"
                  repeatCount="indefinite"
                />
              </stop>
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#bgGradient)" />
          <circle
            cx="200"
            cy="300"
            r="80"
            fill="rgba(255, 255, 255, 0.3)"
          >
            <animate
              attributeName="cx"
              values="200;1200;200"
              dur="10s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      </div>
    );
  };
  
  export default AnimatedBackground;
  