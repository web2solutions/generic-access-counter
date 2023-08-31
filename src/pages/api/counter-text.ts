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
    <svg viewBox="84.151 47.898 200 287.768" width="400px" height="200px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
            <linearGradient id="legFill" y2="273" gradientUnits="userSpaceOnUse" x2="114" gradientTransform="matrix(.96593 .25882 -.25882 .96593 386.42 -31.994)" y1="239" x1="114">
            <stop id="stop4320" stop-color="#920202" offset="0"></stop>
            <stop id="stop4322" stop-color="#d12323" offset="1"></stop>
            </linearGradient>
            <linearGradient id="fold" y2="161.34" gradientUnits="userSpaceOnUse" x2="418.56" y1="161.34" x1="394.56">
            <stop id="stop4428" stop-color="#cf6161" offset="0"></stop>
            <stop id="stop4430" stop-color="#b40000" offset="1"></stop>
            </linearGradient>
            <linearGradient id="linearGradient3069" y2="171.19" gradientUnits="userSpaceOnUse" x2="198.02" gradientTransform="matrix(0.79353, 0, 0, 0.79353, 27.46698, 37.982895)" y1="69.139" x1="198.02">
            <stop id="stop4434" stop-color="#e19b9b" offset="0"></stop>
            <stop id="stop4436" stop-color="#c20606" offset="1"></stop>
            </linearGradient>
            <linearGradient id="linearGradient3071" y2="178.81" gradientUnits="userSpaceOnUse" x2="251.91" gradientTransform="matrix(0.79353, 0, 0, 0.79353, 27.46698, 37.982895)" y1="69.88" x1="251.91">
            <stop id="stop4440" stop-color="#fdeded" offset="0"></stop>
            <stop id="stop4442" stop-color="#c92b2b" offset="1"></stop>
            </linearGradient>
            <linearGradient id="linearGradient3129" y2="273" gradientUnits="userSpaceOnUse" x2="114" gradientTransform="matrix(0.73104, 0.19588, -0.19588, 0.73104, 138.764984, 1.277893)" y1="239" x1="114" xlink:href="#legFill"></linearGradient>
            <linearGradient id="linearGradient4023" y2="27.13" gradientUnits="userSpaceOnUse" x2="475" gradientTransform="matrix(0.75682, 0, 0, 0.75682, -269.440019, -9.266501)" y1="27.13" x1="451" xlink:href="#fold"></linearGradient>
            <linearGradient id="linearGradient4025" y2="-155.33" gradientUnits="userSpaceOnUse" x2="475.61" gradientTransform="matrix(0.75682, 0, 0, 0.75682, -252.500017, 94.473006)" y1="-155.33" x1="451.61" xlink:href="#fold"></linearGradient>
            <linearGradient id="linearGradient4027" y2="-284.43" gradientUnits="userSpaceOnUse" x2="436.01" gradientTransform="matrix(0.756818, -0.000001, 0.000001, 0.756818, -214.55942, 163.239797)" y1="-284.43" x1="412.01" xlink:href="#fold"></linearGradient>
            <linearGradient id="linearGradient4029" y2="-428.3" gradientUnits="userSpaceOnUse" x2="320.44" gradientTransform="matrix(0.75682, 0, 0, 0.75682, -135.820002, 232.890006)" y1="-428.3" x1="296.44" xlink:href="#fold"></linearGradient>
            <linearGradient id="linearGradient4037" y2="273" gradientUnits="userSpaceOnUse" x2="114" gradientTransform="matrix(-0.73104, 0.19588, 0.19588, 0.73104, 231.214996, 1.277893)" y1="239" x1="114" xlink:href="#legFill"></linearGradient>
            <linearGradient id="linearGradient4039" y2="-512.56" gradientUnits="userSpaceOnUse" x2="175.27" gradientTransform="matrix(0.75682, 0, 0, 0.75682, -44.533004, 265.890031)" y1="-512.56" x1="151.27" xlink:href="#fold"></linearGradient>
            <linearGradient id="linearGradient4041" y2="-539.38" gradientUnits="userSpaceOnUse" x2="-7.7187" gradientTransform="matrix(0.75682, 0, 0, 0.75682, 60.559003, 262.710027)" y1="-539.38" x1="-31.719" xlink:href="#fold"></linearGradient>
            <linearGradient id="linearGradient4043" y2="-512.87" gradientUnits="userSpaceOnUse" x2="-137.5" gradientTransform="matrix(0.756818, 0, 0, 0.756818, 133.689614, 234.109564)" y1="-512.87" x1="-161.5" xlink:href="#fold"></linearGradient>
            <linearGradient id="linearGradient4045" y2="-420.05" gradientUnits="userSpaceOnUse" x2="-296.84" gradientTransform="matrix(0.75682, 0, 0, 0.75682, 214.370001, 165.950012)" y1="-420.05" x1="-320.84" xlink:href="#fold"></linearGradient>
            <linearGradient id="linearGradient4047" y2="-241.53" gradientUnits="userSpaceOnUse" x2="-424.22" gradientTransform="matrix(0.75682, 0, 0, 0.75682, 263.160019, 51.214005)" y1="-241.53" x1="-448.22" xlink:href="#fold"></linearGradient>
            <linearGradient id="linearGradient4049" y2="-59.695" gradientUnits="userSpaceOnUse" x2="-458" gradientTransform="matrix(0.75682, 0, 0, 0.75682, 262.750027, -53.300016)" y1="-59.695" x1="-482" xlink:href="#fold"></linearGradient>
            <linearGradient id="linearGradient4051" y2="76.252" gradientUnits="userSpaceOnUse" x2="-430.41" gradientTransform="matrix(0.756818, 0, 0, 0.756818, 237.449286, -127.669754)" y1="76.252" x1="-454.41" xlink:href="#fold"></linearGradient>
            <linearGradient id="linearGradient4053" y2="236.3" gradientUnits="userSpaceOnUse" x2="-342.2" gradientTransform="matrix(0.756816, 0, 0, 0.756816, 170.569021, -208.778783)" y1="236.3" x1="-366.2" xlink:href="#fold"></linearGradient>
            <linearGradient id="linearGradient4055" y2="343.65" gradientUnits="userSpaceOnUse" x2="-209.01" gradientTransform="matrix(0.75682, 0, 0, 0.75682, 85.584, -255.649994)" y1="343.65" x1="-233.01" xlink:href="#fold"></linearGradient>
            <linearGradient id="linearGradient4057" y2="398.7" gradientUnits="userSpaceOnUse" x2="-35.362" gradientTransform="matrix(0.75682, 0, 0, 0.75682, -18.697996, -268.950013)" y1="398.7" x1="-59.362" xlink:href="#fold"></linearGradient>
            <linearGradient id="linearGradient4059" y2="393.38" gradientUnits="userSpaceOnUse" x2="106.42" gradientTransform="matrix(0.756817, 0, 0, 0.756817, -95.425738, -252.139075)" y1="393.38" x1="82.418" xlink:href="#fold"></linearGradient>
            <linearGradient id="linearGradient4061" y2="324.03" gradientUnits="userSpaceOnUse" x2="275.1" gradientTransform="matrix(0.75682, 0, 0, 0.75682, -184.600007, -196.490022)" y1="324.03" x1="251.1" xlink:href="#fold"></linearGradient>
            <linearGradient id="linearGradient4063" y2="161.34" gradientUnits="userSpaceOnUse" x2="418.56" gradientTransform="matrix(0.75682, 0, 0, 0.75682, -253.880005, -90.716003)" y1="161.34" x1="394.56" xlink:href="#fold"></linearGradient>
        </defs>
        <text style="white-space: pre; fill: rgb(51, 51, 51); font-family: Arial, sans-serif; font-size: 14.5px;" x="160.166" y="139.194">#${counter} views since ${since}</text>
        <path id="path4020" style="fill:url(#linearGradient3129)" d="M 195.035 191.859 L 151.177 180.109 L 115.917 311.699 L 142.549 300.029 L 159.775 323.449 L 195.035 191.859 Z"></path>
        <path id="path4035" style="fill:url(#linearGradient4037)" d="M 174.95 191.859 L 218.808 180.106 L 254.068 311.696 L 227.436 300.026 L 210.211 323.45 L 174.95 191.859 Z"></path>
        <path id="path4024" style="fill:#980000" d="M 184.986 69.765 C 184.986 69.765 184.986 69.765 184.986 69.765"></path>
        <rect id="rect4026" style="fill:url(#linearGradient4023)" transform="matrix(0.994847, 0.10139, -0.10139, 0.994847, 113.424995, 62.028893)" height="36.327" width="18.164" y="-6.898" x="71.888"></rect>
        <rect id="rect4028" style="fill:url(#linearGradient4025)" transform="matrix(0.880461, 0.474119, -0.474119, 0.880461, 113.424995, 62.028893)" height="36.327" width="18.164" y="-41.248" x="89.285"></rect>
        <rect id="rect4030" style="fill:url(#linearGradient4027)" transform="matrix(0.706431, 0.707782, -0.707782, 0.706431, 113.424995, 62.028893)" height="36.327" width="18.164" y="-70.181" x="97.262"></rect>
        <rect id="rect4032" style="fill:url(#linearGradient4029)" transform="matrix(0.382071, 0.924133, -0.924133, 0.382071, 113.424995, 62.028893)" height="36.327" width="18.164" y="-109.42" x="88.532"></rect>
        <rect id="rect4034" style="fill:url(#linearGradient4039)" transform="matrix(0.029998, 0.99955, -0.99955, 0.029998, 113.424995, 62.028893)" height="36.327" width="18.164" y="-140.19" x="69.951"></rect>
        <rect id="rect4036" style="fill:url(#linearGradient4041)" transform="matrix(-0.354617, 0.935012, -0.935012, -0.354617, 113.424995, 62.028893)" height="36.327" width="18.164" y="-163.67" x="36.554"></rect>
        <rect id="rect4038" style="fill:url(#linearGradient4043)" transform="matrix(-0.609011, 0.793162, -0.793162, -0.609011, 113.424995, 62.028893)" height="36.327" width="18.164" y="-172.2" x="11.467"></rect>
        <rect id="rect4040" style="fill:url(#linearGradient4045)" transform="matrix(-0.866025, 0.5, -0.5, -0.866025, 113.424995, 62.028893)" height="36.327" width="18.164" y="-170.11" x="-28.453"></rect>
        <rect id="rect4042" style="fill:url(#linearGradient4047)" transform="matrix(-0.99846, 0.055473, -0.055473, -0.99846, 113.424995, 62.028893)" height="36.327" width="18.164" y="-149.74" x="-76.064"></rect>
        <rect id="rect4044" style="fill:url(#linearGradient4049)" transform="matrix(-0.943801, -0.330514, 0.330514, -0.943801, 113.424995, 62.028893)" height="36.327" width="18.164" y="-116.64" x="-102.04"></rect>
        <rect id="rect4046" style="fill:url(#linearGradient4051)" transform="matrix(-0.808452, -0.588562, 0.588562, -0.808452, 113.424995, 62.028893)" height="36.327" width="18.164" y="-88.127" x="-106.46"></rect>
        <rect id="rect4048" style="fill:url(#linearGradient4053)" transform="matrix(-0.521903, -0.853005, 0.853005, -0.521903, 113.424995, 62.028893)" height="36.327" width="18.164" y="-48.104" x="-106.579"></rect>
        <rect id="rect4050" style="fill:url(#linearGradient4055)" transform="matrix(-0.18601, -0.982548, 0.982548, -0.18601, 113.424995, 62.028893)" height="36.327" width="18.164" y="-13.735" x="-90.762"></rect>
        <rect id="rect4052" style="fill:url(#linearGradient4057)" transform="matrix(0.203915, -0.978989, 0.978989, 0.203915, 113.424995, 62.028893)" height="36.327" width="18.164" y="14.632" x="-63.625"></rect>
        <rect id="rect4054" style="fill:url(#linearGradient4059)" transform="matrix(0.477442, -0.878663, 0.878663, 0.477442, 113.424995, 62.028893)" height="36.327" width="18.164" y="27.409" x="-33.05"></rect>
        <rect id="rect4056" style="fill:url(#linearGradient4061)" transform="matrix(0.777168, -0.629293, 0.629293, 0.777168, 113.424995, 62.028893)" height="36.327" width="18.164" y="30.583" x="5.441"></rect>
        <rect id="rect4058" style="fill:url(#linearGradient4063)" transform="matrix(0.978603, -0.20576, 0.20576, 0.978603, 113.424995, 62.028893)" height="36.327" width="18.164" y="13.226" x="44.734"></rect>
        <path id="path4060" style="stroke:url(#linearGradient3071);stroke-width:3.0271;fill:url(#linearGradient3069)" d="M 184.982 95.117 C 184.982 95.117 184.982 95.117 184.982 95.117"></path>
    </svg>
  `;

  res.status(200).setHeader('Content-Type', 'image/svg+xml').send(template)
}
