module.exports = function(deployTarget) {  
  return {
    pagefront: {
      app: 'qa-board',
      key: process.env.PAGEFRONT_KEY
    }
  };
};
