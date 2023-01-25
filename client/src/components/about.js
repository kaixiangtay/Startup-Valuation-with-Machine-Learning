import React from 'react';

function About(props) {
  return (
    <main>
      <h1>About</h1>
      <div className='insights'>
        <div className='prediction'>
          <h2>The Project</h2>
          <br />
          <p>
            Startup valuation is a crucial and often complex process, as it involves predicting the future potential and
            success of a company that is still in its early stages of growth. Traditional methods of valuation such as
            the discounted cash flow method and the Berkus approach can be time-consuming and subjective. To assist
            startup investors with their decisions, in this project we aim to create a more reliable and accurate way to
            value startups, by using a few different ML models to compare and predict its valuation. Check out the full
            documentation on GitHub here:
            <a
              href='https://github.com/kaixiangtay/Startup-Valuation-with-Machine-Learning'
              target='_blank'
              rel='noopener noreferrer'>
              {' '}
              github.com/kaixiangtay/Startup-Valuation-with-Machine-Learning
            </a>
          </p>
        </div>
        <div className='prediction'>
          <h2>The Team</h2>
          <br />
          <p>We are a team of 1 Data Science and 3 Computer Science nerds from NUS. Check us out:</p>
          <h3>Aengus</h3>
          <a
            href='https://www.linkedin.com/in/aengus-leman-b747861b6/'
            target='_blank'
            rel='noopener noreferrer'>
            {' '}
            https://www.linkedin.com/in/aengus-leman-b747861b6/
          </a>
          <h3>Simran</h3>
          <a
            href='https://www.linkedin.com/in/simran-bhadani-aba052195/'
            target='_blank'
            rel='noopener noreferrer'>
            {' '}
            https://www.linkedin.com/in/simran-bhadani-aba052195/
          </a>
          <h3>Junxue</h3>
          <a
            href='https://www.linkedin.com/in/lim-junxue/'
            target='_blank'
            rel='noopener noreferrer'>
            {' '}
            https://www.linkedin.com/in/lim-junxue/
          </a>
          <h3>Kai Xiang</h3>
          <a
            href='https://www.linkedin.com/in/kai-xiang-tay/'
            target='_blank'
            rel='noopener noreferrer'>
            {' '}
            https://www.linkedin.com/in/kai-xiang-tay/
          </a>
        </div>
      </div>
    </main>
  );
}

export default About;
