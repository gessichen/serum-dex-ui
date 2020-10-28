import React from 'react';
import ReactMarkdown from 'react-markdown';
import tutorialMD from '../assets/solong/start_with_solong_extension.md';

export default function SolongPage() {
  const [md, setMd] = React.useState('');

  const renderers = {
    //This custom renderer changes how images are rendered
    //we use it to constrain the max width of an image to its container
    image: ({ alt, src, title }) => (
      <img
        alt={alt}
        src={src}
        title={title}
        style={{ maxWidth: 600, maxHeight: 400 }}
      />
    ),
  };

  React.useEffect(() => {
    console.log('loading md...');

    fetch(tutorialMD)
      .then((tutorial) => tutorial.text())
      .then((txt) => {
        setMd(txt);
      });
  }, [md]);

  return (
    <div style={{ paddingLeft: '80px', paddingTop: '80px' }}>
      <ReactMarkdown source={md} renderers={renderers} />
    </div>
  );
}
