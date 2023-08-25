module.exports = async (req, res) => {
    if (req.method === 'POST') {
      try {
        const formData = req.body; // Assuming you are using the 'micro' library or similar to parse the body
        // Process the formData and perform any necessary validation
  
        // Return a response to the client
        res.status(200).send('Form submitted successfully');
      } catch (error) {
        res.status(400).send('Error processing form submission');
      }
    } else {
      res.status(405).send('Method Not Allowed');
    }
  };