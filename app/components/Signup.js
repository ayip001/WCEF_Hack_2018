import React from 'react';
import { Button } from 'react-bootstrap';

class Signup extends React.Component {
  constructor (props) {
    super(props);
    this.state = {"step":0};
    this.handleNextState = this.handleNextState.bind(this);
    const { toggleLogin } = this.props;
  };

  handleNextState () {
    this.setState({"step": this.state.step + 1});
  };

  render () {
    const { step } = this.state;

    const shuffle = (a) => {
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    };

    var wordPairs = [
      "seashore jump",
      "town mailbox",
      "reproduce glib",
      "grass serve",
      "horrible gaudy",
      "pollution search",
      "fire mate",
      "shelf stocking",
      "waste worry",
      "veil lean"
    ];
    shuffle(wordPairs);

    const block = wordPairs.map((words, i) => (
      <a href="#">
        { words }
        <br />
      </a>
    ));

    const content = [
      <div>
        <h2>Enter account information</h2>
        <a href="#">Username:</a>
        <br />
        <input />
        <br />
        <a href="#">Email (Optional):</a>
        <br />
        <input />
        <br />
        <a href="#">Passphrase:</a>
        <br />
        <input />
        <br />
        <a href="#">Enter pass again:</a>
        <br />
        <input />
        <br />
        <br />
        <br />
      </div>,
      <div>
        <h2><b>IMPORTANT!</b> Save this seed for account recovery</h2>
        <h2>If you lose this you will lose means to recover your account, forever!</h2>
        <br />
        <br />
        <br />
        <Button>
          {block}
        </Button>
        <br />
        <br />
        <br />
      </div>,
      <div>
        <h2>Welcome to NCB!</h2>
        <a href="#">Your private key has been stored into your device!</a>
        <Button href="/login">Log in now</Button>
      </div>
    ];

    const buttonText = [
      "Next",
      "Generate P/P Key Pair"
    ]

    return (
      <div>
        {content[step]}
        <Button onClick={this.handleNextState}>{buttonText[step]}</Button>
        <br />
        <br />
        <br />
      </div>
    );
  };
};

export default Signup;
