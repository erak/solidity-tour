'use strict';

const e = React.createElement;

class Tour extends React.Component {
  constructor(props) {
    super(props);
    
    const wrapper = require('solc/wrapper');
    
    this.state = { solc: wrapper(window.Module), id: props.id, code: "", output: "", compiled: false, success: false };
  }

  compile() {
    const { solc, id } = this.state;

    const code = window.editors[id].getValue();
    const compilation = solc.compile(code);

    const hasErrors = (typeof compilation.errors !== 'undefined');
    const compilationOutput = hasErrors ? compilation.errors[0] : "Compilation successful.";

    this.setState({ output: compilationOutput, compiled: true, success: !hasErrors });
  }

  render() {
    const { compiled, output, success } = this.state;

    const message_class = success ? "success" : "error";
    const visibility_class = compiled ? "visible" : "hidden";
    const error = e(
      'div',
      { className: "output " + message_class + " " + visibility_class + " round stage" },
      output
    );
    const btn_compile = e(
      'a',
        { onClick: () => this.compile(),
          className: "btn btn-small btn-control round" },
        'Compile'
    );
    
    const controls = e('div', { className: "stage" }, btn_compile);
    
    return [error, controls];
  }
}


var reactElements = document.querySelectorAll(".compilation");
var step = 0;
reactElements.forEach(function(element) {
  ReactDOM.render(e(Tour, {id: step}), element);
  step++;
});

