import { kv } from "@vercel/kv";
import type { NextApiRequest, NextApiResponse } from 'next';

import { createCanvas } from '@napi-rs/canvas';


type Data = {
  counter: number,
  dataURL: string,
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>
) {
  const cache = await kv.get('counter');
  
  
  let counter: number = +(cache || 0);
  counter += 1;
  await kv.set('counter', counter);


  let cacheDate = await kv.get('sinceDate');
  let now = (new Date()).toLocaleString();

  if(!!!cacheDate) {
    await kv.set('sinceDate', now);
  }
  let since = await kv.get('sinceDate');

  /* const width = 400;
  const height = 40;
  const canvas = createCanvas(width, height);
  const context = canvas.getContext("2d");

  context.fillStyle = "#764abc";
  context.fillRect(0, 0, width, height);
  context.font = "9pt 'Arial'";
  context.textAlign = "left";
  context.fillStyle = "#fff";
  context.fillText(`You are the visitor #${counter} since ${since}`, 30, 15);
  context.fillText(`Made with vercel serverless. Click to check the source.`, 30, 30);
  
  const buffer = await canvas.toBuffer('image/jpeg'); */

  const template = `
  <svg width="465px" height="320.3px" viewBox="0 0 465.085 320.311" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="linearGradient3069" y2="171.19" gradientUnits="userSpaceOnUse" x2="198.02" gradientTransform="matrix(0.79353, 0, 0, 0.79353, 27.46698, 37.982895)" y1="69.139" x1="198.02">
      <stop id="stop4434" stop-color="#e19b9b" offset="0"></stop>
      <stop id="stop4436" stop-color="#c20606" offset="1"></stop>
    </linearGradient>
    <linearGradient id="linearGradient3071" y2="178.81" gradientUnits="userSpaceOnUse" x2="251.91" gradientTransform="matrix(0.79353, 0, 0, 0.79353, 27.46698, 37.982895)" y1="69.88" x1="251.91">
      <stop id="stop4440" stop-color="#fdeded" offset="0"></stop>
      <stop id="stop4442" stop-color="#c92b2b" offset="1"></stop>
    </linearGradient>
  </defs>
  <path id="path4024" style="fill:#980000" d="M 184.986 69.765 C 184.986 69.765 184.986 69.765 184.986 69.765"></path>
  <path id="path4060" style="stroke:url(#linearGradient3071);stroke-width:3.0271;fill:url(#linearGradient3069)" d="M 184.982 95.117 C 184.982 95.117 184.982 95.117 184.982 95.117"></path>
  <title id="title5533">Coffee board </title>
  <path d="M 370.26 6.374 L 44.314 6.374 C 38.01 6.381 32.902 11.76 32.894 18.397 L 32.894 227.5 C 32.902 234.137 38.01 239.515 44.314 239.523 L 370.26 239.523 C 376.564 239.515 381.672 234.137 381.68 227.5 L 381.68 18.397 C 381.672 11.76 376.564 6.381 370.26 6.374 Z M 380.673 227.5 C 380.673 233.555 376.011 238.464 370.26 238.464 L 44.314 238.464 C 38.563 238.464 33.901 233.555 33.901 227.5 L 33.901 89.924 C 33.901 44.365 68.98 7.434 112.252 7.434 L 370.26 7.434 C 376.011 7.434 380.673 12.342 380.673 18.397 L 380.673 227.5 Z" fill="#3f3d56" style=""></path>
  <path d="M 350.888 184.273 L 201.594 184.273 C 198.367 184.269 195.752 181.516 195.748 178.119 L 195.748 127.072 C 195.752 123.674 198.367 120.922 201.594 120.917 L 350.888 120.917 C 354.115 120.922 356.729 123.674 356.733 127.072 L 356.733 178.119 C 356.729 181.516 354.115 184.269 350.888 184.273 Z" fill="#e6e6e6" style=""></path>
  <ellipse cx="118.104" cy="35.45" rx="4.349" ry="4.681" fill="#3f3d56" style=""></ellipse>
  <ellipse cx="103.078" cy="35.45" rx="4.349" ry="4.681" fill="#3f3d56" style=""></ellipse>
  <ellipse cx="88.053" cy="35.45" rx="4.349" ry="4.681" fill="#3f3d56" style=""></ellipse>
  <path d="M 260.22 83.265 L 199.389 83.265 C 196.475 83.265 194.654 79.944 196.111 77.288 C 196.787 76.055 198.037 75.295 199.389 75.295 L 260.22 75.295 C 263.134 75.295 264.954 78.616 263.498 81.272 C 262.821 82.506 261.572 83.265 260.22 83.265 Z" fill="#e6e6e6" style=""></path>
  <path d="M 307.693 96.751 L 199.389 96.751 C 196.475 96.751 194.654 93.431 196.111 90.775 C 196.787 89.542 198.037 88.782 199.389 88.782 L 307.693 88.782 C 310.607 88.782 312.428 92.103 310.97 94.759 C 310.295 95.992 309.045 96.751 307.693 96.751 Z" fill="#e6e6e6" style=""></path>
  <polygon points="90.879 304.74 95.956 304.739 98.371 284.119 90.878 284.119 90.879 304.74" fill="#ffb6b6" style=""></polygon>
  <path d="M 90.7 310.317 L 106.315 310.317 L 106.315 310.109 C 106.314 306.575 103.593 303.71 100.237 303.71 L 100.236 303.71 L 97.384 301.432 L 92.063 303.71 L 90.7 303.71 L 90.7 310.317 Z" fill="#2f2e41" style=""></path>
  <polygon points="61.526 304.74 66.604 304.739 69.019 284.119 61.525 284.119 61.526 304.74" fill="#ffb6b6" style=""></polygon>
  <path d="M 61.347 310.317 L 76.962 310.317 L 76.962 310.109 C 76.962 306.575 74.241 303.71 70.884 303.71 L 68.032 301.432 L 62.71 303.71 L 61.346 303.71 L 61.347 310.317 Z" fill="#2f2e41" style=""></path>
  <path d="M 125.082 167.828 L 107.782 150.747 L 112.467 142.483 L 129.53 163.025 C 133.328 162.623 136.115 166.7 134.547 170.363 C 132.979 174.028 128.232 174.53 126.002 171.269 C 125.321 170.272 124.995 169.053 125.082 167.828 Z" fill="#ffb6b6" style=""></path>
  <path d="M 56.558 192.697 C 56.558 192.697 54.41 213.048 59.064 232.269 L 57.311 241.56 L 61.212 294.829 L 70.679 294.829 L 77.319 207.018 L 89.716 294.829 L 99.66 294.829 L 98.439 246.59 L 102.743 200.235 L 100.945 189.682 L 56.558 192.697 Z" fill="#2f2e41" style=""></path>
  <path d="M 82.721 113.411 L 61.582 113.411 L 58.027 122.926 L 58.885 198.162 C 58.885 198.162 100.767 198.162 103.63 195.147 L 94.681 162.358 L 91.459 120.526 L 82.721 113.411 Z" fill="#6c63ff" style=""></path>
  <polygon points="94.323 120.149 109.357 137.109 114.727 140.877 116.158 145.776 110.073 156.706 103.272 154.068 101.124 145.776 88.503 134.914 87.163 117.511 94.323 120.149" fill="#2f2e41" style=""></polygon>
  <polygon points="80.75 113.949 83.223 125.068 86.627 164.808 91.28 194.959 104.705 194.959 96.649 162.171 93.428 119.961 82.689 113.177 80.75 113.949" fill="#2f2e41" style=""></polygon>
  <polygon points="63.508 113.949 67.296 126.745 73.382 168.954 64.075 199.103 55.039 199.252 52.687 189.899 57.989 165.939 50.83 119.961 61.569 113.177 63.508 113.949" fill="#2f2e41" style=""></polygon>
  <circle cx="297.156" cy="189.449" r="25.458" fill="#ffb6b6" style="" transform="matrix(0.503299, 0, 0, 0.529885, -78.228592, -4.233252)"></circle>
  <path d="M 63.939 102.83 C 63.939 102.83 63.323 103.814 64.512 107.983 L 59.064 103.379 L 58.468 98.322 C 58.468 98.322 55.696 87.897 65.201 82.893 C 65.201 82.893 73.518 78.306 81.439 84.979 C 81.439 84.979 84.609 85.396 84.213 85.812 C 83.816 86.229 81.836 87.48 83.816 87.063 C 85.796 86.646 86.985 84.561 86.985 85.812 C 86.985 87.063 83.42 89.982 83.42 89.982 C 83.42 89.982 84.806 93.944 75.301 88.523 C 74.284 91.199 72.325 93.358 69.833 94.551 L 70.138 94.865 L 67.775 100.198 C 67.775 100.198 65.325 96.784 63.939 102.83 Z" fill="#2f2e41" style=""></path>
  <path d="M 64.944 208.095 L 107.992 105.903 C 108.925 103.695 111.379 102.7 113.478 103.676 L 145.001 118.395 C 147.098 119.378 148.044 121.962 147.116 124.172 L 104.068 226.363 C 103.135 228.571 100.681 229.567 98.582 228.59 L 67.059 213.871 C 64.962 212.889 64.016 210.305 64.944 208.095 Z" fill="#fff" style=""></path>
  <path d="M 64.944 208.095 L 107.992 105.903 C 108.925 103.695 111.379 102.7 113.478 103.676 L 145.001 118.395 C 147.098 119.378 148.044 121.962 147.116 124.172 L 104.068 226.363 C 103.135 228.571 100.681 229.567 98.582 228.59 L 67.059 213.871 C 64.962 212.889 64.016 210.305 64.944 208.095 Z M 146.448 123.859 C 147.213 122.038 146.433 119.909 144.705 119.1 L 113.182 104.38 C 111.452 103.576 109.43 104.396 108.661 106.216 L 65.613 208.407 C 64.848 210.228 65.628 212.358 67.356 213.167 L 98.879 227.886 C 100.608 228.691 102.63 227.87 103.399 226.051 L 146.448 123.859 Z" fill="#3f3d56" style=""></path>
  <circle cx="377.963" cy="289.844" r="32.005" fill="#ccc" style="" transform="matrix(0.503299, 0, 0, 0.529885, -78.228592, -4.233252)"></circle>
  <circle cx="362.392" cy="324.952" r="32.005" fill="#3f3d56" style="" transform="matrix(0.503299, 0, 0, 0.529885, -78.228592, -4.233252)"></circle>
  <path d="M 89.796 202.06 C 78.46 196.768 76.818 180.54 86.839 172.851 C 91.49 169.283 97.596 168.598 102.857 171.055 C 110.989 174.852 119.908 194.328 111.051 193.433 C 100.91 192.408 97.928 205.858 89.796 202.06 Z" fill="#6c63ff" style=""></path>
  <path d="M 68.13 191.999 L 55.542 158.981 L 65.608 161.1 L 74.009 189.414 C 77.653 190.611 78.7 195.511 75.895 198.235 C 73.089 200.96 68.534 199.465 67.696 195.545 C 67.44 194.346 67.594 193.091 68.13 191.999 Z" fill="#ffb6b6" style=""></path>
  <path d="M 47.748 128.016 C 47.015 136.527 48.533 144.001 51.255 150.919 L 51.605 157.072 L 54.403 161.267 L 66.335 162.907 L 68.526 155.633 L 63.621 148.762 L 63.209 131.607 L 50.972 119.821 L 47.748 128.016 Z" fill="#2f2e41" style=""></path>
  <path d="M 36.495 301.511 C 35.617 301.553 35.025 300.579 35.429 299.756 C 35.49 299.633 35.57 299.521 35.668 299.426 L 35.746 299.099 C 35.736 299.073 35.725 299.046 35.715 299.02 C 34.794 296.731 31.865 296.35 30.442 298.334 C 30.286 298.551 30.157 298.79 30.057 299.043 C 29.131 301.389 27.953 303.739 27.663 306.22 C 27.536 307.317 27.589 308.429 27.823 309.506 C 25.649 304.514 24.521 299.089 24.513 293.598 C 24.513 292.221 24.585 290.843 24.731 289.474 C 24.851 288.352 25.018 287.237 25.232 286.13 C 26.397 280.126 28.898 274.499 32.53 269.709 C 34.288 268.7 35.709 267.147 36.603 265.26 C 36.926 264.582 37.155 263.858 37.282 263.111 C 37.084 263.138 36.535 259.959 36.684 259.764 C 36.408 259.323 35.913 259.102 35.611 258.672 C 34.111 256.529 32.042 256.904 30.963 259.815 C 28.657 261.041 28.634 263.073 30.049 265.027 C 30.95 266.271 31.073 267.954 31.863 269.285 C 31.782 269.395 31.698 269.501 31.616 269.61 C 30.131 271.621 28.836 273.781 27.75 276.059 C 28.014 273.507 27.7 270.927 26.831 268.529 C 25.951 266.294 24.302 264.412 22.85 262.48 C 21.355 260.46 18.343 260.902 17.428 263.275 C 17.324 263.544 17.255 263.826 17.221 264.113 C 17.218 264.142 17.216 264.171 17.212 264.199 C 17.428 264.327 17.639 264.463 17.846 264.607 C 18.837 265.305 18.74 266.87 17.67 267.427 C 17.529 267.5 17.377 267.55 17.221 267.575 L 17.19 267.58 C 17.266 268.399 17.402 269.21 17.596 270.007 C 15.733 277.593 19.755 280.356 25.498 280.479 C 25.625 280.548 25.749 280.617 25.876 280.682 C 24.785 283.936 24.101 287.325 23.84 290.764 C 23.693 292.793 23.702 294.832 23.866 296.859 L 23.857 296.788 C 23.441 294.533 22.298 292.498 20.622 291.028 C 18.133 288.875 14.616 288.083 11.931 286.352 C 10.779 285.573 9.258 286.4 9.194 287.839 C 9.189 287.951 9.194 288.063 9.208 288.173 L 9.219 288.249 C 9.619 288.42 10.009 288.618 10.386 288.841 C 10.601 288.969 10.812 289.105 11.019 289.249 C 12.011 289.946 11.914 291.512 10.843 292.068 C 10.702 292.142 10.551 292.192 10.394 292.217 L 10.363 292.222 C 10.34 292.226 10.321 292.229 10.298 292.233 C 10.982 293.952 11.942 295.535 13.135 296.911 C 14.301 303.533 19.304 304.161 24.657 302.233 L 24.66 302.233 C 25.247 304.92 26.098 307.535 27.198 310.036 L 36.268 310.036 C 36.301 309.93 36.329 309.821 36.359 309.714 C 35.52 309.77 34.677 309.717 33.85 309.557 C 34.522 308.687 35.195 307.812 35.868 306.942 C 35.883 306.926 35.897 306.909 35.91 306.891 C 36.252 306.446 36.596 306.005 36.937 305.56 L 36.938 305.559 C 36.956 304.195 36.807 302.834 36.495 301.511 Z" fill="#f2f2f2" style=""></path>
  <path d="M 137.936 310.065 C 137.937 310.414 137.668 310.697 137.337 310.695 L 9.857 310.695 C 9.395 310.695 9.107 310.17 9.337 309.75 C 9.445 309.554 9.642 309.434 9.857 309.434 L 137.337 309.434 C 137.668 309.433 137.937 309.716 137.936 310.065 Z" fill="#ccc" style=""></path>
  <text style="fill: rgb(140, 138, 138); font-family: Arial, sans-serif; font-size: 10px; text-anchor: middle; white-space: pre;" transform="matrix(1, 0, 0, 1, 64.736115, 9.104941)"><tspan x="211.003" y="141.421" dy="1em">​</tspan><tspan>since</tspan><tspan x="211.003" dy="1em">​</tspan><tspan>${since}</tspan><tspan x="211.003" dy="1em">​</tspan><tspan x="211.003" dy="1em">​</tspan></text>
  <text style="fill: rgb(140, 138, 138); font-family: Arial, sans-serif; font-size: 18px; text-anchor: middle; white-space: pre;" transform="matrix(1, 0, 0, 1, 64.814522, 1.793593)"><tspan x="211.003" y="141.421">${counter} page views</tspan><tspan x="211.003" dy="1em">​</tspan><tspan x="211.003" dy="1em">​</tspan></text>
  <text style="fill: rgb(51, 51, 51); font-family: &quot;Arial Narrow&quot;; font-size: 13px; text-anchor: end; white-space: pre;" transform="matrix(1, 0, 0, 1, 249.86467, -2.848861)"><tspan x="201.471" y="267.026">This counter is made with</tspan><tspan x="201.471" dy="1em">​</tspan><tspan>typescript, vercel serverless,</tspan><tspan x="201.471" dy="1em">​</tspan><tspan>svg and kv store. </tspan><tspan x="201.471" dy="1em">​</tspan><tspan>Click to check the source cdoe</tspan></text>
</svg>
  `;

  res.status(200).setHeader('Content-Type', 'image/svg+xml').send(template)
}
