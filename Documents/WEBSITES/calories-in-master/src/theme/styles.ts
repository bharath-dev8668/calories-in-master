const styles = {
  global: {
    'html, body, #root': {
      bg: 'white !important',
      backgroundColor: 'white !important',
      color: 'black !important',
    },
    // This resets all those boxes back to light gray/white
    '.css-1f9643d, .css-18231j5, .css-18z9f1y, .css-16p6u81, div[class*="Card"]': {
      bg: '#f7fafc !important',
      backgroundColor: '#f7fafc !important',
      borderColor: '#e2e8f0 !important',
      color: 'black !important',
    },
    // This makes sure your text is black and readable
    'p, span, h1, h2, h3, h4, .chakra-text, div': {
      color: 'black !important',
    }
  }
};

export default styles;