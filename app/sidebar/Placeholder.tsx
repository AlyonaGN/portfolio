import './Placeholder.css';

export const Placeholder = () => {
  return (
    <div className="relative h-96 w-full overflow-hidden">
      <svg
        className="blob absolute inset-0 h-full w-full transform-gpu transition-transform duration-500 ease-in-out hover:scale-105"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="animate-blob fill-current text-yellow-400"
          d="M44.8,-67.9C56.6,-60.6,63.8,-47.6,68.5,-34.7C73.2,-21.7,75.4,-10.8,73.6,0.4C71.9,11.7,66.2,23.3,58.4,32.6C50.6,41.9,40.6,48.8,30.1,52.7C19.6,56.7,9.8,57.7,-1.2,59.5C-12.3,61.4,-24.7,63.9,-36.8,61.2C-48.9,58.6,-60.6,50.9,-69.5,40.5C-78.4,30,-84.5,16.9,-86.4,3.2C-88.3,-10.4,-86,-24.7,-78.1,-35.8C-70.1,-46.9,-56.5,-54.8,-43.4,-62.4C-30.2,-70.1,-15.1,-77.5,0.1,-77.6C15.3,-77.7,30.7,-70.5,44.8,-67.9Z"
          transform="translate(100 100)"
        />
      </svg>
    </div>
  );
};
