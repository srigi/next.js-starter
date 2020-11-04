import { FunctionComponent } from 'react';

const LoaderCircle: FunctionComponent = () => (
  <>
    {/* language=CSS */}
    <style jsx>{`
      @-moz-keyframes circle {
        0% {
          -webkit-transform: rotate(0);
          -ms-transform: rotate(0);
          -o-transform: rotate(0);
          transform: rotate(0);
        }
        100% {
          -webkit-transform: rotate(360deg);
          -ms-transform: rotate(360deg);
          -o-transform: rotate(360deg);
          transform: rotate(360deg);
        }
      }
      @-o-keyframes circle {
        0% {
          -webkit-transform: rotate(0);
          -ms-transform: rotate(0);
          -o-transform: rotate(0);
          transform: rotate(0);
        }
        100% {
          -webkit-transform: rotate(360deg);
          -ms-transform: rotate(360deg);
          -o-transform: rotate(360deg);
          transform: rotate(360deg);
        }
      }
      @-webkit-keyframes circle {
        0% {
          -webkit-transform: rotate(0);
          -ms-transform: rotate(0);
          -o-transform: rotate(0);
          transform: rotate(0);
        }
        100% {
          -webkit-transform: rotate(360deg);
          -ms-transform: rotate(360deg);
          -o-transform: rotate(360deg);
          transform: rotate(360deg);
        }
      }
      @keyframes circle {
        0% {
          -webkit-transform: rotate(0);
          -ms-transform: rotate(0);
          -o-transform: rotate(0);
          transform: rotate(0);
        }
        100% {
          -webkit-transform: rotate(360deg);
          -ms-transform: rotate(360deg);
          -o-transform: rotate(360deg);
          transform: rotate(360deg);
        }
      }

      .circle {
        -webkit-animation: circle infinite 0.95s linear;
        -moz-animation: circle infinite 0.95s linear;
        -o-animation: circle infinite 0.95s linear;
        animation: circle infinite 0.95s linear;
        border: 2px solid #333;
        border-top-color: rgba(0, 0, 0, 0.2);
        border-right-color: rgba(0, 0, 0, 0.2);
        border-bottom-color: rgba(0, 0, 0, 0.2);
        border-radius: 100%;
        height: 50px;
        left: 50%;
        margin-left: -25px;
        margin-top: -25px;
        position: absolute;
        top: 50%;
        width: 50px;
      }
    `}</style>

    <div className="circle" />
  </>
);

export default LoaderCircle;
