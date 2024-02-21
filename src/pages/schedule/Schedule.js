import {Link} from "react-router-dom";
import {useState} from "react";
import HappyBeep from "../../audio/message.mp3";

//import confetti from 'https://cdn.skypack.dev/canvas-confetti';

function makeConfetti() {
   //confetti();
   const sound = document.getElementById("audio");
   sound.pause();
   sound.currentTime = 0;
   sound.play();
}

function ClipperIcon({useColor, fn}) {
   return (
       <svg onClick={fn} className={useColor} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="14 1 36 62" style={{objectFit: "contain", height: "1.5em"}}>
          <path d="M47.886,46.472A1.631,1.631,0,0,1,47,45.02a1.827,1.827,0,0,1,.99-1.551,4,4,0,0,0-.1-7A1.631,1.631,0,0,1,47,35.02a1.827,1.827,0,0,1,.99-1.551,4,4,0,0,0-1.29-7.408l-1.773-4.433A1,1,0,0,0,44,21H41.742L38.267,9.412a1,1,0,0,0-1.4-.612,1.992,1.992,0,0,1-1.25.165,2,2,0,0,1,.114-3.947,1,1,0,0,0,.829-1.279l-.608-2.027A1,1,0,0,0,35,1H30.639A3.01,3.01,0,0,0,27.7,3.411L25.165,16.064A6.006,6.006,0,0,0,20.09,21H20a1,1,0,0,0-.929.628L17.3,26.061a4,4,0,0,0-1.289,7.408,1.842,1.842,0,0,1,.991,1.6,1.615,1.615,0,0,1-.887,1.4,4,4,0,0,0-.1,7,1.842,1.842,0,0,1,.991,1.6,1.615,1.615,0,0,1-.887,1.4,4,4,0,0,0,1.066,7.443l.8,3.6A6.958,6.958,0,0,0,24.813,63H25a4,4,0,0,0,4-4V54a.983.983,0,0,0-.071-.371A26.853,26.853,0,0,1,27,43.614v-3.23a26.825,26.825,0,0,1,1.93-10.013A.992.992,0,0,0,29,30V29h6v1a.983.983,0,0,0,.071.371A26.851,26.851,0,0,1,37,40.384v3.23a26.826,26.826,0,0,1-1.93,10.014A.992.992,0,0,0,35,54v5a4,4,0,0,0,4,4h.188a6.959,6.959,0,0,0,6.833-5.482l.8-3.6a4,4,0,0,0,1.067-7.443ZM29,23v-.726L31.565,18h1.757L35,22.192V23Zm.657-19.2a1,1,0,0,1,.982-.8h3.616l.1.352A4.032,4.032,0,0,0,32.8,4.594a4,4,0,0,0,2.467,6.341,4.1,4.1,0,0,0,1.37.014L39.654,21H36.676l-1.748-4.371A1,1,0,0,0,34,16H27.219ZM26,18h3.233l-1.8,3h-5.29A3.994,3.994,0,0,1,26,18ZM16,50a2,2,0,0,1,1.058-1.764A3.629,3.629,0,0,0,19,45.02a3.8,3.8,0,0,0-1.994-3.285,2,2,0,0,1,.052-3.5A3.629,3.629,0,0,0,19,35.02a3.8,3.8,0,0,0-1.994-3.285A2,2,0,0,1,18,28a1,1,0,0,0,.928-.629l.249-.624A9.165,9.165,0,0,1,21,32.242V47.757a9.167,9.167,0,0,1-1.9,5.6l-.126-.571A1,1,0,0,0,18,52,2,2,0,0,1,16,50Zm11-20.19a28.826,28.826,0,0,0-2,10.575v3.23A28.841,28.841,0,0,0,27,54.19V59a2,2,0,0,1-2,2h-.185a4.97,4.97,0,0,1-4.882-3.915l-.3-1.33c.023-.019.051-.027.072-.048A11.171,11.171,0,0,0,23,47.757V32.242a11.157,11.157,0,0,0-2.977-7.6L20.677,23H27ZM29,25h2v2H29Zm4,2V25h2v2Zm6.189,34H39a2,2,0,0,1-2-2V54.19a28.828,28.828,0,0,0,2-10.576v-3.23a28.843,28.843,0,0,0-2-10.575V23h6.322l.656,1.639A11.146,11.146,0,0,0,41,32.242V47.757a11.171,11.171,0,0,0,3.291,7.949c.021.021.049.029.072.048l-.3,1.33A4.969,4.969,0,0,1,39.187,61ZM46,52a1,1,0,0,0-.976.783l-.126.569A9.17,9.17,0,0,1,43,47.757V32.242a9.157,9.157,0,0,1,1.821-5.494l.249.623A1,1,0,0,0,46,28a2,2,0,0,1,1,3.735A3.819,3.819,0,0,0,45,35.069a3.61,3.61,0,0,0,1.941,3.166,2,2,0,0,1,.052,3.5A3.819,3.819,0,0,0,45,45.069a3.61,3.61,0,0,0,1.941,3.166A2,2,0,0,1,46,52Z"/>
          <path d="M32,11a2,2,0,1,0,2,2A2,2,0,0,0,32,11Z"/>
          <path d="M39.5,24A1.5,1.5,0,1,0,41,25.5,1.5,1.5,0,0,0,39.5,24Zm0,2a.5.5,0,1,1,.5-.5A.5.5,0,0,1,39.5,26Z"/>
          <path d="M24.5,27A1.5,1.5,0,1,0,23,25.5,1.5,1.5,0,0,0,24.5,27Zm0-2a.5.5,0,1,1-.5.5A.5.5,0,0,1,24.5,25Z"/>
       </svg>
   );
}

