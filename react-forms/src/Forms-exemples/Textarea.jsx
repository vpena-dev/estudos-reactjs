import React from 'react';

const Textarea = () => {
  const [textarea, setTextarea] = React.useState('');

  return (
    <form>
      <textarea
        value={textarea}
        onChange={({ target }) => setTextarea(target.value)}
        rows="5"
      />
      {textarea}
    </form>
  );
};

export default Textarea;
