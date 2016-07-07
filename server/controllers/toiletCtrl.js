module.exports = {
  '/': {
    get: function(req,res) {
      console.log("Received GET at /api/toilet/");
      res.end("Received GET at /api/toilet/");
    },
    post: function(req, res) {
      console.log("Received POST at /api/toilet/");
      res.end("Received POST at /api/toilet/");
    },
    put: function(req, res) {
      console.log("Received PUT at /api/toilet/");
      res.end("Received PUT at /api/toilet/");
    },
    delete: function(req, res) {
      console.log("Received DELETE at /api/toilet/");
      res.end("Received DELETE at /api/toilet/");
    }
  }
};