function ToothbrushIcon({useColor, fn}) {
   return (
       <svg onClick={fn} className={useColor} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px"
            enableBackground="new 0 0 100 100" xmlSpace="preserve" viewBox="8.47 11.07 83.06 77.86" style={{objectFit: "contain", height: "1.5em"}}><path d="M26.63,70.76c0.59,0.59,0.59,1.54,0,2.13c-0.29,0.29-0.67,0.44-1.061,0.44c-0.38,0-0.77-0.15-1.06-0.44  c-0.58-0.59-0.58-1.54,0-2.13C25.1,70.18,26.05,70.18,26.63,70.76z M28.05,67.23c-0.59,0.59-0.59,1.54,0,2.12  c0.29,0.29,0.67,0.44,1.06,0.44c0.381,0,0.761-0.15,1.061-0.44c0.58-0.58,0.58-1.53,0-2.12C29.58,66.64,28.63,66.64,28.05,67.23z   M20.979,74.3c-0.59,0.59-0.59,1.54,0,2.12c0.29,0.29,0.67,0.44,1.061,0.44c0.38,0,0.77-0.15,1.06-0.44c0.58-0.58,0.58-1.53,0-2.12  C22.51,73.72,21.56,73.72,20.979,74.3z M35.12,60.16c-0.59,0.58-0.59,1.53,0,2.12c0.29,0.29,0.67,0.44,1.06,0.44  c0.38,0,0.771-0.15,1.061-0.44c0.579-0.59,0.579-1.54,0-2.12C36.649,59.57,35.7,59.57,35.12,60.16z M45.72,49.55  c-0.58,0.59-0.58,1.54,0,2.12c0.3,0.3,0.68,0.44,1.061,0.44c0.39,0,0.77-0.14,1.069-0.44c0.58-0.58,0.58-1.53,0-2.12  C47.26,48.97,46.31,48.97,45.72,49.55z M42.189,53.09c-0.59,0.58-0.59,1.53,0,2.12c0.29,0.29,0.681,0.44,1.061,0.44  s0.77-0.15,1.06-0.44c0.59-0.59,0.59-1.54,0-2.12C43.72,52.5,42.77,52.5,42.189,53.09z M38.649,56.62c-0.58,0.59-0.58,1.54,0,2.12  c0.29,0.3,0.681,0.44,1.061,0.44c0.39,0,0.77-0.14,1.06-0.44c0.59-0.58,0.59-1.53,0-2.12C40.189,56.04,39.24,56.04,38.649,56.62z   M31.58,63.69c-0.58,0.59-0.58,1.54,0,2.13c0.29,0.29,0.68,0.43,1.06,0.43c0.391,0,0.771-0.14,1.07-0.43c0.58-0.59,0.58-1.54,0-2.13  C33.12,63.11,32.17,63.11,31.58,63.69z M66.938,51.673l-9.524-9.524c-1.327,1.541-2.057,3.48-2.057,5.534  c0,2.289-0.892,4.442-2.511,6.061L19.562,87.028c-1.268,1.267-2.932,1.9-4.596,1.9c-1.665,0-3.329-0.633-4.597-1.9  c-2.534-2.534-2.534-6.658,0-9.192l33.284-33.284c1.053-1.052,1.632-2.452,1.632-3.939c0-3.072,1.196-5.959,3.368-8.131  l14.749-14.749c1.228-1.228,2.859-1.904,4.596-1.904s3.369,0.676,4.597,1.904l14.142,14.142c0.586,0.586,0.586,1.536,0,2.121  L69.06,51.673c-0.293,0.293-0.677,0.439-1.061,0.439S67.231,51.966,66.938,51.673z M70.475,24.803c0.891-0.891,1.997-1.487,3.2-1.75  l-3.2-3.201c-1.321-1.321-3.627-1.322-4.95,0L50.775,34.602c-1.605,1.605-2.489,3.74-2.489,6.01c0,2.289-0.892,4.442-2.511,6.061  L12.491,79.957c-1.364,1.365-1.364,3.585,0,4.95c1.366,1.365,3.586,1.364,4.95,0l33.284-33.284c1.053-1.052,1.632-2.452,1.632-3.939  c0-3.071,1.196-5.959,3.368-8.132L70.475,24.803z M59.514,40.006l8.485,8.485l1.415-1.415l-6.01-6.01  c-0.586-0.585-0.586-1.536,0-2.121c0.586-0.586,1.535-0.586,2.121,0l6.01,6.01l1.414-1.414l-6.01-6.01  c-0.586-0.585-0.586-1.536,0-2.121c0.586-0.586,1.535-0.586,2.121,0l6.01,6.01l1.415-1.415l-6.01-6.01  c-0.586-0.585-0.586-1.536,0-2.121c0.586-0.586,1.535-0.586,2.121,0l6.01,6.01l1.414-1.414l-6.01-6.01  c-0.586-0.585-0.586-1.535,0-2.121s1.535-0.586,2.121,0l6.01,6.01l1.414-1.414l-6.011-6.011c-1.321-1.32-3.626-1.321-4.949,0.001  L59.514,40.006z M91.533,57.38c0,2.895-2.355,5.25-5.25,5.25s-5.25-2.355-5.25-5.25s2.355-5.25,5.25-5.25  S91.533,54.485,91.533,57.38z M88.533,57.38c0-1.241-1.01-2.25-2.25-2.25s-2.25,1.009-2.25,2.25s1.01,2.25,2.25,2.25  S88.533,58.621,88.533,57.38z M51.582,77.229c0,2.895-2.355,5.25-5.25,5.25s-5.25-2.355-5.25-5.25s2.355-5.25,5.25-5.25  S51.582,74.334,51.582,77.229z M48.582,77.229c0-1.241-1.01-2.25-2.25-2.25s-2.25,1.009-2.25,2.25s1.01,2.25,2.25,2.25  S48.582,78.47,48.582,77.229z M15.02,52.38c0-2.895,2.355-5.25,5.25-5.25s5.25,2.355,5.25,5.25s-2.355,5.25-5.25,5.25  S15.02,55.275,15.02,52.38z M18.02,52.38c0,1.241,1.01,2.25,2.25,2.25s2.25-1.009,2.25-2.25s-1.01-2.25-2.25-2.25  S18.02,51.14,18.02,52.38z M40.829,16.318c0-2.895,2.355-5.25,5.25-5.25s5.25,2.355,5.25,5.25s-2.355,5.25-5.25,5.25  S40.829,19.213,40.829,16.318z M43.829,16.318c0,1.241,1.01,2.25,2.25,2.25s2.25-1.009,2.25-2.25s-1.01-2.25-2.25-2.25  S43.829,15.077,43.829,16.318z M22.419,30.46c0-4.273,3.477-7.75,7.75-7.75s7.75,3.477,7.75,7.75s-3.477,7.75-7.75,7.75  S22.419,34.733,22.419,30.46z M25.419,30.46c0,2.619,2.131,4.75,4.75,4.75s4.75-2.131,4.75-4.75s-2.131-4.75-4.75-4.75  S25.419,27.841,25.419,30.46z M75.624,71.522c0,4.273-3.477,7.75-7.75,7.75s-7.75-3.477-7.75-7.75s3.477-7.75,7.75-7.75  S75.624,67.249,75.624,71.522z M72.624,71.522c0-2.619-2.131-4.75-4.75-4.75s-4.75,2.131-4.75,4.75s2.131,4.75,4.75,4.75  S72.624,74.142,72.624,71.522z"/></svg>
   );
}

