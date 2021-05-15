import React, { PureComponent } from "react";

import jsPDF from "jspdf";

export default class pdfGenerator extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  jsPdfGenerator = () => {
    var doc = new jsPDF("p", "pt");

    doc.text(20, 20, "this is default text");
    doc.setFont("courier");

    doc.text(20, 30, "This is text with courier font");

    //save the doc
    doc.save("generated.pdf");
  };

  render() {
    return (
      <div>
        <button onClick={this.jsPdfGenerator}>Generate PDF</button>
      </div>
    );
  }
}
