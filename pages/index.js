import React from 'react';
import Head from 'next/head';
import { Jumbotron, Button } from 'react-bootstrap/lib';

export default () => {
  const jumbostyle = {
    textAlign: "center",
    marginTop: "30px"
  };

  return (
    <div>
      <Head>
        <title>BUIDL</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/* -- Latest compiled and minified CSS */}
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
          integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
          crossorigin="anonymous"
        />
      </Head>

      {/* NAVBAR */}
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <a href="#" className="navbar-brand">BUIDL</a>
          </div>

          {/* NAVBAR ITEMS */}
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#">LOGIN</a>
            </li>
            <li>
              <a href="#">SIGN UP</a>
            </li>
          </ul>

        </div>
      </nav>

      <Jumbotron>
        <div className="container" style={jumbostyle}>
          <h1>Welcome, Ethereum Devs!</h1>
          <p>
            {"It's not good enough just to HODL your crypto."}
            We as need to start building new and powerful applications.
            This is what BUIDL means; to "build useful stuff" in the blockchain space.
            None of this crypto stuff matters unless we execute and #BUIDL ways to increase adoption.
          </p>
          <p>
            <a href="https://www.coindesk.com/dont-hodl-buidl-blockchain-tech-will-add-value-2018">
              <Button bsStyle="primary">
                Learn more
              </Button>
            </a>
          </p>
        </div>
      </Jumbotron>;
    </div>
  );
};