function SpongeIcon({useColor, fn}) {
   return (
       <svg onClick={fn} className={useColor} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px"
            enableBackground="new 0 0 64 64" xmlSpace="preserve" viewBox="1 7.08 62 49.84" style={{objectFit: "contain", height: "1.5em"}}><g><g><path d="M63,38.682V26.174c0-7.049-7.182-12.783-16.01-12.783c-4.713,0-7.382,1.455-9.736,2.739    c-1.726,0.94-3.217,1.754-5.256,1.754c-2.04,0-3.53-0.813-5.257-1.754c-1.582-0.862-3.357-1.823-5.833-2.348    c-0.069-1.737-1.279-3.188-2.908-3.603c-0.126-1.73-1.574-3.1-3.336-3.1c-1.71,0-3.125,1.292-3.321,2.951    c-0.926,0.262-1.707,0.888-2.163,1.737c-1.924-0.018-3.429,1.496-3.428,3.375c0,0.592,0.167,1.141,0.436,1.624    C2.888,19.184,1,22.553,1,26.174v12.508c0,7.049,7.18,12.783,16.006,12.783c4.714,0,7.382-1.455,9.736-2.739    c1.726-0.941,3.217-1.754,5.256-1.754s3.53,0.813,5.256,1.754c2.209,1.205,4.719,2.546,8.914,2.707    c0.364,1.438,1.511,2.567,2.971,2.883c0.48,1.513,1.905,2.604,3.549,2.604c1.735,0,3.197-1.193,3.608-2.845    c1.962-0.332,3.462-2.043,3.462-4.097c0-1.014-0.379-1.931-0.984-2.652C61.467,44.978,63,41.888,63,38.682z M9.132,13.769    c0.139,0,0.272,0.02,0.395,0.058c0.264,0.083,0.551,0.051,0.792-0.086s0.414-0.367,0.478-0.637    c0.17-0.711,0.797-1.207,1.573-1.207c0.3,0,0.584-0.135,0.774-0.367s0.266-0.538,0.206-0.833    c-0.018-0.088-0.028-0.179-0.028-0.271c0-0.741,0.603-1.345,1.344-1.345c0.742,0,1.345,0.604,1.345,1.345    c0,0.121-0.017,0.244-0.05,0.356c-0.088,0.302-0.029,0.628,0.16,0.88c0.189,0.251,0.485,0.399,0.8,0.399h0.124    c1.036,0,1.878,0.841,1.878,1.875s-0.842,1.875-1.878,1.875c-0.769,0-1.453-0.462-1.743-1.177    c-0.136-0.334-0.441-0.57-0.799-0.616c-0.357-0.041-0.713,0.105-0.929,0.395c-0.409,0.547-1.161,0.768-1.819,0.516    c-0.257-0.1-0.544-0.086-0.791,0.034c-0.248,0.12-0.435,0.336-0.518,0.599c-0.182,0.573-0.709,0.958-1.313,0.958    c-0.76,0-1.379-0.617-1.379-1.375S8.372,13.769,9.132,13.769z M7.664,18.169c0.445,0.217,0.939,0.35,1.468,0.35    c1.157,0,2.201-0.579,2.814-1.505c0.77,0.078,1.558-0.099,2.211-0.488c0.722,0.806,1.76,1.285,2.887,1.285    c1.486,0,2.764-0.849,3.415-2.078c2.207,0.461,3.792,1.318,5.325,2.154c1.885,1.026,3.665,1.997,6.214,1.997    s4.329-0.971,6.214-1.998c2.249-1.227,4.575-2.495,8.778-2.495c7.725,0,14.01,4.837,14.01,10.783    c0,5.943-6.285,10.779-14.01,10.779c-4.204,0-6.529-1.269-8.778-2.495c-1.885-1.027-3.665-1.998-6.214-1.998    s-4.329,0.971-6.213,1.998c-2.249,1.227-4.575,2.495-8.779,2.495C9.283,36.953,3,32.117,3,26.174    C3,23.104,4.702,20.221,7.664,18.169z M31.998,44.972c-2.549,0-4.329,0.971-6.213,1.998c-2.249,1.227-4.575,2.495-8.779,2.495    C9.283,49.465,3,44.628,3,38.682v-6.336c2.731,3.936,7.983,6.607,14.006,6.607c4.714,0,7.382-1.455,9.736-2.739    c1.726-0.941,3.217-1.754,5.256-1.754s3.53,0.813,5.256,1.754c2.354,1.284,5.022,2.739,9.736,2.739    c6.024,0,11.278-2.672,14.01-6.607v6.336c0,2.797-1.388,5.412-3.896,7.434c-0.468-0.183-0.972-0.292-1.503-0.292    c-1.277,0-2.455,0.591-3.228,1.54c-0.676-0.522-1.516-0.818-2.405-0.818c-1.806,0-3.315,1.229-3.775,2.89    c-3.696-0.153-5.882-1.32-7.981-2.465C36.327,45.942,34.547,44.972,31.998,44.972z M55.524,52.133c0,0-0.001,0-0.001,0    c-0.28-0.025-0.565,0.094-0.777,0.283s-0.333,0.495-0.333,0.779c0,0.951-0.773,1.725-1.724,1.725    c-0.895,0-1.649-0.699-1.717-1.591c-0.04-0.521-0.481-0.925-1.004-0.925c-1.065,0-1.933-0.865-1.933-1.93s0.867-1.93,1.933-1.93    c0.722,0,1.377,0.396,1.712,1.035c0.189,0.362,0.585,0.571,0.989,0.53c0.408-0.042,0.748-0.329,0.859-0.723    c0.26-0.921,1.112-1.564,2.073-1.564c1.19,0,2.158,0.967,2.158,2.155S56.792,52.133,55.524,52.133z"/><path
           d="M12.321,27.813c2.248,0,4.076-1.829,4.076-4.077s-1.829-4.076-4.076-4.076c-2.246,0-4.073,1.828-4.073,4.076    S10.075,27.813,12.321,27.813z M12.321,21.66c1.145,0,2.076,0.932,2.076,2.076c0,1.146-0.931,2.077-2.076,2.077    c-1.143,0-2.073-0.932-2.073-2.077C10.248,22.592,11.178,21.66,12.321,21.66z"/><path
           d="M43.962,26.622c2.246,0,4.073-1.828,4.073-4.076s-1.827-4.076-4.073-4.076c-2.248,0-4.076,1.828-4.076,4.076    S41.714,26.622,43.962,26.622z M43.962,20.47c1.143,0,2.073,0.932,2.073,2.076s-0.93,2.076-2.073,2.076    c-1.145,0-2.076-0.932-2.076-2.076S42.817,20.47,43.962,20.47z"/><path
           d="M23.166,31.205c1.813,0,3.289-1.476,3.289-3.289c0-1.816-1.476-3.294-3.289-3.294c-1.816,0-3.293,1.478-3.293,3.294    C19.873,29.729,21.35,31.205,23.166,31.205z M23.166,26.622c0.711,0,1.289,0.58,1.289,1.294c0,0.711-0.578,1.289-1.289,1.289    c-0.713,0-1.293-0.578-1.293-1.289C21.873,27.202,22.453,26.622,23.166,26.622z"/><path
           d="M52.445,33.073c1.816,0,3.293-1.476,3.293-3.289c0-1.815-1.477-3.293-3.293-3.293s-3.293,1.478-3.293,3.293    C49.152,31.598,50.629,33.073,52.445,33.073z M52.445,28.491c0.713,0,1.293,0.58,1.293,1.293c0,0.711-0.58,1.289-1.293,1.289    s-1.293-0.578-1.293-1.289C51.152,29.071,51.732,28.491,52.445,28.491z"/><path
           d="M20.9,21.66c0.552,0,1-0.447,1-1s-0.448-1-1-1h-0.027c-0.552,0-0.986,0.447-0.986,1S20.348,21.66,20.9,21.66z"/><path
           d="M34.801,29.679c0.552,0,1-0.447,1-1s-0.448-1-1-1h-0.027c-0.552,0-0.986,0.447-0.986,1S34.249,29.679,34.801,29.679z"/><path
           d="M53.934,22.602c0.552,0,1-0.447,1-1s-0.448-1-1-1h-0.027c-0.552,0-0.986,0.447-0.986,1S53.381,22.602,53.934,22.602z"/><path
           d="M13.427,44.085h-0.027c-0.552,0-0.986,0.447-0.986,1s0.461,1,1.014,1s1-0.447,1-1S13.979,44.085,13.427,44.085z"/><path
           d="M25.544,39.965h-0.027c-0.552,0-0.986,0.447-0.986,1s0.461,1,1.014,1s1-0.447,1-1S26.096,39.965,25.544,39.965z"/><path
           d="M39.396,41.381h-0.03c-0.552,0-0.985,0.447-0.985,1s0.463,1,1.015,1s1-0.447,1-1S39.949,41.381,39.396,41.381z"/><path
           d="M52.473,44.589c0.552,0,1-0.447,1-1s-0.448-1-1-1h-0.027c-0.552,0-0.986,0.447-0.986,1S51.92,44.589,52.473,44.589z"/></g></g></svg>
   );
}

