import { useState, useEffect } from 'react';
import axios from 'axios';

const useResources = (resource) => {
  const [resources, setResources] = useState([]);

// (greeting) => console.log(greeting) - function definition
// ((greeting) => console.log(greeting))('hi') - call invocation
// logs 'hi' on the screen
  useEffect(() => {
    (async resource => {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);

      setResources(response.data);
    })(resource)
  }, [resource]);

  return resources;
};

export default useResources;
