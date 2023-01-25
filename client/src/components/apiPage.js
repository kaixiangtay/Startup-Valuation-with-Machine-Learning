function ApiPage() {
  return (
    <main>
      <h1>API</h1>
      <div className='insights'>
        <div className='prediction'>
          <h2>Usage</h2>
          <br></br>
          <p>
            To try out our endpoint, you can import the Postman collection located at:
            <a
              href='https://github.com/kaixiangtay/Startup-Valuation-with-Machine-Learning/blob/main/StartupValuationPrediction.postman_collection.json'
              target='_blank'
              rel='noopener noreferrer'>
              {' '}
              https://github.com/kaixiangtay/Startup-Valuation-with-Machine-Learning/blob/main/StartupValuationPrediction.postman_collection.json
            </a>
          </p>
          <br></br>
          <p>The above collection includes a sample request body and makes a POST request to our endpoint!</p>
          <br></br>
          <p>
            The API is located at:
            <a
              href='https://qw16rmz5wa.execute-api.ap-southeast-1.amazonaws.com/api/startupvaluationprediction'
              target='_blank'
              rel='noopener noreferrer'>
              {' '}
              https://67o14eof6e.execute-api.ap-southeast-1.amazonaws.com/api/startupvaluationprediction
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}

export default ApiPage;