function EmptyIcon() {
   return (
       <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px"
    enableBackground="new 0 0 64 64" xmlSpace="preserve" viewBox="1 7.08 62 49.84" style={{objectFit: "contain", height: "1.5em"}}/>
   );
}

function taskColor(t, task, done) {
   if(t.includes(task + "_missed")) {
      return "missed";
   }

   if(t.includes(task + "_done")) {
      return "done";
   }

   return done? "done":"";
}

function DailyToDo({todayActive=false, tasks, functions=null, editable=false}) {
   const [taskList, setTaskList] = useState(tasks);

   const [brushDone, setBrushDone] = useState(false);
   const [washDone, setWashDone] = useState(false);
   const [clipDone, setClipDone] = useState(false);


   const t = taskList.toLowerCase();

   let fns = {wash: (e) => 0, brush: (e) => 0, clip: (e) => 0};
   if(functions) {
      fns = functions;
   }

   let clickFn = (e) => 0;
   if(editable) {
      function doEdit(e) {
         const newTsks = window.prompt("Add \"wash\", \"brush\", or \"clip\" to update your upcoming tasks.", taskList);
         if(newTsks != null) {
            setTaskList(newTsks);
         }
      }
      clickFn = doEdit;
   }

   return (
       <div style={{display: "flex", justifyContent: "space-evenly"}} onClick={clickFn}>
          {t.includes("wash")? <SpongeIcon useColor={taskColor(t, "wash", washDone)} fn={ e => {
             fns.wash(e);
             if(todayActive) {
                setWashDone(true);
             }
          }}/>:""}
          {t.includes("brush")? <ToothbrushIcon useColor={taskColor(t, "brush", brushDone)} fn={ e => {
             fns.brush(e);
             if(todayActive) {
                setBrushDone(true);
             }
          }}/>:""}
          {t.includes("clip")? <ClipperIcon  useColor={taskColor(t, "clip", clipDone)} fn={ e => {
             fns.clip(e);
             if(todayActive) {
                setClipDone(true);
             }
          }}/>:""}
          {t.length === 0? <EmptyIcon/>:""}
       </div>
   );
}

