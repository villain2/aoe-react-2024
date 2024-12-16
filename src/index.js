import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="AOE Studios - Home of the Wonderfully Weird featuring authors KC Hunter of the Kana Cold Series and Clive Reznor of the Immanent World series." />
      <meta name="keywords" content="aoe studios, kc hunter, author kc hunter, kana cold, kana cold series, the reaping of the black grimoires, serpahim asylum, wrath of the burning gods, the island of hell, starlight child, clive reznor, author clive reznor, the immanent world, horror, horror fiction, horror anthologies, horror short stories, urban fantasy, paranormal fiction, paranormal adventure, paranormal thriller, young adult, asian female hero, asian female heroine, japanese folklore, japanese female hero" />
      <meta name="author" content="AOE Studios" />
      <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
      <title>AOE Studios - Home of authors KC Hunter and Clive Reznor</title>
    </head>

    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