function Schedule() {

   const [nailsClipped, setNailsClipped] = useState(false);
   const [washed, setWashed] = useState(false);

   return (
      <>
         <h1>Care Schedule</h1>
         <Link className="nav-button" to="/">
            Back to Home
         </Link>
         <br/>
         <br/>
         <p style={{fontSize: "x-large", fontWeight: "bold"}}>I'm on a...</p>
         <p><b>5-session</b> tooth-brushing streak. Keep those chompers cleaned!</p>
         {nailsClipped?
            <p><b>1-session</b> nail-clipping streak. Good job getting back into the swing of things; your dog will thank you for it!</p>
            :
            <p><b>0-session</b> nail-clipping streak. Remember, trimmed nails improve your dog's mobility and decrease their chance of injury.</p>
         }
         {washed?
            <p><b>35-session</b> washing streak. We expect no less from a dog-washing <i>legend</i>!!!</p>
            :
            <p><b>34-session</b> washing streak. Wow!!! Excellent work keeping your dog healthy and happy!</p>
         }
         <br/>
         <br/>
         {nailsClipped && washed? "Good work completing today's care tasks! There's nothing left to do.":"Click today's tasks on the calendar to mark them as done."}
         <p>Click on any day in the future to update its task list.</p>
         <div className="grooming-calendar">
            <div className="month">
               <ul>
                  <li className="prev">&#10094;</li>
                  <li className="next">&#10095;</li>
                  <li>
                     February
                  </li>
               </ul>
            </div>

            <ul className="weekdays">
               <li>Mon</li>
               <li>Tue</li>
               <li>Wed</li>
               <li>Thu</li>
               <li>Fri</li>
               <li>Sat</li>
               <li>Sun</li>
            </ul>

            <ul className="days">
               <li style={{visibility: "hidden"}}>0<DailyToDo tasks="" /></li>
               <li style={{visibility: "hidden"}}>0<DailyToDo tasks="" /></li>
               <li>1<DailyToDo tasks="brush_done" /></li>
               <li>2<DailyToDo tasks="clip_missed" /></li>
               <li>3<DailyToDo tasks="brush_missed" /></li>
               <li>4<DailyToDo tasks="" /></li>
               <li>5<DailyToDo tasks="brush_done" /></li>
               <li>6<DailyToDo tasks="" /></li>
               <li>7<DailyToDo tasks="brush_done" /></li>
               <li>8<DailyToDo tasks="" /></li>
               <li>9<DailyToDo tasks="brush_done" /></li>
               <li>10<DailyToDo tasks="" /></li>
               <li>11<DailyToDo tasks="brush_done" /></li>
               <li>12<DailyToDo tasks="" /></li>
               <li>13<DailyToDo tasks="brush_done" /></li>
               <li>14<DailyToDo tasks="" /></li>
               <li className="active">15
                  <DailyToDo todayActive tasks="wash clip" functions={{wash: () => {setWashed(true); makeConfetti();}, clip: () => {setNailsClipped(true); makeConfetti();}}}/>
               </li>
               <li>16<DailyToDo tasks="" editable/></li>
               <li>17<DailyToDo tasks="brush" editable/></li>
               <li>18<DailyToDo tasks="" editable/></li>
               <li>19<DailyToDo tasks="brush" editable/></li>
               <li>20<DailyToDo tasks="" editable/></li>
               <li>21<DailyToDo tasks="brush" editable/></li>
               <li>22<DailyToDo tasks="" editable/></li>
               <li>23<DailyToDo tasks="brush" editable/></li>
               <li>24<DailyToDo tasks="" editable/></li>
               <li>25<DailyToDo tasks="brush" editable/></li>
               <li>26<DailyToDo tasks="clip" editable/></li>
               <li>27<DailyToDo tasks="brush" editable/></li>
               <li>28<DailyToDo tasks="" editable/></li>
               <li>29<DailyToDo tasks="brush wash" editable/></li>
            </ul>
         </div>
         <br/>
         <audio id="audio" src={HappyBeep}></audio>
      </>
   )
}

export default Schedule